'use client';

import { CompanyMatches } from '@/components/company-matches';
import { InternshipMatches } from '@/components/internship-matches';
import { useLanguage } from '@/components/language-provider';


// In a real app, you'd get this from your auth context
const userType = "candidate"; // or "company"

export default function MatchesPage() {
  const { t } = useLanguage();
  const pageTitle = userType === 'company' ? t.candidateMatches : t.myMatches;
  const pageDescription = userType === 'company' 
    ? t.candidateMatchesSubtitle
    : t.myMatchesSubtitle;

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
