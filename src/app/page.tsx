// src/app/page.tsx
'use client';

import Link from 'next/link';
import { Briefcase, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import { LanguageSwitcher } from '@/components/language-switcher';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-primary">
            <Briefcase className="h-8 w-8" />
            <span>InternMatch AI</span>
          </Link>
          <nav className="hidden md:flex gap-4 items-center">
             <Button variant="ghost" asChild>
                <Link href="/login">{t('dashboard')}</Link>
            </Button>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="text-center py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 font-headline">
              {t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/login">{t('forCandidates')}</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/login">{t('forCompanies')}</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card>
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{t('candidatesCardTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('candidatesCardDescription')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{t('companiesCardTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('companiesCardDescription')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{t('matchingCardTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('matchingCardDescription')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} InternMatch AI. {t('footerRights')}</p>
      </footer>
    </div>
  );
}
