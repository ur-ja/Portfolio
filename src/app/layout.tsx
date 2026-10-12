import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '../components/NavBar';
import { SegmentProvider } from '../components/SegmentContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Urja Arora',
  description: 'Developer, Designer, and Student',
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SegmentProvider>
          <div className='min-h-screen pt-10 flex flex-col'>
            <NavBar />
            <div className='flex-1 mb-10'>{children}</div>
            <footer className='flex justify-center items-center pb-6'>
              <p className='text-sm text-gray-300 font-extralight'>design by nev</p>
            </footer>
          </div>
        </SegmentProvider>
      </body>
    </html>
  );
}
