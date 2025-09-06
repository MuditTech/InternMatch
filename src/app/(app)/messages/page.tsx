import { ChatLayout } from '@/components/chat-layout';

export default function MessagesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground">Communicate directly with companies about opportunities.</p>
      </div>
      <ChatLayout />
    </div>
  );
}
