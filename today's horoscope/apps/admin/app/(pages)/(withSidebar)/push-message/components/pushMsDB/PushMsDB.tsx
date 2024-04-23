import React from 'react';
import ContentTitle from '../../../../../_components/contentTitle/ContentTitle';
import PushMsPromptTable from './pushMsTable/pushMsPromptTable/PushMsPromptTable';
import PushMsContentsTable from './pushMsTable/pushMsContentsTable/PushMsContentsTable';

function PushMsDB() {
  return (
    <React.Fragment>
      <section className="mt-10">
        <ContentTitle title="프롬프트 관리" />
        <PushMsPromptTable />
      </section>
      <section className="mt-10">
        <ContentTitle title="생성 콘텐츠" />
        <PushMsContentsTable />
      </section>
    </React.Fragment>
  );
}

export default PushMsDB;
