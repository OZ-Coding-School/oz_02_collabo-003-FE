import apiInstance from './apiInstance';

const APIS = {
  getMbtiDataAPI: async () => {
    const res = await apiInstance.get('/msg/mbti_all');

    return res.data;
  },
};

export default APIS;
