
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
import { useLanguage } from './language-provider';


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
  const { t } = useLanguage();
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
        message: t.roleDescriptionValidation,
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
        title: t.generationSuccessTitle,
        description: t.generationSuccessDescription,
      });
    } catch (error) {
      console.error('Failed to generate internship listing:', error);
      toast({
        variant: 'destructive',
        title: t.generationFailedTitle,
        description: t.generationFailedDescription,
      });
    } finally {
      setIsGenerating(false);
    }
  };
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
        title: t.internshipPostedTitle,
        description: t.internshipPostedDescription,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>{t.describeTheRole}</CardTitle>
            <CardDescription>
             {t.describeTheRoleSubtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="roleDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.roleDescription}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t.roleDescriptionPlaceholder}
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
                  {t.generating}...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  {t.generateWithAI}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.internshipDetails}</CardTitle>
            <CardDescription>
              {t.internshipDetailsSubtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.internshipTitle}</FormLabel>
                  <FormControl>
                    <Input placeholder={t.internshipTitlePlaceholder} {...field} />
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
                    <FormLabel>{t.placeOfWork}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.placeOfWorkPlaceholder} {...field} />
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
                  <FormLabel>{t.fullDescription}</FormLabel>
                  <FormControl>
                    <Textarea rows={10} placeholder={t.fullDescriptionPlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h3 className="text-lg font-medium pt-4">{t.candidatePreferences}</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="preferredCaste"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.preferredCaste}</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t.selectACaste} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">{t.casteOptions.general}</SelectItem>
                          <SelectItem value="obc">{t.casteOptions.obc}</SelectItem>
                          <SelectItem value="sc">{t.casteOptions.sc}</SelectItem>
                          <SelectItem value="st">{t.casteOptions.st}</SelectItem>
                          <SelectItem value="any">{t.casteOptions.any}</SelectItem>
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
                      <FormLabel>{t.preferredFamilyIncome}</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t.selectAnIncomeRange} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="<2.5L">{t.incomeOptions.low}</SelectItem>
                          <SelectItem value="2.5L-8L">{t.incomeOptions.medium}</SelectItem>
                          <SelectItem value=">8L">{t.incomeOptions.high}</SelectItem>
                          <SelectItem value="any">{t.incomeOptions.any}</SelectItem>
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
                    <FormLabel>{t.preferredSkills}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.preferredSkillsPlaceholder} {...field} />
                    </FormControl>
                    <FormDescription>
                        {t.preferredSkillsDescription}
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
                    <FormLabel>{t.educationQualifications}</FormLabel>
                    <FormControl>
                      <Input placeholder={t.educationQualificationsPlaceholder} {...field} />
                    </FormControl>
                     <FormDescription>
                        {t.educationQualificationsDescription}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <Button type="submit">{t.postInternship}</Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
