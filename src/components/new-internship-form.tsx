
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateInternshipListing } from '@/ai/flows/generate-internship-listing';
import { Loader2, Sparkles } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const formSchema = z.object({
  roleDescription: z.string().min(20, {
    message: 'Please provide a more detailed description (at least 20 characters).',
  }),
  title: z.string().min(1, { message: 'Title is required.' }),
  location: z.string().min(1, { message: 'Location is required.' }),
  description: z.string().min(20, { message: 'Description must be at least 20 characters.' }),
  preferredCaste: z.string().optional(),
  preferredIncome: z.string().optional(),
  preferredSkills: z.string().optional(),
  educationQualifications: z.string().optional(),
});

export function NewInternshipForm() {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roleDescription: '',
      title: '',
      location: '',
      description: '',
      preferredCaste: '',
      preferredIncome: '',
      preferredSkills: '',
      educationQualifications: '',
    },
  });

  const handleGenerate = async () => {
    const roleDescription = form.getValues('roleDescription');
    if (roleDescription.length < 20) {
      form.setError('roleDescription', {
        type: 'manual',
        message: 'Please provide a more detailed description (at least 20 characters).',
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateInternshipListing({ roleDescription });
      // A more advanced implementation would parse the result into respective fields.
      form.setValue('description', result.internshipListing);
      
      // Simple parsing attempt
      const generatedText = result.internshipListing;
      const titleMatch = generatedText.match(/Job Title:\s*(.*)/);
      if(titleMatch) form.setValue('title', titleMatch[1]);
      
      toast({
        title: 'Internship Draft Generated!',
        description: 'The AI has created a draft. You can now review and edit it below.',
      });
    } catch (error) {
      console.error('Failed to generate internship listing:', error);
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: 'There was an error generating the internship listing. Please try again.',
      });
    } finally {
      setIsGenerating(false);
    }
  };
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
        title: "Internship Posted!",
        description: "Your internship has been successfully posted.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Describe the Role</CardTitle>
            <CardDescription>
              Start by providing a brief description of the internship role. Our AI will use this to generate a full listing for you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="roleDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., A frontend developer intern to work on our new React-based design system..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="button" onClick={handleGenerate} disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate with AI
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Internship Details</CardTitle>
            <CardDescription>
              Review and edit the generated details below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Internship Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Software Engineer Intern" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Place of Work</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., San Francisco, CA or Remote" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Description</FormLabel>
                  <FormControl>
                    <Textarea rows={10} placeholder="A detailed description of the role, company, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h3 className="text-lg font-medium pt-4">Candidate Preferences (Optional)</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="preferredCaste"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Caste</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a caste" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="obc">OBC</SelectItem>
                          <SelectItem value="sc">SC</SelectItem>
                          <SelectItem value="st">ST</SelectItem>
                          <SelectItem value="any">Any</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preferredIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Family Income</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an income range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="<2.5L">Less than ₹2.5 Lakh</SelectItem>
                          <SelectItem value="2.5L-8L">₹2.5 Lakh - ₹8 Lakh</SelectItem>
                          <SelectItem value=">8L">More than ₹8 Lakh</SelectItem>
                          <SelectItem value="any">Any</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
             </div>
             <FormField
                control={form.control}
                name="preferredSkills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Skills</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., React, Python, Data Analysis" {...field} />
                    </FormControl>
                    <FormDescription>
                        Enter a comma-separated list of skills.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="educationQualifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Education Qualifications</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., B.Tech in CS, B.Com" {...field} />
                    </FormControl>
                     <FormDescription>
                        Enter required or preferred educational qualifications.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <Button type="submit">Post Internship</Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
