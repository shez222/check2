import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { FAQItem } from '@/models/faqItem';
import { faqItems } from '@/constants/faqItems';

const FAQs: React.FC = () => {
    return (
        <div className="flex flex-col w-full">
            <span className="justify-start text-lg font-semibold pt-4">FAQ</span>
            {faqItems.map((item, index) => (
                <IndividualFAQ key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};

const IndividualFAQ: React.FC<FAQItem> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium">{question}</span>
                {isOpen ? (
                    <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                ) : (
                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                )}
            </button>
            {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
        </div>
    );
};

export default FAQs;