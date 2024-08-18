"use client";
import React, { useState, useEffect, useRef } from 'react';
import { suggestions } from '@/constants/suggestions';
import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

interface ChatBarProps {
    input: string;
    setInput: (input: string) => void;
}

export default function ChatBar({ input, setInput }: ChatBarProps) {
    const router = useRouter();
    const [charCount, setCharCount] = useState(0);
    const [isMultiline, setIsMultiline] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const inputElement = textareaRef.current;
        if (inputElement) {
            inputElement.focus({ preventScroll: true });
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newInput = e.target.value.slice(0, 140);
        setInput(newInput);
        setCharCount(newInput.length);
        adjustTextareaHeight();
    };

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`; 

            const isNowMultiline = textareaRef.current.scrollHeight > 32;
            setIsMultiline(isNowMultiline);

            if (containerRef.current) {
                containerRef.current.className = `flex-1 flex flex-col border border-gray-300 py-2 px-4 transition ${isNowMultiline ? 'rounded-xl' : 'rounded-full'}`;
            }
        }
    };

    return (
        <div className="bg-white w-full">
            <div className="max-w-[390px] mx-auto">
                <div className="overflow-x-auto whitespace-nowrap py-2 px-2">
                    {suggestions.map((question, index) => (
                        <Link key={index} href="/buy" className="inline-block mr-2 last:mr-0 bg-gray-100 text-gray-700 text-left py-2 px-4 rounded-lg hover:bg-gray-100 transition">
                            <div className="font-semibold">{question.title}</div>
                            <div className="text-sm text-gray-500">{question.subtitle}</div>
                        </Link>
                    ))}
                </div>
                <div className="flex items-start space-x-2 py-2">
                    <div ref={containerRef} className="flex-1 flex flex-col border border-gray-300 py-2 px-4 rounded-full transition">
                        <textarea
                            ref={textareaRef}
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Message"
                            className="bg-transparent outline-none resize-none overflow-hidden w-full"
                            style={{
                                minHeight: '24px',
                                maxHeight: '100px',
                            }}
                            rows={1}
                        />
                        <div className={`text-xs text-gray-500 ${isMultiline ? 'mt-1' : 'hidden'}`}>
                            {charCount}/140
                        </div>
                    </div>
                    {input.trim() && (
                        <ArrowUpCircleIcon
                            className="w-9 h-9 text-black cursor-pointer ml-2"
                            onClick={() => {
                                console.log('Sending:', input);
                                setInput('');
                                router.push('/buy');
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}