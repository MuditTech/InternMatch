
// src/app/page.tsx
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Briefcase, Users, Building, Check, X, CalendarDays, Award, Banknote, UsersRound, CircleDollarSign, Info, Download, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { translations } from '@/lib/translations';


export default function Home() {
  const [language, setLanguage] = useState('en');
  const t = translations[language];


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
                <Link href="/login">{t.dashboard}</Link>
            </Button>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-auto gap-2">
                <Globe className="h-4 w-4" />
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिन्दी</SelectItem>
                <SelectItem value="te">తెలుగు</SelectItem>
                <SelectItem value="ta">தமிழ்</SelectItem>
                <SelectItem value="mr">मराठी</SelectItem>
                <SelectItem value="gu">ગુજરાતી</SelectItem>
              </SelectContent>
            </Select>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="text-center py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 font-headline">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/login">{t.forCandidates}</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/login">{t.forCompanies}</Link>
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
                  <CardTitle>{t.forCandidates}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.candidatesDesc}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{t.forCompanies}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.companiesDesc}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{t.intelligentMatching}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t.matchingDesc}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t.eligibilityTitle}</h2>
              <p className="text-muted-foreground mt-2">{t.eligibilitySubtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-green-500" />
                    {t.whoCanApply}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    {t.eligiblePoints.map((point, index) => (
                       <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <X className="h-6 w-6 text-red-500" />
                    {t.whoIsNotEligible}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                   <ul className="space-y-3 text-muted-foreground">
                     {t.ineligiblePoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                     ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">{t.programDetailsTitle}</h2>
              <p className="text-muted-foreground mt-2">{t.programDetailsSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Briefcase className="text-primary"/>{t.structureTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  {t.structurePoints.map((point, index) => <p key={index}>{point}</p>)}
                </CardContent>
              </Card>
               <Card className="lg:col-span-2">
                <CardHeader>
                   <CardTitle className="flex items-center gap-2"><CircleDollarSign className="text-primary"/>{t.stipendTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t.stipendBenefit}</TableHead>
                        <TableHead>{t.stipendAmount}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {t.stipendTable.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.benefit}</TableCell>
                          <TableCell>{row.detail}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                   <CardTitle className="flex items-center gap-2"><UsersRound className="text-primary"/>{t.selectionTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  {t.selectionPoints.map((point, index) => <p key={index}>{point}</p>)}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                   <CardTitle className="flex items-center gap-2"><Award className="text-primary"/>{t.benefitsTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                   <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      {t.benefitsPoints.map((point, index) => <li key={index}>{point}</li>)}
                    </ul>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                   <CardTitle className="flex items-center gap-2"><CalendarDays className="text-primary"/>{t.datesTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  {t.datesPoints.map((point, index) => <p key={index}>{point}</p>)}
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                   <CardTitle className="flex items-center gap-2"><Info className="text-primary"/>{t.additionalInfoTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                   {t.additionalInfoPoints.map((point, index) => <p key={index}>{point}</p>)}
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2"><Download className="text-primary"/>{t.stayUpdatedTitle}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4 items-center text-center sm:text-left">
                   <p className="text-muted-foreground flex-grow">{t.stayUpdatedDesc}</p>
                   <Button>{t.downloadApp}</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} InternMatch AI. {t.footerRights}</p>
      </footer>
    </div>
  );
}

