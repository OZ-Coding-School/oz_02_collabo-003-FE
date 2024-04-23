import React from 'react';
import AdminTableRow from './AdminTableRow';
import AdminTableHeader from './AdminTableHeader';

export interface AdminUser {
  id: number;
  email: string;
  name: string;
  contact: string;
  registeredDate: string;
}

const adminUsers: AdminUser[] = [
  { id: 1, email: 'user1@example.com', name: '김범수', contact: '010-1234-5678', registeredDate: '2022-01-01' },
  { id: 2, email: 'user2@example.com', name: '신현민', contact: '010-2345-6789', registeredDate: '2022-01-02' },
  { id: 3, email: 'user3@example.com', name: '김효진', contact: '010-3456-7890', registeredDate: '2022-01-03' },
];

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
