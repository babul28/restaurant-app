const CONFIG = {
  API_BASE_URL: 'https://restaurant-api.dicoding.dev',
  API_TOKEN: '12345',
  IMAGE_BASE_URL: (pictureId) => `https://restaurant-api.dicoding.dev/images/small/${pictureId}`,
  UI_AVATAR: (name) => `https://ui-avatars.com/api/?background=random&name=${name}`,
  CACHE_NAME: 'MangApp-V1',
};

export default CONFIG;
