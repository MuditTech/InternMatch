
import { internships } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Building, Briefcase, ListChecks, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function InternshipDetailsPage({ params }: { params: { id: string } }) {
  const internship = internships.find((i) => i.id === params.id);

  if (!internship) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="md:flex md:items-start md:justify-between">
        <div>
            <h1 className="text-3xl font-bold">{internship.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    <span>{internship.company}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{internship.location}</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{internship.applicants} applicants</span>
                </div>
            </div>
        </div>
        <div className="mt-4 md:mt-0">
             <Button asChild size="lg">
                <Link href={`/internships/apply/success?id=${internship.id}`}>Apply Now</Link>
            </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About the Internship</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{internship.description}</p>
        </CardContent>
      </Card>

       <div className="grid md:grid-cols-2 gap-8">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ListChecks className="h-6 w-6 text-primary" />
                    Responsibilities
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                    {internship.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    Requirements
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                    {internship.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
       </div>
    </div>
  );
}
