'use client';

import React, { PropsWithChildren } from 'react';

interface TabProps {
  tabId: number;
  active: boolean;
  setTabId: (tabId: number) => void;
}

function Tab({ children, tabId, active, setTabId }: PropsWithChildren<TabProps>) {
  return (
    <button
      onClick={() => setTabId(tabId)}
      className={`table-cell border p-2 font-semibold ${active ? 'bg-gray-300' : 'br-white'}`}>
      {children}
    </button>
  );
}

export default Tab;
