import React from 'react';
import TableHeader from '../../../../_components/table/TableHeader';

function AdminTableHeader() {
  return (
    <thead>
      <tr>
        <TableHeader content="번호" />
        <TableHeader content="이메일" />
        <TableHeader content="이름" />
        <TableHeader content="연락처" />
        <TableHeader content="등록일" />
        <TableHeader />
      </tr>
    </thead>
  );
}

export default AdminTableHeader;
