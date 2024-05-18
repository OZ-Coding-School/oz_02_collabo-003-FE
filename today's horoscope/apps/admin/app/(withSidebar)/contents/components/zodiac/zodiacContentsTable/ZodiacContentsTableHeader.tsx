import React from 'react';
import TableHeader from '../../../../../_components/table/TableHeader';

function ZodiacContentsTableHeader() {
  return (
    <thead>
      <tr>
        <TableHeader content="띠" />
        <TableHeader content="년도" />
        <TableHeader content="내용" />
        <TableHeader content="" />
      </tr>
    </thead>
  );
}

export default ZodiacContentsTableHeader;
