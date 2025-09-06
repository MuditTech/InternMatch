import { NewInternshipForm } from '@/components/new-internship-form';

export default function NewInternshipPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Post a New Internship</h1>
        <p className="text-muted-foreground">Fill out the form below to find your next great hire.</p>
      </div>
      <NewInternshipForm />
    </div>
  );
}
