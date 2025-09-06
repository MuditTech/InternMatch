'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProfileForm } from '@/components/profile-form';
import { candidateProfile } from '@/lib/data';
import { emptyProfile } from '@/lib/empty-profile';
import { useLanguage } from '@/components/language-provider';
import { useSearchParams } from 'next/navigation';

type ProfilePageProps = {};

export default function ProfilePage({}: ProfilePageProps) {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const isNewUser = searchParams.get('new') === 'true';
  const profileData = isNewUser ? emptyProfile : candidateProfile;
  const pageTitle = isNewUser ? t.createYourProfile : t.myProfile;
  const pageDescription = isNewUser 
    ? t.createYourProfileSubtitle
    : t.myProfileSubtitle;


  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
        <p className="text-muted-foreground">{pageDescription}</p>
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle>{t.profileDetails}</CardTitle>
            <CardDescription>{t.profileDetailsSubtitle}</CardDescription>
        </CardHeader>
        <CardContent>
            <ProfileForm defaultValues={profileData} />
        </CardContent>
      </Card>
    </div>
  );
}
