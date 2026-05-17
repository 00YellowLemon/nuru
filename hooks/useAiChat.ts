"use client";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";

type Message = {
    id: string;
    role: "user" | "ai";
    content: string;
};

type UseAiChatReturn = {
    messages: Message[];
    isLoading: boolean;
    sendMessage: (content: string) => Promise<void>;
    clearChat: () => void;
};

const STORAGE_KEY = "ai_chat_session";
const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export function useAiChat(): UseAiChatReturn {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userId, setUserId] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    // Initialize session
    useEffect(() => {
        const initSession = () => {
            try {
                const storedData = sessionStorage.getItem(STORAGE_KEY);

                if (storedData) {
                    const { userId: storedUserId, messages: storedMessages, timestamp } = JSON.parse(storedData);
                    const now = Date.now();

                    // Check if session is expired (older than 24 hours)
                    if (now - timestamp < EXPIRATION_TIME) {
                        setUserId(storedUserId);
                        setMessages(storedMessages);
                        return;
                    }
                }
            } catch (error) {
                console.error("Failed to parse session storage:", error);
            }

            // Create new session if none exists or expired
            const newUserId = crypto.randomUUID();
            const initialMessages: Message[] = [
                {
                    id: "1",
                    role: "ai",
                    content: "Hi! I'm your AI assistant. How can I help you today?",
                },
            ];

            setUserId(newUserId);
            setMessages(initialMessages);
            saveToStorage(newUserId, initialMessages);
        };

        initSession();
    }, []);

    const saveToStorage = (uid: string, msgs: Message[]) => {
        const data = {
            userId: uid,
            messages: msgs,
            timestamp: Date.now(), // Update timestamp on activity or keep initial? 
            // Requirement: "deleted after ... 24 hours are over". 
            // Usually means 24h from start or last activity. 
            // I'll update timestamp on save to keep session alive if active, 
            // OR keep original timestamp to enforce strict 24h limit.
            // "24 hours are over" implies strict limit or inactivity. 
            // I'll stick to updating it to act as "expires after 24h of inactivity" which is friendlier,
            // BUT the prompt says "The chats should be deleted after... 24 hours are over".
            // I will update the timestamp to ensure it doesn't expire while being used.
        };
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    };



    const sendMessage = useCallback(async (content: string) => {
        if (!content.trim() || !userId) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content,
        };

        // Optimistic update
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        saveToStorage(userId, newMessages);
        setIsLoading(true);

        try {
            const response = await axios.post("/api/chat", {
                message: content,
                userId: userId,
            });

            const data = response.data;

            // Handle different possible response formats since schema is loose
            // Assuming data might be { response: "..." } or just the string or { output: "..." }
            // If the API returns the direct string response in a field:
            let aiContent = "I'm sorry, I couldn't process that.";

            if (typeof data === 'string') {
                aiContent = data;
            } else if (typeof data === 'object') {
                const contentArray = data.response || data.output;
                if (Array.isArray(contentArray)) {
                    // Handle array response (e.g. from LangChain/FastAPI)
                    aiContent = contentArray.map((item: any) => item.text || item.content || JSON.stringify(item)).join('\n');
                } else {
                    // Common patterns
                    aiContent = data.response || data.message || data.output || data.content || JSON.stringify(data);
                }
            }

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: aiContent,
            };

            const updatedMessages = [...newMessages, aiMessage];
            setMessages(updatedMessages);
            saveToStorage(userId, updatedMessages);

        } catch (error) {
            console.error("Failed to send message:", error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: "Sorry, I encountered an error connecting to the server.",
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }, [messages, userId]);

    const clearChat = useCallback(() => {
        const newUserId = crypto.randomUUID();
        const initialMessages: Message[] = [
            {
                id: "1",
                role: "ai",
                content: "Hi! I'm your AI assistant. How can I help you today?",
            },
        ];
        setUserId(newUserId);
        setMessages(initialMessages);
        saveToStorage(newUserId, initialMessages);
    }, []);

    return {
        messages,
        isLoading,
        sendMessage,
        clearChat
    };
}
