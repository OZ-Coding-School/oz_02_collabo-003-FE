import React from 'react';
import TableHeader from '../../../../../../_components/table/TableHeader';

function PushMsContentsTableHeader() {
  return (
    <thead>
      <tr>
        <TableHeader content="번호" />
        <TableHeader content="내용" />
        <TableHeader />
      </tr>
    </thead>
  );
}

export default PushMsContentsTableHeader;
