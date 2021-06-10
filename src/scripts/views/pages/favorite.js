import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-restaurant';

const Favorite = {
  async render() {
    return `
      <div class="container">
          <section class="content">
              <h2 id="recomendation" class="content__label">Favorite Restaurants</h2>
              <div class="favorite-restaurants"></div>
          </section>
      </div>
      `;
  },

  async afterRender() {
    const favoriteRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('.favorite-restaurants');

    favoriteRestaurants.forEach((favoriteRestaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(favoriteRestaurant);
    });
  },
};

export default Favorite;
