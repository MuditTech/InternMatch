import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProfileForm } from '@/components/profile-form';

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-muted-foreground">Keep your profile up-to-date to attract the best opportunities.</p>
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle>Profile Details</CardTitle>
            <CardDescription>This information will be used to match you with internships.</CardDescription>
        </CardHeader>
        <CardContent>
            <ProfileForm />
        </CardContent>
      </Card>
    </div>
  );
}
