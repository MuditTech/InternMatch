
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Internship } from '@/lib/types';
import { MapPin, Building, Users } from 'lucide-react';

type InternshipCardProps = {
  internship: Internship;
  compatibility?: number;
};

export function InternshipCard({ internship, compatibility }: InternshipCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{internship.title}</CardTitle>
            {compatibility && (
                <Badge variant={compatibility > 80 ? "default" : "secondary"}>
                    {compatibility}% Match
                </Badge>
            )}
        </div>
        <CardDescription className="flex flex-col gap-2 pt-2">
            <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-muted-foreground" />
                <span>{internship.company}</span>
            </div>
            <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{internship.location}</span>
            </div>
             <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{internship.applicants} applicants</span>
            </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
            {internship.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/internships/${internship.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
