import React from 'react';
import ContentTitle from '../../../../../_components/contentTitle/ContentTitle';
import PushMsTable from './pushMsTable/PushMsTable';

function PushMsDB() {
  return (
    <React.Fragment>
      <section className="mt-10">
        <ContentTitle title="프롬프트 관리" />
        <PushMsTable />
      </section>
    </React.Fragment>
  );
}

export default PushMsDB;
