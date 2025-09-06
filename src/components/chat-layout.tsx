'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { messages as mockMessages } from '@/lib/data';
import { Send } from 'lucide-react';

export function ChatLayout() {
  const [messages, setMessages] = useState(mockMessages);
  const [selectedChat, setSelectedChat] = useState(messages[0]);

  return (
    <Card className="h-[calc(100vh-8rem)]">
      <CardContent className="p-0 grid grid-cols-1 md:grid-cols-3 h-full">
        <div className="flex flex-col border-r">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Conversations</h2>
          </div>
          <ScrollArea className="flex-grow">
            {messages.map((chat) => (
              <div
                key={chat.id}
                className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/50 ${
                  selectedChat.id === chat.id ? 'bg-muted' : ''
                }`}
                onClick={() => setSelectedChat(chat)}
              >
                <Avatar className="h-12 w-12">
                  <AvatarImage src={chat.avatar} alt={chat.company} data-ai-hint="company logo" />
                  <AvatarFallback>{chat.company.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-grow overflow-hidden">
                  <p className="font-semibold truncate">{chat.company}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {chat.messages[chat.messages.length - 1].text}
                  </p>
                </div>
                {chat.unread > 0 && (
                  <div className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {chat.unread}
                  </div>
                )}
              </div>
            ))}
          </ScrollArea>
        </div>
        <div className="md:col-span-2 flex flex-col h-full">
          {selectedChat ? (
            <>
              <div className="p-4 border-b flex items-center gap-3">
                 <Avatar className="h-10 w-10">
                  <AvatarImage src={selectedChat.avatar} alt={selectedChat.company} data-ai-hint="company logo" />
                  <AvatarFallback>{selectedChat.company.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="text-lg font-semibold">{selectedChat.company}</h3>
                    <p className="text-sm text-muted-foreground">with {selectedChat.contactName}</p>
                </div>
              </div>
              <ScrollArea className="flex-grow p-4">
                <div className="space-y-4">
                  {selectedChat.messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.from === 'me' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                          msg.from === 'me'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p>{msg.text}</p>
                         <p className={`text-xs mt-1 ${msg.from === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-4 border-t">
                <div className="relative">
                  <Input
                    placeholder="Type a message..."
                    className="pr-12"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-1/2 right-2 -translate-y-1/2"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <p>Select a conversation to start chatting</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
