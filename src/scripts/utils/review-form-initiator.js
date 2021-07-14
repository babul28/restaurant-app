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

    this._reviewName = document.querySelector('#review_name');
    this._reviewContent = document.querySelector('#review_content');

    this._addEventListener();
  },

  async _addEventListener() {
    const reviewForm = document.querySelector('#reviewForm');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (await this._validateReviewForm()) {
        await this._submitReview();
        this._resetReviewForm();
      }
    });
  },

  async _resetReviewForm() {
    this._reviewName.value = '';
    this._reviewContent.value = '';

    document.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));
    document.querySelectorAll('.show').forEach((el) => el.classList.remove('show'));
  },

  async _submitReview() {
    const submitButton = document.querySelector('.restaurant_review_button');
    submitButton.innerHTML = 'Loading...';

    const reviews = await RestaurantApiSource.postReview(
      this._id,
      this._reviewName.value,
      this._reviewContent.value,
    );

    await this._reRenderReviewsComponent(reviews);
    submitButton.innerHTML = 'Submit';
  },

  async _validateReviewForm() {
    let validationError = true;
    if (!this._reviewName.value) {
      this._showValidationError({ inputForm: this._reviewName, className: 'review_name_error', errorMessage: 'Required review name' });
      validationError = false;
    }

    if (!this._reviewContent.value) {
      this._showValidationError({ inputForm: this._reviewContent, className: 'review_content_error', errorMessage: 'Required review content' });
      validationError = false;
    }

    return validationError;
  },

  async _showValidationError({ inputForm, className, errorMessage }) {
    inputForm.classList.add('error');
    const reviewNameError = document.querySelector(`.${className}`);
    reviewNameError.classList.add('show');
    reviewNameError.innerHTML = errorMessage;
  },

  async _reRenderReviewsComponent({ customerReviews }) {
    const reviewsComponent = document.querySelector('.restaurant__reviews_container');
    reviewsComponent.innerHTML = customerReviews.reduce((template, review) => template + createReviewComponent(review), '');
  },
};

export default ReviewFormInitiator;
