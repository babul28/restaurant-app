import RestaurantApiSource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';
import ReviewFormInitiator from '../../utils/review_form_initiator';
import { createRestaurantDetailTemplate } from '../templates/template-restaurant';

const Detail = {
  async render() {
    return `
      <div class="container">
        <article id="restaurant" class="restaurant"></article>
        <div id="likeButtonContainer"></div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.findRestaurantById(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    ReviewFormInitiator.init({
      id: url.id,
      reviewContainer: document.querySelector('.restaurant__reviews_reply'),
    });
  },
};

export default Detail;
