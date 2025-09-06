'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from './language-provider';

const profileSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  headline: z.string().min(5, {
    message: 'Headline must be at least 5 characters.',
  }),
  summary: z.string().min(20, {
    message: 'Summary must be at least 20 characters.',
  }),
  skills: z.string().min(5, {
    message: 'Please list at least one skill.',
  }),
  experience: z.string(),
  preferences: z.string(),
  caste: z.string().min(1, { message: 'Caste is required.' }),
  familyIncome: z.string().min(1, { message: 'Family income is required.' }),
});

type ProfileFormProps = {
  defaultValues: z.infer<typeof profileSchema>;
};

export function ProfileForm({ defaultValues }: ProfileFormProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof profileSchema>) {
    console.log(values);
    toast({
      title: t.profileUpdated,
      description: t.profileUpdatedDescription,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.fullName}</FormLabel>
              <FormControl>
                <Input placeholder={t.fullNamePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="headline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.headline}</FormLabel>
              <FormControl>
                <Input placeholder={t.headlinePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="caste"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.caste}</FormLabel>
              <FormControl>
                <Input placeholder={t.castePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="familyIncome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.familyAnnualIncome}</FormLabel>
              <FormControl>
                <Input placeholder={t.familyAnnualIncomePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.professionalSummary}</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder={t.professionalSummaryPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.skills}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t.skillsPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.experienceAndProjects}</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder={t.experienceAndProjectsPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferences"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.internshipPreferences}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t.internshipPreferencesPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{t.saveChanges}</Button>
      </form>
    </Form>
  );
}
