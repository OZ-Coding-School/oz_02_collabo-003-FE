import React from 'react';
import SidebarTab from './SidebarTab';

function Sidebar() {
  return (
    <nav className="flex flex-col gap-2 w-[250px] min-h-[calc(100vh-150px)] p-4 bg-gray-100">
      <SidebarTab content="관리자 설정" />
      <SidebarTab content="통계" />
      <SidebarTab content="기능 관리" />
    </nav>
  );
}

export default Sidebar;
