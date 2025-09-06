
import { CompanyMatches } from '@/components/company-matches';
import { InternshipMatches } from '@/components/internship-matches';


// In a real app, you'd get this from your auth context
const userType = "candidate"; // or "company"

export default function MatchesPage() {
  const pageTitle = userType === 'company' ? 'Candidate Matches' : 'My Matches';
  const pageDescription = userType === 'company' 
    ? "Review candidates that our AI has matched to your job profiles."
    : "Discover internships perfectly tailored to your skills and preferences.";

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
        <p className="text-muted-foreground">{pageDescription}</p>
      </div>
      {userType === 'company' ? <CompanyMatches /> : <InternshipMatches />}
    </div>
  );
}
