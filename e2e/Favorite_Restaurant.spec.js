const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.see('Anda belum memiliki restoran favorit', '.restaurant-item__empty');
});

Scenario('make one restaurant to favorite', async ({ I }) => {
  I.see('Anda belum memiliki restoran favorit', '.restaurant-item__empty');

  I.amOnPage('/');

  I.seeElement('.top-restaurant-item__title a');

  const firstRestaurant = locate('.top-restaurant-item__title a').first();
  const firstRestaurantText = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-restaurants');

  const favoriteRestaurantTitle = await I.grabTextFrom('.top-restaurant-item__title');

  assert.strictEqual(firstRestaurantText, favoriteRestaurantTitle);
});

Scenario('make a restaurant to favorite, validate, and then make unfavorite restaurant', async ({ I }) => {
  I.see('Anda belum memiliki restoran favorit', '.restaurant-item__empty');

  I.amOnPage('/');

  I.seeElement('.top-restaurant-item__title a');

  const firstRestaurant = locate('.top-restaurant-item__title a').first();
  const firstRestaurantText = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.favorite-restaurants');

  const favoriteRestaurantTitle = await I.grabTextFrom('.top-restaurant-item__title');

  assert.strictEqual(firstRestaurantText, favoriteRestaurantTitle);

  I.click(locate('.top-restaurant-item__title a').first());

  I.seeElement('#favoriteButton');

  const detailsFavoriteRestaurantText = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(favoriteRestaurantTitle, detailsFavoriteRestaurantText);

  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.see('Anda belum memiliki restoran favorit', '.restaurant-item__empty');
});

Scenario('make favorite and unfavotire restaurant on same page', async ({ I }) => {
  I.see('Anda belum memiliki restoran favorit', '.restaurant-item__empty');

  I.amOnPage('/');

  I.seeElement('.top-restaurant-item__title a');

  I.click(locate('.top-restaurant-item__title a').first());

  I.seeElement('#favoriteButton');

  I.click('#favoriteButton');
  I.seeElement('[aria-label="not-favorite-restaurant"]');

  I.click('#favoriteButton');
  I.seeElement('[aria-label="restaurant-favorite"]');

  I.amOnPage('/#/favorite');
  I.see('Anda belum memiliki restoran favorit', '.restaurant-item__empty');
});

Scenario('add a review on a restaurant', async ({ I }) => {
  I.see('Anda belum memiliki restoran favorit', '.restaurant-item__empty');

  I.amOnPage('/');

  I.seeElement('.top-restaurant-item__title a');

  const numOfRestaurants = await I.grabNumberOfVisibleElements('.top-restaurant-item');
  const randomRestaurantElement = Math.floor(Math.random() * numOfRestaurants) + 1;
  I.click(locate('.top-restaurant-item__title a').at(randomRestaurantElement));

  I.seeElement('.restaurant__reviews');
  const numOfReviewsElements = await I.grabNumberOfVisibleElements('.restaurant__review');

  I.seeElement('#review_name');
  const reviewTitle = 'Mamang APP';
  I.fillField('#review_name', reviewTitle);

  I.seeElement('#review_content');
  const reviewContent = 'E2E Testing for Mamang App';
  I.fillField('#review_content', reviewContent);

  I.seeElement('.restaurant_review_button');
  I.click('.restaurant_review_button');

  const numOfReviewsElementsAfterAddedNewReview = numOfReviewsElements + 1;
  I.waitNumberOfVisibleElements('.restaurant__review', numOfReviewsElementsAfterAddedNewReview, 20);

  const lastReviewTitle = await I.grabTextFrom(locate('.review__name').at(numOfReviewsElementsAfterAddedNewReview));
  const lastReviewContent = await I.grabTextFrom(locate('.review__content').at(numOfReviewsElementsAfterAddedNewReview));
  assert.strictEqual(reviewTitle, lastReviewTitle);
  assert.strictEqual(reviewContent, lastReviewContent);
});

Scenario('show error when try to add a empty review on a restaurant', async ({ I }) => {
  I.see('Anda belum memiliki restoran favorit', '.restaurant-item__empty');

  I.amOnPage('/');

  I.seeElement('.top-restaurant-item__title a');

  const numOfRestaurants = await I.grabNumberOfVisibleElements('.top-restaurant-item');
  const randomRestaurantElement = Math.floor(Math.random() * numOfRestaurants) + 1;
  I.click(locate('.top-restaurant-item__title a').at(randomRestaurantElement));

  I.seeElement('.restaurant__reviews');
  const numOfReviewsElements = await I.grabNumberOfVisibleElements('.restaurant__review');

  I.seeElement('.restaurant_review_button');
  I.click('.restaurant_review_button');

  I.seeElement('.restaurant__input.error');
  I.see('Required review name', '.review_name_error.show');

  I.seeElement('.restaurant__textarea.error');
  I.see('Required review content', '.review_content_error.show');

  const numOfReviewsElementsAfterSubmitEmptyReview = await I.grabNumberOfVisibleElements('.restaurant__review');
  assert.strictEqual(numOfReviewsElements, numOfReviewsElementsAfterSubmitEmptyReview);
});
