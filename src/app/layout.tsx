import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--ff-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WeVote',
  description: 'Make Decisions Together',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${roboto.className} overflow-y-hidden`}>
        {children}
      </body>
    </html>
  );
}
