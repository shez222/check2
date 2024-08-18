"use client";
import { useState, useEffect } from 'react';
import ChatBar from '@/components/handle/chat/ChatBar';
import Image from 'next/image';
import { people } from '@/constants/people';
import { Person } from '@/models/person';

type Props = {
    params: { handle: string }
}

type ChatMessageProps = {
    person: Person
}

const ChatMessage = ({ person }: ChatMessageProps) => {
    const introMessage = `Hi! I'm ${person.name}, I help people get into big tech, beef up their resume/LinkedIn, and find design and engineering resources. But I can help you with other things too.`;

    return (
        <div className="flex items-start space-x-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 relative">
                <Image
                    src={person.image}
                    alt={person.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>
            <div className="flex-grow">
                <p className="text-gray-700">{introMessage}</p>
            </div>
        </div>
    );
};

export default function Chat({ params }: Props) {
    const [input, setInput] = useState('');
    const person = people.find(p => p.handle.toLowerCase() === params.handle.toLowerCase()) || null;

    useEffect(() => {
        const inputElement = document.getElementById('chatInput');
        if (inputElement) {
            inputElement.focus();
        }
    }, []);

    if (!person) {
        return <div>Person not found</div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow p-4">
                <ChatMessage person={person} />
                {/* More chat messages would go here */}
            </div>
            <div className="fixed bottom-0 bg-white">
                <div className="max-w-[390px] mx-auto pb-4">
                    <ChatBar input={input} setInput={setInput} />
                </div>
            </div>
        </div>
    );
}