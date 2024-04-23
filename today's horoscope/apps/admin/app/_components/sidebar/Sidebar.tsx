import React from 'react';
import SidebarTab from './SidebarTab';
import routes from '../../_constants/routes';

function Sidebar() {
  return (
    <div className="h-[calc(100vh-150px)]">
      <nav className="flex flex-col gap-2 min-w-[250px] p-4 border-t-[2px] border-gray-100 sticky top-0">
        <SidebarTab content="HOME" href={routes.HOME} />
        <SidebarTab content="관리자 설정" href={routes.ADMIN} />
        <SidebarTab content="통계" href={routes.STATISTICS} />
        <SidebarTab content="기능 관리" />
      </nav>
    </div>
  );
}

export default Sidebar;
