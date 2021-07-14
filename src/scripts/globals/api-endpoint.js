import CONFIG from './config';

const API_ENDPOINT = {
  LIST: () => `${CONFIG.API_BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.API_BASE_URL}/detail/${id}`,
  POST_REVIEW: () => `${CONFIG.API_BASE_URL}/review`,
};

export default API_ENDPOINT;
