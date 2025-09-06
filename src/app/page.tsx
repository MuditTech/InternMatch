import Link from 'next/link';
import { Briefcase, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-primary">
            <Briefcase className="h-8 w-8" />
            <span>InternMatch AI</span>
          </Link>
          <nav className="hidden md:flex gap-4">
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
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} InternMatch AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
