import { createRestaurantItemTemplate } from '../views/templates/template-restaurant';

const RestaurantInitiator = {
  init() {
    this._renderComponent();
  },

  _loadJSON(url, callback) {
    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = () => {
      if (xobj.readyState === 4 && xobj.status === 200) {
        callback(xobj.responseText);
      }
    };

    xobj.send(null);
  },

  _renderComponent() {
    this._loadJSON('data/restaurants.json', (res) => {
      const { restaurants } = JSON.parse(res);

      let restaurantsEl = '';

      restaurants.forEach((item) => {
        restaurantsEl += createRestaurantItemTemplate(item);
      });

      document.querySelector('.top-restaurants').innerHTML = restaurantsEl;
    });
  },
};

export default RestaurantInitiator;
