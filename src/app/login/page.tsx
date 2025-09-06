
'use client';

import Link from 'next/link';
import { Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/components/language-provider';

export default function LoginPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-primary">
            <Briefcase className="h-8 w-8" />
            <span>InternMatch AI</span>
          </Link>
        </div>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">{t.login}</TabsTrigger>
            <TabsTrigger value="signup">{t.signUp}</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>{t.login}</CardTitle>
                <CardDescription>{t.loginDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t.email}</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{t.password}</Label>
                  <Input id="password" type="password" required />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/dashboard">{t.login}</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Tabs defaultValue="candidate" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="candidate">{t.imACandidate}</TabsTrigger>
                <TabsTrigger value="company">{t.imACompany}</TabsTrigger>
              </TabsList>
              <TabsContent value="candidate">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.candidateSignUp}</CardTitle>
                    <CardDescription>{t.candidateSignUpDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.name}</Label>
                      <Input id="name" placeholder={t.namePlaceholder} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-signup">{t.email}</Label>
                      <Input id="email-signup" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-signup">{t.password}</Label>
                      <Input id="password-signup" type="password" required />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/profile?new=true">{t.createProfileAndFindInternships}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="company">
                 <Card>
                  <CardHeader>
                    <CardTitle>{t.companySignUp}</CardTitle>
                    <CardDescription>{t.companySignUpDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">{t.companyName}</Label>
                      <Input id="company-name" placeholder={t.companyNamePlaceholder} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-email-signup">{t.companyEmail}</Label>
                      <Input id="company-email-signup" type="email" placeholder="hr@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-password-signup">{t.password}</Label>
                      <Input id="company-password-signup" type="password" required />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href="/internships/new">{t.createAccountAndPostJob}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
