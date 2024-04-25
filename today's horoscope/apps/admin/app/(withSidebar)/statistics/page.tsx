import React from 'react';
import MainContainer from '../../_components/mainContainer/MainContainer';
import ContentTitle from '../../_components/contentTitle/ContentTitle';
import Link from 'next/link';

function Statistics() {
  return (
    <MainContainer>
      <ContentTitle title="통계" />
      <div className="w-[500px] h-[100px] bg-gray-200 border-t-2 border-b-2 border-gray-400 px-4 flex justify-between items-center">
        <p className="text-lg">파이어베이스 통계</p>
        <Link
          href=""
          className="w-[100px] h-[40px] bg-blue-500 text-white text-lg flex justify-center items-center rounded-lg">
          바로 가기
        </Link>
      </div>
    </MainContainer>
  );
}

export default Statistics;
