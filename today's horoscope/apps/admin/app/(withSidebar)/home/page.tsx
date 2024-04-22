import React from 'react';
import HomeContent from './_components/HomeContent';
import ShortcutsLink from './_components/ShortcutsLink';

function Home() {
  return (
    <div className="w-full border-t-[1px] border-gray-100">
      <div className="p-10 grid grid-cols-2 gap-14">
        <HomeContent title="관리자 설정">
          <li>관리자 관리 및 정보 수정</li>
          <ShortcutsLink href="" />
        </HomeContent>
        <HomeContent title="통계">
          <li>방문자 통계, 회원 가입 통계</li>
          <li>기간 조회 가능</li>
          <ShortcutsLink href="" />
        </HomeContent>
        <HomeContent title="기능 관리">
          <li>푸시메시지 발송시간과 프롬프트 및 내용 관리</li>
          <li>콘텐츠(운세) 프롬프트 및 내용 관리</li>
          <ShortcutsLink href="" />
        </HomeContent>
      </div>
    </div>
  );
}

export default Home;
