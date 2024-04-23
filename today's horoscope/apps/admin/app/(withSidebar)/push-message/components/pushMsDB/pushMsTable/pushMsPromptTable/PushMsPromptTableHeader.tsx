import React from 'react';
import TableHeader from '../../../../../../_components/table/TableHeader';

function PushMsPromptTableHeader() {
  return (
    <thead>
      <tr>
        <TableHeader content="적용일" />
        <TableHeader content="프롬프트" />
        <TableHeader />
      </tr>
    </thead>
  );
}

export default PushMsPromptTableHeader;
