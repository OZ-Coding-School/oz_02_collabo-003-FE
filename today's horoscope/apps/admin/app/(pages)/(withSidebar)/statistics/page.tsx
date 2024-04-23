import React from 'react';
import MainContainer from '../../../_components/mainContainer/MainContainer';
import StatisticsLeftSection from './components/statisticsLeftSection/StatisticsLeftSection';
import StatisticsRightSection from './components/statisticsRightSection/StatisticsRightSection';

function Statistics() {
  return (
    <MainContainer>
      <div className="flex gap-[50px]">
        <StatisticsLeftSection />
        <StatisticsRightSection />
      </div>
    </MainContainer>
  );
}

export default Statistics;
