import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SIP Calculator - Systematic Investment Plan Calculator',
  description: 'SIP Calculator',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}