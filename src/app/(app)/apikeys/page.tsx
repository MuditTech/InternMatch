'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, KeyRound } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ApiKeysPage() {
  const [apiKey, setApiKey] = useState('');
  const { toast } = useToast();

  const generateApiKey = () => {
    const newKey = `im_sk_${[...Array(32)].map(() => Math.random().toString(36)[2]).join('')}`;
    setApiKey(newKey);
    toast({
        title: "API Key Generated",
        description: "Your new API key has been generated.",
    });
  };

  useEffect(() => {
    generateApiKey();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    toast({
      title: 'Copied to Clipboard',
      description: 'The API key has been copied to your clipboard.',
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">API Keys</h1>
        <p className="text-muted-foreground">Manage your API keys for programmatic access.</p>
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle>Your API Key</CardTitle>
            <CardDescription>Use this key to interact with the InternMatch AI API.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex gap-2">
                <Input value={apiKey} readOnly placeholder="Your API key will appear here" />
                <Button variant="outline" size="icon" onClick={copyToClipboard} aria-label="Copy API Key">
                    <Copy className="h-4 w-4" />
                </Button>
            </div>
            <Button onClick={generateApiKey}>
                <KeyRound className="mr-2 h-4 w-4" />
                Regenerate Key
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
