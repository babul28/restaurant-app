import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { initFavoriteRestaurantButton } from './factory/restaurantFactories';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonConatiner"></div>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unfavorite widget when the restaurant has been favorited', async () => {
    await initFavoriteRestaurantButton({ id: 1 });

    expect(document.querySelector('[aria-label="not-favorite-restaurant"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the restaurant has been favorited', async () => {
    await initFavoriteRestaurantButton({ id: 1 });

    expect(document.querySelector('[aria-label="restaurant-favorite"]'))
      .toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await initFavoriteRestaurantButton({ id: 1 });

    document.querySelector('[aria-label="not-favorite-restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await initFavoriteRestaurantButton({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="not-favorite-restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
