import React, { PropsWithChildren } from 'react';
import ContentTitle from '../../../_components/contentTitle/ContentTitle';
import HomeContentDetail from './HomeContentDetail';

interface HomeContentProps {
  title: TabType;
}

function HomeContent({ title, children }: PropsWithChildren<HomeContentProps>) {
  return (
    <div>
      <ContentTitle title={title} />
      <HomeContentDetail>{children}</HomeContentDetail>
    </div>
  );
}

export default HomeContent;
