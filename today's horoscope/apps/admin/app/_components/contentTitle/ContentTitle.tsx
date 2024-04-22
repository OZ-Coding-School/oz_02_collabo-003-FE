import React from 'react';

interface ContentTitleProps {
  title: TabType;
}

function ContentTitle({ title }: ContentTitleProps) {
  return <h2 className="text-black text-[20px] font-semibold mb-[10px]">{title}</h2>;
}

export default ContentTitle;
