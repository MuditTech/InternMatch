
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Loader2, Sparkles, User, Briefcase, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from './ui/badge';

// Mock data - in a real app, this would come from your backend
const mockCandidates = [
    {
        id: 'cand1',
        name: 'Mudit Sharma',
        headline: 'Aspiring Software Engineer',
        skills: 'React, Node.js, Python',
        matchPercentage: 95,
        matchedJob: 'Software Development Intern'
    },
    {
        id: 'cand2',
        name: 'Priya Singh',
        headline: 'Data Science Enthusiast',
        skills: 'Python, Pandas, SQL, Tableau',
        matchPercentage: 92,
        matchedJob: 'Data Science Intern'
    },
    {
        id: 'cand3',
        name: 'Rohan Gupta',
        headline: 'Frontend Developer',
        skills: 'HTML, CSS, JavaScript, React',
        matchPercentage: 88,
        matchedJob: 'Frontend Developer Intern'
    }
];

export function CompanyMatches() {
  const [isLoading, setIsLoading] = useState(false);
  const [matches, setMatches] = useState<typeof mockCandidates>([]);
  const { toast } = useToast();

  const handleFindMatches = () => {
    setIsLoading(true);
    setMatches([]);
    
    // Simulate API call
    setTimeout(() => {
        try {
            setMatches(mockCandidates);
            if (mockCandidates.length === 0) {
                toast({
                title: "No matches found",
                description: "The AI couldn't find any suitable candidates yet.",
                });
            }
        } catch (error) {
            console.error('Error finding matches:', error);
            toast({
                variant: "destructive",
                title: "An error occurred",
                description: "Failed to fetch candidate matches. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Candidate Matching</CardTitle>
          <CardDescription>
            Click the button to let our AI find the best candidates for your open positions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleFindMatches} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Finding Candidates...
              </>
            ) : (
               <>
                <Sparkles className="mr-2 h-4 w-4" />
                Find Candidate Matches
               </>
            )}
          </Button>
        </CardContent>
      </Card>

      {matches.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Top Candidates</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {matches.map((candidate) => (
              <Card key={candidate.id} className="flex flex-col">
                <CardHeader>
                   <div className="flex justify-between items-start">
                     <CardTitle>{candidate.name}</CardTitle>
                     <Badge>{candidate.matchPercentage}% Match</Badge>
                   </div>
                   <CardDescription>{candidate.headline}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        <span>Matched for: {candidate.matchedJob}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4" />
                        <span>Skills: {candidate.skills}</span>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">View Profile</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {isLoading && (
         <div>
          <h2 className="text-2xl font-bold mb-4">Finding candidates...</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
                <Card key={i}>
                    <CardHeader><div className="h-6 bg-muted rounded w-3/4 animate-pulse"></div></CardHeader>
                    <CardContent className="space-y-2">
                        <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
                    </CardContent>
                    <CardFooter><div className="h-10 bg-muted rounded w-full animate-pulse"></div></CardFooter>
                </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
