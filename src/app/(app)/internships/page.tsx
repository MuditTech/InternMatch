'use client';


import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InternshipCard } from '@/components/internship-card';
import { internships } from '@/lib/data';
import { PlusCircle, User, Star, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useLanguage } from '@/components/language-provider';


// In a real app, you'd get this from your auth context
const userType = "candidate"; 

const mockCandidates = [
    {
        id: 'cand1',
        name: 'Mudit Sharma',
        headline: 'Aspiring Software Engineer',
        skills: 'React, Node.js, Python',
        caste: 'General',
        qualifications: 'B.Tech Computer Science'
    },
    {
        id: 'cand2',
        name: 'Priya Singh',
        headline: 'Data Science Enthusiast',
        skills: 'Python, Pandas, SQL, Tableau',
        caste: 'OBC',
        qualifications: 'M.Sc Data Science'
    },
    {
        id: 'cand3',
        name: 'Rohan Gupta',
        headline: 'Frontend Developer',
        skills: 'HTML, CSS, JavaScript, React',
        caste: 'General',
        qualifications: 'B.Sc IT'
    },
    {
        id: 'cand4',
        name: 'Ananya Reddy',
        headline: 'AI & Machine Learning Student',
        skills: 'TensorFlow, PyTorch, Scikit-learn',
        caste: 'General',
        qualifications: 'B.Tech AI & ML'
    }
];


function CandidateProfileCard({ candidate }: { candidate: typeof mockCandidates[0] }) {
    const { t } = useLanguage();
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle>{candidate.name}</CardTitle>
                <CardDescription>{candidate.headline}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span>{t.skills}: {candidate.skills}</span>
                </div>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{t.caste}: {candidate.caste}</span>
                </div>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>{t.qualifications}: {candidate.qualifications}</span>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">{t.viewFullProfile}</Button>
            </CardFooter>
        </Card>
    )
}


function CompanyJobProfiles() {
    const { t } = useLanguage();
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">{t.candidateProfiles}</h1>
                    <p className="text-muted-foreground">{t.candidateProfilesSubtitle}</p>
                </div>
                <Button asChild>
                    <Link href="/internships/new">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        {t.postNewJob}
                    </Link>
                </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {mockCandidates.map((candidate) => (
                    <CandidateProfileCard key={candidate.id} candidate={candidate} />
                ))}
            </div>
        </div>
    )
}

function CandidateInternships() {
    const { t } = useLanguage();
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">{t.internshipListings}</h1>
                    <p className="text-muted-foreground">{t.internshipListingsSubtitle}</p>
                </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {internships.map((internship) => (
                    <InternshipCard key={internship.id} internship={internship} />
                ))}
            </div>
        </div>
    )
}


export default function InternshipsPage() {
    if (userType === 'company') {
        return <CompanyJobProfiles />;
    }
    return <CandidateInternships />;
}
