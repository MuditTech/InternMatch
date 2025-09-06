
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InternshipCard } from '@/components/internship-card';
import { internships, candidateProfile } from '@/lib/data';
import { PlusCircle, User, Star, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


// In a real app, you'd get this from your auth context
const userType = "company"; 

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
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <CardTitle>{candidate.name}</CardTitle>
                <CardDescription>{candidate.headline}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span>Skills: {candidate.skills}</span>
                </div>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>Caste: {candidate.caste}</span>
                </div>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>Qualifications: {candidate.qualifications}</span>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">View Full Profile</Button>
            </CardFooter>
        </Card>
    )
}


function CompanyJobProfiles() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Candidate Profiles</h1>
                    <p className="text-muted-foreground">Discover top talent for your open roles.</p>
                </div>
                <Button asChild>
                    <Link href="/internships/new">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Post New Job
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
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Internship Listings</h1>
                    <p className="text-muted-foreground">Browse and apply for your next opportunity.</p>
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
