const Favorite = {
  async render() {
    return `
      <div class="container">
          <section class="content">
              <h2 id="recomendation" class="content__label">Favorite Restaurants</h2>
              <div class="favorite-restaurants"></div>
          </section>
      </div>
      `;
  },

  async afterRender() {
    //
  },
};

export default Favorite;
