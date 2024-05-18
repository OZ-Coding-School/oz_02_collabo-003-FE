import React, { PropsWithChildren } from 'react';

function MainContainer({ children }: PropsWithChildren) {
  return <div className="w-full p-10 border-t-[2px] border-l-[2px] border-gray-100">{children}</div>;
}

export default MainContainer;
