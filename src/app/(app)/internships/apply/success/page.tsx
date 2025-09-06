
'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { internships } from '@/lib/data';
import { useLanguage } from '@/components/language-provider';

export default function ApplicationSuccessPage() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const internshipId = searchParams.get('id');
  const internship = internships.find((i) => i.id === internshipId);

  return (
    <div className="flex items-center justify-center py-20">
      <Card className="w-full max-w-lg text-center">
        <CardHeader>
          <div className="mx-auto bg-green-100 dark:bg-green-900 rounded-full p-3 w-fit mb-4">
             <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-3xl">{t.applicationSuccessful}</CardTitle>
          {internship && (
            <CardDescription className="pt-2">
              {t.applicationSuccessMessage.replace('{title}', internship.title).replace('{company}', internship.company)}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            {t.applicationSuccessNextSteps}
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/internships">{t.keepBrowsing}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/dashboard">{t.goToDashboard}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
