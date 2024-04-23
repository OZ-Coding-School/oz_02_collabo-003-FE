'use client';

import MainContainer from '../../../_components/mainContainer/MainContainer';
import useTabStore from '../../../_stores/useTabStore';
import PushMessageSetting from './components/PushMessageSetting';
import PushMessageTabs from './components/PushMessageTabs';

function PushMessage() {
  const { tabId } = useTabStore();

  return (
    <MainContainer>
      <PushMessageTabs />
      {tabId === 1 && <PushMessageSetting />}
    </MainContainer>
  );
}

export default PushMessage;
