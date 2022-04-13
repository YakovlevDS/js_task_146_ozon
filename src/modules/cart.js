import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {
    const cartBtn = document.getElementById("cart");
    const cartCounter = cartBtn.querySelector(".counter");
    const cartModal = document.querySelector(".cart");
    const cartCloseBtn = cartModal.querySelector(".cart-close");
    const goodsWrapper = document.querySelector(".goods");
    const cartWrapper = document.querySelector(".cart-wrapper");
    const cartTotal = document.querySelector(".cart-total > span");
    const cartSendBtn = document.querySelector(".cart-confirm");

    const getCart = () => localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    const setCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));
    const clearCart = () => localStorage.removeItem("cart");

    const purchaseSum = (cart) => cart.reduce((sum, { price }) => sum + price, 0); // Сумма покупки

    const numberItemsCart = (cart) => cart.length; // количество товаров в корзине

    const openCart = () => {
        const cart = getCart(); // получаем содержимое корзины (если она есть)

        renderCart(cart); // отрисовываем содержимое корзины
        cartTotal.textContent = purchaseSum(cart); // пересчитываем сумму

        cartModal.style.display = "flex"; // показываем модальное окно корзины
    };

    const closeCart = () => {
        cartModal.style.display = ""; // скрываем модальное окно корзины
    };

    cartBtn.addEventListener("click", openCart);
    cartCloseBtn.addEventListener("click", closeCart);

    // кнопка "В корзину"
    goodsWrapper.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-primary")) {
            const card = e.target.closest(".card");
            const key = +card.dataset.key; // ID добавляемого товара
            const goods = JSON.parse(localStorage.getItem("goods"));
            const goodItem = goods.find(({ id }) => id === key);
            const cart = getCart();

            cart.push(goodItem); // добавляем товар в корзину
            setCart(cart); // сохраняем обновленную корзину

            cartCounter.textContent = numberItemsCart(cart); // увеличиваем счетчик количества товаров в корзине (на кнопке)
        }
    });

    // кнопка "Удалить"
    cartWrapper.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-primary")) {
            const cart = getCart();
            const key = +e.target.closest(".card").dataset.key; // ID удаляемого товара
            const index = cart.findIndex(({ id }) => id === key); // находим индекс удаляемого товара в корзине

            cart.splice(index, 1); // удаляем элемент массива с индексом index
            setCart(cart); // сохраняем обновленную корзину

            renderCart(cart); // перерисовываем содержимое корзины
            cartTotal.textContent = purchaseSum(cart); // и пересчитываем сумму
            cartCounter.textContent = numberItemsCart(cart); // уменьшаем счетчик количества товаров в корзине (на кнопке)
        }
    });

    // кнопка "Оформить заказ"
    cartSendBtn.addEventListener("click", (e) => {
        const cart = getCart();

        postData(cart).then(() => {
            clearCart(); // после отправки удаляем корзину
            renderCart([]); // перерисовываем корзину, передавая пустой массив товаров
            cartTotal.textContent = 0; // обнуляем сумму
            cartCounter.textContent = 0; // обнуляем счетчик количества товаров в корзине (на кнопке)
        });
    });

    const cart = getCart();
    cartCounter.textContent = numberItemsCart(cart); // получаем счетчик количества товаров в корзине при загрузке страницы
};

export default cart;