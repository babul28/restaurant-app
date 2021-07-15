const createFavoriteRestaurantButtonTemplate = () => `
<button aria-label="restaurant-favorite" id="favoriteButton" class="favorite">
   <i class="far fa-grin" aria-hidden="true"></i>
</button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
<button aria-label="not-favorite-restaurant" id="favoriteButton" class="favorite">
  <i class="fas fa-grin-hearts" aria-hidden="true"></i>
</button>
`;

export { createFavoriteRestaurantButtonTemplate, createUnfavoriteRestaurantButtonTemplate };
