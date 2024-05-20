import apiInstance from './apiInstance';

const APIS = {
  getUserDataAPI: async (user_birth: string | null, user_MBTI: string | null) => {
    const res = await apiInstance.get(`/msg/main/${user_birth}&${user_MBTI}/`);

    return res.data;
  },
  getMbtiDataAPI: async () => {
    const res = await apiInstance.get('/msg/mbti_all/');

    return res.data;
  },
  getStarDataAPI: async () => {
    const res = await apiInstance.get('/msg/star_all/');

    return res.data;
  },
  getZodiacDataAPI: async (attribute1: string | undefined) => {
    const res = await apiInstance.get(`/msg/zodiac_all/${attribute1}/`);

    return res.data;
  },
  getTodayDataAPI: async () => {
    const res = await apiInstance.get('/today/today_all/');

    return res.data;
  },
};

export default APIS;
