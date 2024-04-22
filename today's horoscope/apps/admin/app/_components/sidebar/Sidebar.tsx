import React from 'react';
import SidebarTab from './SidebarTab';
import routes from '../../_constants/routes';

function Sidebar() {
  return (
    <nav className="flex flex-col gap-2 min-w-[250px] min-h-[calc(100vh-150px)] p-4 bg-gray-100">
      <SidebarTab content="HOME" href={routes.HOME} />
      <SidebarTab content="관리자 설정" href={routes.ADMIN} />
      <SidebarTab content="통계" href={routes.STATISTICS} />
      <SidebarTab content="기능 관리" />
    </nav>
  );
}

export default Sidebar;
