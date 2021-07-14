import HeroInitiator from '../../utils/hero-initiator';
import RestaurantApiSource from '../../data/restaurantapi-source';
import { createRestaurantItemTemplate } from '../templates/template-restaurant';

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__inner"></div>
      </div>
      <div class="container">
          <section class="content" id="main-content">
              <h2 id="recomendation" class="content__label">Explore Restaurant</h2>
              <div class="top-restaurants"></div>
          </section>
      </div>
    `;
  },

  async afterRender() {
    HeroInitiator.init({ heroContainer: document.querySelector('.hero__inner') });

    const restaurants = await RestaurantApiSource.getAllRestaurants();
    const restaurantContainer = document.querySelector('.top-restaurants');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
