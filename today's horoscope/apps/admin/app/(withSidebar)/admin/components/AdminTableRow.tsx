'use client';

import React, { useState } from 'react';
import TableCell from '../../../_components/table/TableCell';
import TableButton from '../../../_components/table/TableButton';
import { AdminUser } from './fakeData';

interface AdminTableRowProps {
  adminUser: AdminUser;
}

function AdminTableRow({ adminUser }: AdminTableRowProps) {
  const [isClickedButton, setisClickedButton] = useState(false);
  const handleClickButton = () => {
    setisClickedButton(!isClickedButton);
  };

  return (
    <tr>
      <TableCell>{adminUser.id}</TableCell>
      <TableCell>{adminUser.email}</TableCell>
      <TableCell>{adminUser.name}</TableCell>
      <TableCell>{adminUser.contact}</TableCell>
      <TableCell>{adminUser.registeredDate}</TableCell>
      <TableCell>
        <TableButton onClick={handleClickButton} isClickedButton={isClickedButton}>
          {isClickedButton ? '저장' : '수정'}
        </TableButton>
      </TableCell>
    </tr>
  );
}

export default AdminTableRow;
