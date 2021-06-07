const createRestaurantItemTemplate = (restaurant) => `
    <article class="top-restaurant-item">
        <div class="top-restaurant-item__thumbnail">
            <img src="${restaurant.pictureId}" alt="${restaurant.name} image" class="top-restaurant-item__thumbnail_image">
            <div class="top-restaurant-item__thumbnail_label">${restaurant.city}</div>
        </div>
        <div class="top-restaurant-item__content">
            <p class="top-restaurant-item__rating">Rating: ${restaurant.rating}</p>
            <h3 class="top-restaurant-item__title">
                <a href="">${restaurant.name}</a>
            </h3>
            <p class="top-restaurant-item__description">${restaurant.description}</p>
        </div>
    </article>
`;

export { createRestaurantItemTemplate };
