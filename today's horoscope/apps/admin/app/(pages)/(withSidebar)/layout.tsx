import React from 'react';
import Sidebar from '../../_components/sidebar/Sidebar';

export default function WithSidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
