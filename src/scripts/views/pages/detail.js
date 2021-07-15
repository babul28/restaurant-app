import RestaurantApiSource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';
import FavoriteRestaurantButtonPresenter from '../../utils/favorit-restaurant-button-presenter';
import ReviewFormInitiator from '../../utils/review-form-initiator';
import SpinnerInitiator from '../../utils/spinner-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-restaurant';

const Detail = {
  async render() {
    return `
      <div class="container">
        <article id="restaurant" class="restaurant"></article>
        <div id="favoriteButtonConatiner"></div>
      </div>
      `;
  },

  async afterRender() {
    SpinnerInitiator.init({ spinerContainer: document.querySelector('main') });

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.findRestaurantById(url.id);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    SpinnerInitiator.remove();

    ReviewFormInitiator.init({
      id: url.id,
      reviewContainer: document.querySelector('.restaurant__reviews_reply'),
    });

    FavoriteRestaurantButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonConatiner'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
