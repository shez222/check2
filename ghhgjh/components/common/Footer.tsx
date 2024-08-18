// components/Footer.js

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white py-8">
            <div className="max-w-[390px] mx-auto px-4">
                <div className="text-xl font-bold">[ Outpost ]</div>
                <div className="text-lg mt-2 mb-6">Meet people who work at your dream company.</div>
                <Link href="/pre-screen">
                    <div className="block bg-transparent text-white border border-white rounded-lg px-4 py-3 text-center w-full cursor-pointer">
                        Become a Professional
                    </div>
                </Link>
                <div className="mt-8 space-y-2">
                    <Link href="https://outpost.chat/refer" className="block">Refer - Get Coins</Link>
                    <Link href="mailto:hey@spark.ooo" className="block">Contact</Link>
                    <Link href="mailto:hey@spark.ooo" className="block">Feedback</Link>
                    <Link href="http://go.spark.ooo/privacy" className="block">Policy</Link>
                    <Link href="https://go.spark.ooo/terms" className="block">Terms</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
