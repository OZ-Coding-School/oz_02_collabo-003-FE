import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '../styles/global.css';
import ReactQueryProvider from './_react-query/ReactQueryProvider';
import Header from './_components/header/Header';
import { ReactNode } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }: { children: ReactNode; types: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <div className="text-[#686868]">
            <Header />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
