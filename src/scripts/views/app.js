import DrawerInitiator from '../utils/drawer_initiator';
import HeroInitiator from '../utils/hero_initiator';
import RestaurantInitiator from '../utils/restaurant_initiator';

class App {
  constructor({
    button, drawer, hero, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content,
    });

    HeroInitiator.init();
  }

  async renderPage() {
    RestaurantInitiator.init();
  }
}

export default App;
