import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProfileForm } from '@/components/profile-form';
import { candidateProfile } from '@/lib/data';
import { emptyProfile } from '@/lib/empty-profile';

type ProfilePageProps = {
  searchParams: {
    new?: string;
  };
};

export default function ProfilePage({ searchParams }: ProfilePageProps) {
  const isNewUser = searchParams.new === 'true';
  const profileData = isNewUser ? emptyProfile : candidateProfile;
  const pageTitle = isNewUser ? 'Create Your Profile' : 'My Profile';
  const pageDescription = isNewUser 
    ? "Fill out your profile to get started. This information will be used to match you with the best internships."
    : "Keep your profile up-to-date to attract the best opportunities.";


  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
        <p className="text-muted-foreground">{pageDescription}</p>
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle>Profile Details</CardTitle>
            <CardDescription>This information will be used to match you with internships.</CardDescription>
        </CardHeader>
        <CardContent>
            <ProfileForm defaultValues={profileData} />
        </CardContent>
      </Card>
    </div>
  );
}
