export interface ZodiacData {
  title: string;
  zodiac: Zodiac[];
}

interface Zodiac {
  year: number;
  contents: string;
}

const zodiacData: ZodiacData[] = [
  {
    title: '쥐띠',
    zodiac: [
      {
        year: 1956,
        contents:
          '오늘은 새로운 기회가 당신을 기다립니다. 주변 사람들의 도움과 협력이 중요할 것입니다. 긍정적인 마음가짐으로 도전하세요.',
      },
      {
        year: 1968,
        contents:
          '여행이나 새로운 활동을 통해 스트레스를 해소할 수 있는 시기입니다. 새로운 사람들과의 만남은 새로운 아이디어를 얻을 수 있습니다.',
      },
      {
        year: 1980,
        contents:
          '직장에서 성과를 얻을 수 있는 좋은 기회가 찾아올 것입니다. 자신의 역량을 믿고 도전해보세요. 도전은 성장의 시작입니다.',
      },
      {
        year: 1992,
        contents:
          '직장에서 성과를 얻을 수 있는 좋은 기회가 찾아올 것입니다. 자신의 역량을 믿고 도전해보세요. 도전은 성장의 시작입니다. ',
      },
    ],
  },
];

export default zodiacData;
