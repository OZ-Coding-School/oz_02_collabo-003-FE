import React, { PropsWithChildren } from 'react';

function DropdownList({ children }: PropsWithChildren) {
  return (
    <ul className="absolute top-10 py-2 w-full h-40 border-2 rounded-lg overflow-y-auto flex flex-col gap-2 bg-white">
      {children}
    </ul>
  );
}

export default DropdownList;
