// src/app/page.tsx
'use client';

import Link from 'next/link';
import { Briefcase, Users, Building, Check, X, CalendarDays, Award, Banknote, UsersRound, CircleDollarSign, Info, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


export default function Home() {

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
                <Link href="/login">Dashboard</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="text-center py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 font-headline">
              Find Your Perfect Internship with AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our AI-powered platform connects talented students with innovative companies for the perfect internship match.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/login">For Candidates</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/login">For Companies</Link>
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
                  <CardTitle>For Candidates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create your profile, showcase your skills, and let our AI find the best internship opportunities for you.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>For Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Post your internship listings and get matched with the most qualified and motivated candidates.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Intelligent Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our advanced algorithm analyzes profiles and listings to ensure the highest compatibility.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Eligibility Criteria</h2>
              <p className="text-muted-foreground mt-2">Please ensure you meet the following criteria before applying.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-green-500" />
                    Who Can Apply
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Must be of Indian nationality.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Age should be between 21 to 24 years as on the last date for application submission.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Should not be full-time employed or engaged in full-time education.</span>
                    </li>
                     <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Candidates in online/distance learning are eligible.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Must have completed High School, Higher Secondary, ITI, Polytechnic diploma, or hold a degree (BA, B.Sc, B.Com, etc.).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Total family income should not exceed ₹8,00,000/- per annum.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <X className="h-6 w-6 text-red-500" />
                    Who is Not Eligible
                  </CardTitle>
                </CardHeader>
                <CardContent>
                   <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Graduates from IITs, IIMs, National Law Universities, IISER, NIDs, and IIITs.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Those with qualifications like CA, CMA, CS, MBBS, BDS, MBA, or any master's/higher degree.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Currently undergoing any Central or State Government training/internship program.</span>
                    </li>
                     <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Previously completed apprenticeship under NATS or NAPS.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Family income of any member exceeds ₹8 lakhs annually.</span>
                    </li>
                     <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Any family member is a permanent/regular government employee.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Program Details</h2>
              <p className="text-muted-foreground mt-2">Everything you need to know about the internship program.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Briefcase className="text-primary"/>Internship Structure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p><strong>Duration:</strong> 12 months (including 6 months of hands-on training).</p>
                  <p><strong>Sectors:</strong> Banking, Oil & Gas, Hospitality, Automotive, Manufacturing, FMCG, Travel, Energy, and more.</p>
                  <p><strong>Companies:</strong> Reliance, TCS, HDFC Bank, Maruti Suzuki, ITC, HUL, The Times Group, and 500+ others.</p>
                </CardContent>
              </Card>
               <Card className="lg:col-span-2">
                <CardHeader>
                   <CardTitle className="flex items-center gap-2"><CircleDollarSign className="text-primary"/>Stipend & Financial Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Benefit</TableHead>
                        <TableHead>Amount/Detail</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Monthly Stipend</TableCell>
                        <TableCell>₹5,000 (₹4,500 from Govt, ₹500 from company)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>One-time Grant</TableCell>
                        <TableCell>₹6,000 upon commencement (via DBT)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Insurance Coverage</TableCell>
                        <TableCell>PMJJBY and PMSBY</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Certificate</TableCell>
                        <TableCell>Government-certified upon completion</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                   <CardTitle className="flex items-center gap-2"><UsersRound className="text-primary"/>Selection Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p><strong>Screening:</strong> Based on academic background, SOP, and preferences.</p>
                  <p><strong>Interview:</strong> Some roles may require a short virtual interview.</p>
                  <p><strong>Diversity & Inclusion:</strong> Emphasis on diversity, especially for candidates from rural/aspirational districts and reserved categories.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                   <CardTitle className="flex items-center gap-2"><Award className="text-primary"/>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                   <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>Real-world industry exposure</li>
                      <li>Skill development and mentorship</li>
                      <li>Networking opportunities</li>
                      <li>Enhanced resume value</li>
                      <li>Financial support</li>
                    </ul>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                   <CardTitle className="flex items-center gap-2"><CalendarDays className="text-primary"/>Important Dates (2025)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p><strong>Phase 2 Application Deadline:</strong> April 22, 2025</p>
                  <p><strong>Selection Process:</strong> Ongoing (check portal for updates)</p>
                  <p><strong>Internship Commencement:</strong> As per company schedule</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                   <CardTitle className="flex items-center gap-2"><Info className="text-primary"/>Additional Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                   <p><strong>No Application Fee:</strong> The scheme is free to apply.</p>
                  <p><strong>Affirmative Action:</strong> Special consideration for candidates from rural/aspirational districts and underrepresented communities.</p>
                  <p><strong>Performance Evaluation:</strong> Transparent process with feedback for interns.</p>
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2"><Download className="text-primary"/>How to Stay Updated</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4 items-center text-center sm:text-left">
                   <p className="text-muted-foreground flex-grow">Download the PMIS App for real-time notifications. Regularly check the official portal and registered email/SMS for updates.</p>
                   <Button>Download App</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} InternMatch AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
