import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createFavoriteRestaurantButtonTemplate, createUnfavoriteRestaurantButtonTemplate } from '../views/templates/favorite-button-template';

const FavoriteRestaurantButtonPresenter = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    if (await this._isFavoriteRestaurant(this._restaurant.id)) {
      this._renderFavoritedButton();
    } else {
      this._renderFavoriteButton();
    }
  },

  async _isFavoriteRestaurant(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  async _renderFavoriteButton() {
    this._favoriteButtonContainer.innerHTML = createFavoriteRestaurantButtonTemplate();

    document.querySelector('#favoriteButton').addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  async _renderFavoritedButton() {
    this._favoriteButtonContainer.innerHTML = createUnfavoriteRestaurantButtonTemplate();

    document.querySelector('#favoriteButton').addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteRestaurantButtonPresenter;
