'use server';

/**
 * @fileOverview AI-powered profile improvement suggestions.
 *
 * This flow takes a candidate's profile and returns a list of
 * actionable suggestions to improve their profile for better matches.
 *
 * @fileOverview
 * - `suggestProfileImprovements`: A function that suggests profile improvements.
 * - `SuggestProfileImprovementsInput`: The input type for the function.
 * - `SuggestProfileImprovementsOutput`: The output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProfileImprovementsInputSchema = z.object({
  candidateProfile: z
    .string()
    .describe("The candidate's profile, including summary, skills, and experience."),
});
export type SuggestProfileImprovementsInput = z.infer<typeof SuggestProfileImprovementsInputSchema>;

const SuggestProfileImprovementsOutputSchema = z.object({
  improvements: z
    .array(z.string())
    .describe('A list of actionable suggestions to improve the candidate profile.'),
});
export type SuggestProfileImprovementsOutput = z.infer<typeof SuggestProfileImprovementsOutputSchema>;

export async function suggestProfileImprovements(
  input: SuggestProfileImprovementsInput
): Promise<SuggestProfileImprovementsOutput> {
  return suggestProfileImprovementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProfileImprovementsPrompt',
  input: {schema: SuggestProfileImprovementsInputSchema},
  output: {schema: SuggestProfileImprovementsOutputSchema},
  prompt: `You are an expert career coach. Analyze the following candidate profile and provide 3-5 specific, actionable suggestions to make it stronger and more appealing for internship applications. Focus on clarity, impact, and keywords.

  Candidate Profile:
  {{{candidateProfile}}}

  Return a JSON object containing a list of improvement suggestions.
  `,
  safetySettings: [
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

const suggestProfileImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestProfileImprovementsFlow',
    inputSchema: SuggestProfileImprovementsInputSchema,
    outputSchema: SuggestProfileImprovementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
