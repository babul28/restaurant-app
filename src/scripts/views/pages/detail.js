const Detail = {
  async render() {
    return `
      <div class="container">
          <section class="content">
              <h2 id="recomendation" class="content__label">Detail Restaurant</h2>
              <div class="top-restaurants"></div>
          </section>
      </div>
      `;
  },

  async afterRender() {
    //
  },
};

export default Detail;
