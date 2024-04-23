import React from 'react';
import TableHeader from '../../../../../../_components/table/TableHeader';

function PushMsContentsTableHeader() {
  return (
    <thead>
      <tr>
        <TableHeader content="날짜" />
        <TableHeader content="내용" />
        <TableHeader />
      </tr>
    </thead>
  );
}

export default PushMsContentsTableHeader;
