import getFormattedDate from '../../../../../../_utils/getFormattedDate';

export interface TodayContent {
  date: string;
  content: string;
}

const { monthDay, adjustDate } = getFormattedDate();

const commonContent =
  '비오는 날이지만, 세상은 아름답고 환하다는 걸 느껴봐요. ☔️ 내일의 햇살이 더욱 빛나게 만들 거예요. 힘내세요! 💪 한 발짝 더 나아가는 하루, 마음';

function createContents(): TodayContent[] {
  const contents: TodayContent[] = [];
  for (let i = 10; i >= 0; i--) {
    contents.push({
      date: adjustDate(i),
      content: commonContent,
    });
  }

  contents.push({
    date: monthDay,
    content: commonContent,
  });
  return contents;
}

const todayContents = createContents();

export default todayContents;
