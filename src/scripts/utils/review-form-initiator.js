import RestaurantApiSource from '../data/restaurantapi-source';
import { createReviewFormComponent, createReviewComponent } from '../views/templates/template-restaurant';

const ReviewFormInitiator = {
  async init({ id, reviewContainer }) {
    this._id = id;
    this._reviewContainer = reviewContainer;

    this._render();
  },

  async _render() {
    this._reviewContainer.innerHTML = createReviewFormComponent('reviewForm');

    // this._reviewName = document.querySelector('#review_name');
    // this._reviewContent = document.querySelector('#review_content');

    // this._addEventListener();
  },

  async _addEventListener() {
    const reviewForm = document.querySelector('#reviewForm');
    reviewForm.addEventListener('submit', (event) => {
      event.preventDefault();

      this._submitReview()
        .then(() => this._reRenderReviewsComponent())
        .then(() => this._resetReviewForm());
    });
  },

  async _resetReviewForm() {
    this._reviewName.value = '';
    this._reviewContent.value = '';
  },

  async _submitReview() {
    await RestaurantApiSource.postReview(
      this._id,
      this._reviewName.value,
      this._reviewContent.value,
    );
  },

  async _reRenderReviewsComponent() {
    const restaurant = await RestaurantApiSource.findRestaurantById(this._id);

    const reviewsComponent = document.querySelector('.restaurant__reviews_container');
    reviewsComponent.innerHTML = restaurant.customerReviews.reduce((template, review) => template + createReviewComponent(review), '');
  },
};

export default ReviewFormInitiator;
