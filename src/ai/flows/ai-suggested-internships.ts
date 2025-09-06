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
    .describe('A list of available internships with descriptions.'),
});
export type SuggestInternshipsInput = z.infer<typeof SuggestInternshipsInputSchema>;

const SuggestInternshipsOutputSchema = z.object({
  suggestedInternships: z
    .string()
    .describe("A list of suggested internships that match the candidate's profile and preferences."),
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
  prompt: `You are an AI-powered internship matching engine.

  Based on the candidate's profile and preferences, and the list of available internships, suggest the top internship matches for the candidate.

  Candidate Profile and Preferences: {{{candidateProfile}}}
  List of Available Internships: {{{internshipList}}}

  Return a list of suggested internships that align with the candidate's goals.
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
