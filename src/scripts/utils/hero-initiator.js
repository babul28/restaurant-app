import createHeroMainPageTemplate from '../views/templates/template-hero';

const HeroInitiator = {
  async init({ heroContainer }) {
    this._heroContainer = heroContainer;

    this._renderHero();
  },

  async _renderHero() {
    this._heroContainer.innerHTML = createHeroMainPageTemplate();

    this._responsiveHeroImage();
    this._changeHeroHeight();

    document.querySelector('.hero__action').addEventListener('click', (event) => {
      this._scrollToContent(event);
    });

    window.addEventListener('resize', () => {
      this._changeHeroHeight();
      this._responsiveHeroImage();
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

  _responsiveHeroImage() {
    const imageSize = document.body.clientWidth < 800 ? 'small' : 'large';
    document.querySelector('.hero').style.backgroundImage = `url('/images/heros/hero-image-${imageSize}.jpg')`;
  },

  _changeHeroHeight() {
    const headerEl = document.querySelector('.header');
    if (headerEl) {
      const headerSize = headerEl.getBoundingClientRect().height;

      document.querySelector('.hero').style.height = `calc(100vh - ${headerSize}px)`;
    }
  },
};

export default HeroInitiator;
