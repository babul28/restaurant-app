import FavoriteRestaurantButtonPresenter from '../../src/scripts/utils/favorit-restaurant-button-presenter';

const initFavoriteRestaurantButton = async (restaurant) => {
  await FavoriteRestaurantButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonConatiner'),
    restaurant,
  });
};

export { initFavoriteRestaurantButton };
