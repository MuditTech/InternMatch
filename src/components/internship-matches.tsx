'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { suggestInternships } from '@/ai/flows/ai-suggested-internships';
import { internships, candidateProfile } from '@/lib/data';
import type { Internship } from '@/lib/types';
import { InternshipCard } from '@/components/internship-card';
import { useToast } from '@/hooks/use-toast';

export function InternshipMatches() {
  const [isLoading, setIsLoading] = useState(false);
  const [matches, setMatches] = useState<Internship[]>([]);
  const { toast } = useToast();

  const handleFindMatches = async () => {
    setIsLoading(true);
    setMatches([]);
    
    try {
      const profileString = `Name: ${candidateProfile.name}, Headline: ${candidateProfile.headline}, Summary: ${candidateProfile.summary}, Skills: ${candidateProfile.skills}, Experience: ${candidateProfile.experience}, Preferences: ${candidateProfile.preferences}`;
      const internshipListString = internships.map(i => `ID: ${i.id}, Title: ${i.title}, Description: ${i.description}`).join('\n---\n');
      
      const result = await suggestInternships({
        candidateProfile: profileString,
        internshipList: internshipListString,
      });

      const suggestedIds = result.suggestedInternships.map(internship => internship.id);
      
      const foundMatches = internships
        .filter(internship => suggestedIds.includes(internship.id))
        .sort((a, b) => suggestedIds.indexOf(a.id) - suggestedIds.indexOf(b.id));


      setMatches(foundMatches);

      if (foundMatches.length === 0) {
        toast({
          title: "No matches found",
          description: "The AI couldn't find any suitable matches. Try updating your profile.",
        });
      }

    } catch (error) {
      console.error('Error finding matches:', error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to fetch internship matches. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Add a random compatibility score for demonstration
  const matchesWithCompatibility = matches.map((match, index) => ({
      ...match,
      // Assign higher compatibility to the top matches
      compatibility: 95 - (index * 5),
  }));


  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Matchmaking</CardTitle>
          <CardDescription>
            Click the button below to let our AI analyze your profile and find the best internship matches for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleFindMatches} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Finding Matches...
              </>
            ) : (
               <>
                <Sparkles className="mr-2 h-4 w-4" />
                Find My Matches
               </>
            )}
          </Button>
        </CardContent>
      </Card>

      {matches.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Top Matches</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {matchesWithCompatibility.map((match) => (
              <InternshipCard key={match.id} internship={match} compatibility={match.compatibility} />
            ))}
          </div>
        </div>
      )}

      {isLoading && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Finding your matches...</h2>
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
