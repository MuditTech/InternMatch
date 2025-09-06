import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InternshipCard } from '@/components/internship-card';
import { internships } from '@/lib/data';
import { PlusCircle } from 'lucide-react';

export default function InternshipsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold">Internship Listings</h1>
            <p className="text-muted-foreground">Browse and apply for your next opportunity.</p>
        </div>
        <Button asChild>
          <Link href="/internships/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Post Internship
          </Link>
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {internships.map((internship) => (
          <InternshipCard key={internship.id} internship={internship} />
        ))}
      </div>
    </div>
  );
}
