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

const formSchema = z.object({
  roleDescription: z.string().min(20, {
    message: 'Please provide a more detailed description (at least 20 characters).',
  }),
  title: z.string(),
  company: z.string(),
  location: z.string(),
  description: z.string(),
  responsibilities: z.string(),
  requirements: z.string(),
});

export function NewInternshipForm() {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roleDescription: '',
      title: '',
      company: '',
      location: '',
      description: '',
      responsibilities: '',
      requirements: '',
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
      // For simplicity, we'll put the whole generated text into the description field.
      // A more advanced implementation would parse the result into respective fields.
      form.setValue('description', result.internshipListing);
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., InnovateTech" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
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
                  <FormDescription>
                    This can be the full text generated by the AI, including responsibilities and requirements.
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
