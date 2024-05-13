import React from 'react';
import AdminTableRow from './AdminTableRow';
import AdminTableHeader from './AdminTableHeader';
import adminUsers from './fakeData';

function AdminTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <AdminTableHeader />
        <tbody>
          {adminUsers.map(user => (
            <AdminTableRow key={user.id} adminUser={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
