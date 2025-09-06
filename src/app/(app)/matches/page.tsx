import { InternshipMatches } from '@/components/internship-matches';

export default function MatchesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Matches</h1>
        <p className="text-muted-foreground">Discover internships perfectly tailored to your skills and preferences.</p>
      </div>
      <InternshipMatches />
    </div>
  );
}
