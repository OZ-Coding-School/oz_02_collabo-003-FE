'use client';

import MainContainer from '../../_components/mainContainer/MainContainer';
import useTabStore from '../../_stores/useTabStore';
import PushMsTabs from './components/PushMsTabs';
import PushMsDB from './components/pushMsDB/PushMsDB';
import PushMsSetting from './components/pushMsSetting/PushMsSetting';

function PushMessage() {
  const { tabId } = useTabStore();

  return (
    <MainContainer>
      <PushMsTabs />
      {tabId === 1 && <PushMsSetting />}
      {tabId === 2 && <PushMsDB />}
    </MainContainer>
  );
}

export default PushMessage;
