import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantApiSource {
  static async getAllRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST());
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async findRestaurantById(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postReview(id, name, review) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_TOKEN,
      },
      body: JSON.stringify({ id, name, review }),
    });

    return response.json();
  }
}

export default RestaurantApiSource;
