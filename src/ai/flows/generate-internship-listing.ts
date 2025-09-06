// src/ai/flows/generate-internship-listing.ts
'use server';

/**
 * @fileOverview Generates an initial draft of an internship listing from a brief description.
 *
 * - generateInternshipListing - A function that generates an internship listing.
 * - GenerateInternshipListingInput - The input type for the generateInternshipListing function.
 * - GenerateInternshipListingOutput - The return type for the generateInternshipListing function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInternshipListingInputSchema = z.object({
  roleDescription: z
    .string()
    .describe('A brief description of the internship role and responsibilities.'),
});
export type GenerateInternshipListingInput = z.infer<
  typeof GenerateInternshipListingInputSchema
>;

const GenerateInternshipListingOutputSchema = z.object({
  internshipListing: z
    .string()
    .describe('A detailed draft of the internship listing.'),
});
export type GenerateInternshipListingOutput = z.infer<
  typeof GenerateInternshipListingOutputSchema
>;

export async function generateInternshipListing(
  input: GenerateInternshipListingInput
): Promise<GenerateInternshipListingOutput> {
  return generateInternshipListingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInternshipListingPrompt',
  input: {schema: GenerateInternshipListingInputSchema},
  output: {schema: GenerateInternshipListingOutputSchema},
  prompt: `You are an expert in creating compelling internship listings.

  Based on the following role description, generate a detailed internship listing that includes:

  - A captivating job title
  - A brief overview of the company
  - A detailed description of the role and responsibilities
  - Required skills and qualifications
  - Information about compensation and benefits
  - Instructions on how to apply

  Role Description: {{{roleDescription}}}`,
});

const generateInternshipListingFlow = ai.defineFlow(
  {
    name: 'generateInternshipListingFlow',
    inputSchema: GenerateInternshipListingInputSchema,
    outputSchema: GenerateInternshipListingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
