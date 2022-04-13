const renderGoods = (goods) => {
    const goodsWrapper = document.querySelector(".goods");
    goodsWrapper.innerHTML = ""; // очищаем предыдущее содержимое

    // динамически формируем вёрстку
    goods.forEach(({ id, title, img, price, sale }) => {
        goodsWrapper.insertAdjacentHTML(
            "beforeend",
            `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card" data-key="${id}">
          ${sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ""}
          <div class="card-img-wrapper">
            <span class="card-img-top" style="background-image: url('${img}')"></span>
          </div>
          <div class="card-body justify-content-between">
            <div class="card-price">${price} ₴</div>
              <h5 class="card-title">${title}</h5>
              <button type="button" class="btn btn-primary">В корзину</button>
            </div>
          </div>
        </div>
      `
        );
    });

    // если массив товаров не пустой, то сохраняем его в Local Storage
    if (goods.length) {
        localStorage.setItem("goods", JSON.stringify(goods));
    }
};

export default renderGoods;