const renderCart = (goods) => {
    const cartWrapper = document.querySelector(".cart-wrapper");

    cartWrapper.innerHTML = ""; // очищаем предыдущее содержимое

    // если корзина пустая
    if (goods.length === 0) {
        cartWrapper.insertAdjacentHTML(
            "beforeend", `
      <div id="cart-empty">
        Ваша корзина пока пуста
      </div>`
        );
    } else {
        goods.forEach(({ id, title, img, price, sale }) => {
            cartWrapper.insertAdjacentHTML(
                "beforeend",
                `
          <div class="card" data-key="${id}">
            ${sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ""}
            <div class="card-img-wrapper">
              <span class="card-img-top" style="background-image: url('${img}')"></span>
            </div>
            <div class="card-body justify-content-between">
              <div class="card-price">${price} ₴</div>
              <h5 class="card-title">${title}</h5>
              <button type="button" class="btn btn-primary">Удалить</button>
            </div>
          </div>
        `
            );
        });
    }
};

export default renderCart;