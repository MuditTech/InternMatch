'use server';

/**
 * @fileOverview AI-powered internship suggestion flow.
 *
 * This flow takes a candidate's profile and preferences as input and
 * returns a list of suggested internship matches.
 *
 * @fileOverview
 * - `suggestInternships`: A function that suggests internship matches based on
 *   the candidate's profile and preferences.
 * - `SuggestInternshipsInput`: The input type for the `suggestInternships` function.
 * - `SuggestInternshipsOutput`: The output type for the `suggestInternships` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestInternshipsInputSchema = z.object({
  candidateProfile: z
    .string()
    .describe("The candidate's profile, including skills, experience, and preferences."),
  internshipList: z
    .string()
    .describe('A list of available internships with descriptions, each identified by a unique ID and title.'),
});
export type SuggestInternshipsInput = z.infer<typeof SuggestInternshipsInputSchema>;

const SuggestedInternshipSchema = z.object({
    id: z.string().describe('The unique ID of the internship.'),
    title: z.string().describe('The title of the internship.'),
    relevance: z.string().describe('A brief explanation of why this internship is a good match.'),
});

const SuggestInternshipsOutputSchema = z.object({
  suggestedInternships: z
    .array(SuggestedInternshipSchema)
    .describe("An array of the top 3 suggested internships that best match the candidate's profile and preferences."),
});
export type SuggestInternshipsOutput = z.infer<typeof SuggestInternshipsOutputSchema>;

export async function suggestInternships(
  input: SuggestInternshipsInput
): Promise<SuggestInternshipsOutput> {
  return suggestInternshipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestInternshipsPrompt',
  input: {schema: SuggestInternshipsInputSchema},
  output: {schema: SuggestInternshipsOutputSchema},
  prompt: `You are an expert AI career counselor specializing in internship placements.

  Your task is to analyze the candidate's profile and the provided list of internships to identify the top 3 best matches.

  Candidate Profile:
  {{{candidateProfile}}}

  Available Internships (with ID and Title):
  {{{internshipList}}}

  Please evaluate the internships against the candidate's skills, experience, and preferences. Return a JSON object containing an array of the top 3 matches, ordered from most to least relevant. For each match, provide the internship's unique ID, title, and a brief explanation of its relevance.
  `,safetySettings: [
        {
          category: 'HARM_CATEGORY_HATE_SPEECH',
          threshold: 'BLOCK_ONLY_HIGH',
        },
        {
          category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
          threshold: 'BLOCK_NONE',
        },
        {
          category: 'HARM_CATEGORY_HARASSMENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
          threshold: 'BLOCK_LOW_AND_ABOVE',
        },
      ],
});

const suggestInternshipsFlow = ai.defineFlow(
  {
    name: 'suggestInternshipsFlow',
    inputSchema: SuggestInternshipsInputSchema,
    outputSchema: SuggestInternshipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
