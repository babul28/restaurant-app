import createHeroMainPageTemplate from '../views/templates/template-hero';

const HeroInitiator = {
  async init({ heroContainer }) {
    this._heroContainer = heroContainer;

    await this._renderHero();
  },

  async _renderHero() {
    this._heroContainer.innerHTML = createHeroMainPageTemplate();

    this._changeHeroHeight();

    document.querySelector('.hero__action').addEventListener('click', (event) => {
      this._scrollToContent(event);
    });

    window.addEventListener('resize', () => {
      this._changeHeroHeight();
    });
  },

  _scrollToContent(event) {
    event.stopPropagation();
    event.preventDefault();

    const pos = event.target.getBoundingClientRect();

    window.scrollTo({
      top: pos.top * 1.45,
      behavior: 'smooth',
    });
  },

  _changeHeroHeight() {
    const headerSize = document.querySelector('.header').getBoundingClientRect().height;

    document.querySelector('.hero').style.height = `calc(100vh - ${headerSize}px)`;
  },
};

export default HeroInitiator;
