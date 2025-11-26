"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Message = {
    id: string;
    role: "user" | "ai";
    content: string;
};

export function AiAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "ai",
            content: "Hi! I'm your AI assistant. How can I help you today?",
        },
    ]);
    const [inputValue, setInputValue] = useState("");

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: inputValue,
        };

        setMessages((prev) => [...prev, newMessage]);
        setInputValue("");

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: "I'm just a demo UI for now, but I'm listening!",
            };
            setMessages((prev) => [...prev, aiResponse]);
        }, 1000);
    };

    return (
        <>
            {/* Trigger Button */}
            <Button
                onClick={toggleOpen}
                className={cn(
                    "fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
                    isOpen && "rotate-90 opacity-0 pointer-events-none"
                )}
                size="icon"
            >
                <MessageCircle className="h-8 w-8" />
                <span className="sr-only">Open AI Assistant</span>
            </Button>

            {/* Chat Window */}
            <div
                className={cn(
                    "fixed bottom-4 right-4 z-50 transition-all duration-300 transform origin-bottom-right",
                    isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
                )}
            >
                <Card className="w-[350px] h-[500px] flex flex-col shadow-2xl border-primary/20">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <MessageCircle className="h-5 w-5 text-primary" />
                            AI Assistant
                        </CardTitle>
                        <Button variant="ghost" size="icon" onClick={toggleOpen} className="h-8 w-8 rounded-full">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={cn(
                                    "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                                    message.role === "user"
                                        ? "ml-auto bg-primary text-primary-foreground"
                                        : "bg-muted text-foreground"
                                )}
                            >
                                {message.content}
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter className="p-4 border-t">
                        <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
                            <Input
                                type="text"
                                placeholder="Type your message..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="flex-1"
                            />
                            <Button type="submit" size="icon" disabled={!inputValue.trim()}>
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Send</span>
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
