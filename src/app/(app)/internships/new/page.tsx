'use client'

import { NewInternshipForm } from '@/components/new-internship-form';
import { useLanguage } from '@/components/language-provider';

export default function NewInternshipPage() {
  const { t } = useLanguage();
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{t.postNewInternship}</h1>
        <p className="text-muted-foreground">{t.postNewInternshipSubtitle}</p>
      </div>
      <NewInternshipForm />
    </div>
  );
}
