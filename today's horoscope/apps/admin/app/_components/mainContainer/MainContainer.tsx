import React, { PropsWithChildren } from 'react';

function MainContainer({ children }: PropsWithChildren) {
  return (
    <div className="min-w-[1286px] max-h-[calc(100vh-150px)] overflow-auto p-10 border-t-[2px] border-gray-100">
      {children}
    </div>
  );
}

export default MainContainer;
