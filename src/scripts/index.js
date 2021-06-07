import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  function loadJSON(url, callback) {
    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == '200') {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
    };

    xobj.send(null);
  }

  const changeHeroHeight = () => {
    const headerSize = document.querySelector('.header').getBoundingClientRect().height;

    document.querySelector('.hero').style.height = `calc(100vh - ${headerSize}px)`;
  };

  const hiddenMenu = () => {
    document.querySelector('#drawer').classList.remove('show');
  };

  loadJSON('data/restaurants.json', (res) => {
    const { restaurants } = JSON.parse(res);

    let restaurantsEl = ``;

    restaurants.forEach((item) => {
      restaurantsEl += `
            <article class="top-restaurant-item">
                <div class="top-restaurant-item__thumbnail">
                    <img src="${item.pictureId}" alt="${item.name} image" class="top-restaurant-item__thumbnail_image">
                    <div class="top-restaurant-item__thumbnail_label">${item.city}</div>
                </div>
                <div class="top-restaurant-item__content">
                    <p class="top-restaurant-item__rating">Rating: ${item.rating}</p>
                    <h3 class="top-restaurant-item__title">
                      <a href="">${item.name}</a>
                    </h3>
                    <p class="top-restaurant-item__description">${item.description}</p>
                </div>
            </article>
          `;
    });

    document.querySelector('.top-restaurants').innerHTML = restaurantsEl;
  });

  document.querySelector('.hero__action').addEventListener('click', (event) => {
    event.preventDefault();

    const pos = event.target.getBoundingClientRect();

    window.scrollTo({
      top: pos.top * 1.45,
      behavior: 'smooth',
    });
  });

  document.querySelector('#menu').addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('#drawer').classList.toggle('show');
  });

  document.querySelector('.hero').addEventListener('click', () => {
    hiddenMenu();
  });

  document.querySelector('main').addEventListener('click', () => {
    hiddenMenu();
  });

  changeHeroHeight();

  window.addEventListener('resize', () => {
    changeHeroHeight();
  });
});
