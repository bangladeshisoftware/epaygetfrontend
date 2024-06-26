import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/_components/Header/Header';
import Footer from '@/app/_components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Payment Gateway',
  description: 'A smart payment gateway for your daily need'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} body-background`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
