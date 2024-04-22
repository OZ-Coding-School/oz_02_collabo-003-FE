import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '../styles/global.css';
import ReactQueryProvider from './_react-query/ReactQueryProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
