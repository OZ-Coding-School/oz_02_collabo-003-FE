import React, { PropsWithChildren } from 'react';

function HomeContentDetail({ children }: PropsWithChildren) {
  return <div className="w-[100%] bg-gray-100 h-40 p-4 relative">{children}</div>;
}

export default HomeContentDetail;
