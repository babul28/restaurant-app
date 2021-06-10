import CONFIG from '../../globals/config';

const _createOptionTemplate = (className, content) => `<span class="${className}">${content}</span>`;

const _createCategoriesComponent = (categories) => `
    <div class="restaurant__categories_container">
        <h4>Category</h4>
        <div class="restaurant__categories">
            ${categories.reduce((template, category) => template + _createOptionTemplate('restaurant__category', category.name), '')}
        </div>
    </div>
`;

const _createFoodsComponent = (foods) => `
    <div class="restaurant__menus">
        <h4>Foods</h4>
        <div class="restaurant__menu_foods">
            ${foods.reduce((template, food) => template + _createOptionTemplate('restaurant__menu_food', food.name), '')}
        </div>
    </div>
`;

const _createDrinksComponent = (drinks) => `
    <div class="restaurant__menus">
        <h4>Drinks</h4>
        <div class="restaurant__menu_drinks">
            ${drinks.reduce((template, drink) => template + _createOptionTemplate('restaurant__menu_drink', drink.name), '')}
        </div>
    </div>
`;

const createReviewComponent = (review) => `
    <div class="restaurant__review">
        <div class="review__avatar">
            <img src="${CONFIG.UI_AVATAR(review.name)}" alt="${review.name} avatar" />
        </div>
        <div class="review__body">
            <p class="review__date">${review.date}</p>
            <p class="review__name">${review.name}</p>
            <div class="review__content">${review.review}</div>
        </div>
    </div>
`;

const _createReviewsComponent = (reviews) => `
    <div class="restaurant__reviews">
        <h3>Reviews</h3>
        <div class="restaurant__reviews_container">
            ${reviews.reduce((component, review) => component + createReviewComponent(review), '')}
        </div>
        <div class="restaurant__reviews_reply"></div>
    </div>
  `;

const createReviewFormComponent = (id) => `
    <form id="${id}">
        <div class="form-group">
            <input id="review_name" type="text" class="restaurant__input" placeholder="Your Name" />
            <span class="review_name_error"></span>
        </div>
        <div class="form-group">
            <textarea id="review_content" cols="30" rows="10" class="restaurant__textarea" placeholder="What you think about this menu?"></textarea>
            <span class="review_content_error"></span>
        </div>
        <div class="flex justify-end items-center">
            <button type="submit" class="restaurant_review_button">Submit</button>
        </div>
    </form>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="top-restaurant-item">
        <div class="top-restaurant-item__thumbnail">
            <img src="${CONFIG.IMAGE_BASE_URL(restaurant.pictureId)}" alt="${restaurant.name} image" class="top-restaurant-item__thumbnail_image">
            <div class="top-restaurant-item__thumbnail_label">${restaurant.city}</div>
        </div>
        <div class="top-restaurant-item__content">
            <p class="top-restaurant-item__rating">Rating: ${restaurant.rating}</p>
            <h3 class="top-restaurant-item__title">
                <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
            </h3>
            <p class="top-restaurant-item__description">${restaurant.description}</p>
        </div>
    </article>
`;

const createEmptyRestaurantListTemplate = () => `
    <div class="restaurant-item__empty">Anda belum memiliki restoran favorit</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <div class="restaurant__detail">
        <div class="restaurant__poster_container">
            <img class="restaurant__poster" src="${CONFIG.IMAGE_BASE_URL(restaurant.pictureId)}" alt="${restaurant.name}" />
        </div>
        <div class="restaurant__info">
            <h3>Information</h3>
            ${_createCategoriesComponent(restaurant.categories)}
            <h4>Rating</h4>
            <p class="icon-star"><i class="fas fa-star"></i>${restaurant.rating}</p>
            ${_createFoodsComponent(restaurant.menus.foods)}
            ${_createDrinksComponent(restaurant.menus.drinks)}
            <h4>Address</h4>
            <p>${restaurant.address}</p>
        </div>
    </div>
    <div class="restaurant__description">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
    </div>

    ${_createReviewsComponent(restaurant.customerReviews)}
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createReviewComponent,
  createReviewFormComponent,
  createEmptyRestaurantListTemplate,
};
