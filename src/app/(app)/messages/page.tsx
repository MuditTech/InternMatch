'use client';
import { ChatLayout } from '@/components/chat-layout';
import { useLanguage } from '@/components/language-provider';

export default function MessagesPage() {
  const { t } = useLanguage();
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{t.messages}</h1>
        <p className="text-muted-foreground">{t.messagesSubtitle}</p>
      </div>
      <ChatLayout />
    </div>
  );
}
