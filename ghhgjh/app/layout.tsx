import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from '@/context/AuthContext';
import Header from "@/components/common/Header";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import { Metadata } from 'next'
import { globals } from '@/constants/globals';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: globals.appName,
  description: globals.tagline,
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico' },
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon/favicon-32x32.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
          <LayoutWrapper>
            <Header />
            {children}
          </LayoutWrapper>
        </AuthContextProvider>
      </body>
    </html>
  );
}