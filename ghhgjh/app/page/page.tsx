"use client";
import ChatBar from '@/components/handle/chat/ChatBar';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Chat() {
    const [input, setInput] = useState('');

    useEffect(() => {
        const inputElement = document.getElementById('chatInput');
        if (inputElement) {
            inputElement.focus();
        }
    }, []);

    return (
        <div>
            <h1 className="pt-4 text-xl font-medium mb-6 text-center">Meet professionals who work for</h1>

            <div className="sticky bottom-0 bg-white">
                <div className="max-w-[390px] mx-auto pb-4">
                    <div className="w-full mt-4">
                        <ChatBar input={input} setInput={setInput} />
                    </div>
                </div>
            </div>
        </div>
    );
}