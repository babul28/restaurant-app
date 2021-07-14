import createSpinnerTemplate from '../views/templates/spinner-template';

const SpinnerInitiator = {
  async init({ spinerContainer }) {
    this._spinerContainer = spinerContainer;

    this._renderSpiner();
  },

  async _renderSpiner() {
    this._spinerContainer.insertAdjacentHTML('beforeend', createSpinnerTemplate());
  },

  async remove() {
    document.querySelector('.spinner-container').remove();
  },
};

export default SpinnerInitiator;
