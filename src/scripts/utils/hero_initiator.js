const HeroInitiator = {
  init() {
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
