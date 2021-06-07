import RestaurantInitiator from '../../utils/restaurant_initiator';
import HeroInitiator from '../../utils/hero_initiator';

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__inner"></div>
      </div>
      <div class="container">
          <section class="content">
              <h2 id="recomendation" class="content__label">Explore Restaurant</h2>
              <div class="top-restaurants"></div>
          </section>
      </div>
    `;
  },

  async afterRender() {
    RestaurantInitiator.init();
    HeroInitiator.init({ heroContainer: document.querySelector('.hero__inner') });
  },
};

export default Home;
