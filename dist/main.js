/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://ozone/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nconst cart = () => {\r\n    const cartBtn = document.getElementById(\"cart\");\r\n    const cartCounter = cartBtn.querySelector(\".counter\");\r\n    const cartModal = document.querySelector(\".cart\");\r\n    const cartCloseBtn = cartModal.querySelector(\".cart-close\");\r\n    const goodsWrapper = document.querySelector(\".goods\");\r\n    const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n    const cartTotal = document.querySelector(\".cart-total > span\");\r\n    const cartSendBtn = document.querySelector(\".cart-confirm\");\r\n\r\n    const getCart = () => localStorage.getItem(\"cart\") ? JSON.parse(localStorage.getItem(\"cart\")) : [];\r\n    const setCart = (cart) => localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n    const clearCart = () => localStorage.removeItem(\"cart\");\r\n\r\n    const purchaseSum = (cart) => cart.reduce((sum, { price }) => sum + price, 0); // Сумма покупки\r\n\r\n    const numberItemsCart = (cart) => cart.length; // количество товаров в корзине\r\n\r\n    const openCart = () => {\r\n        const cart = getCart(); // получаем содержимое корзины (если она есть)\r\n\r\n        (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart); // отрисовываем содержимое корзины\r\n        cartTotal.textContent = purchaseSum(cart); // пересчитываем сумму\r\n\r\n        cartModal.style.display = \"flex\"; // показываем модальное окно корзины\r\n    };\r\n\r\n    const closeCart = () => {\r\n        cartModal.style.display = \"\"; // скрываем модальное окно корзины\r\n    };\r\n\r\n    cartBtn.addEventListener(\"click\", openCart);\r\n    cartCloseBtn.addEventListener(\"click\", closeCart);\r\n\r\n    // кнопка \"В корзину\"\r\n    goodsWrapper.addEventListener(\"click\", (e) => {\r\n        if (e.target.classList.contains(\"btn-primary\")) {\r\n            const card = e.target.closest(\".card\");\r\n            const key = +card.dataset.key; // ID добавляемого товара\r\n            const goods = JSON.parse(localStorage.getItem(\"goods\"));\r\n            const goodItem = goods.find(({ id }) => id === key);\r\n            const cart = getCart();\r\n\r\n            cart.push(goodItem); // добавляем товар в корзину\r\n            setCart(cart); // сохраняем обновленную корзину\r\n\r\n            cartCounter.textContent = numberItemsCart(cart); // увеличиваем счетчик количества товаров в корзине (на кнопке)\r\n        }\r\n    });\r\n\r\n    // кнопка \"Удалить\"\r\n    cartWrapper.addEventListener(\"click\", (e) => {\r\n        if (e.target.classList.contains(\"btn-primary\")) {\r\n            const cart = getCart();\r\n            const key = +e.target.closest(\".card\").dataset.key; // ID удаляемого товара\r\n            const index = cart.findIndex(({ id }) => id === key); // находим индекс удаляемого товара в корзине\r\n\r\n            cart.splice(index, 1); // удаляем элемент массива с индексом index\r\n            setCart(cart); // сохраняем обновленную корзину\r\n\r\n            (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart); // перерисовываем содержимое корзины\r\n            cartTotal.textContent = purchaseSum(cart); // и пересчитываем сумму\r\n            cartCounter.textContent = numberItemsCart(cart); // уменьшаем счетчик количества товаров в корзине (на кнопке)\r\n        }\r\n    });\r\n\r\n    // кнопка \"Оформить заказ\"\r\n    cartSendBtn.addEventListener(\"click\", (e) => {\r\n        const cart = getCart();\r\n\r\n        (0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n            clearCart(); // после отправки удаляем корзину\r\n            (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]); // перерисовываем корзину, передавая пустой массив товаров\r\n            cartTotal.textContent = 0; // обнуляем сумму\r\n            cartCounter.textContent = 0; // обнуляем счетчик количества товаров в корзине (на кнопке)\r\n        });\r\n    });\r\n\r\n    const cart = getCart();\r\n    cartCounter.textContent = numberItemsCart(cart); // получаем счетчик количества товаров в корзине при загрузке страницы\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://ozone/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const btnCatalog = document.querySelector(\".catalog-button > button\");\r\n    const catalogModal = document.querySelector(\".catalog\");\r\n    const catalogModalItem = document.querySelectorAll(\".catalog li\");\r\n    let isOpen = false;\r\n\r\n    btnCatalog.addEventListener(\"click\", () => {\r\n        isOpen = !isOpen;\r\n        catalogModal.style.display = isOpen ? \"block\" : \"\";\r\n    });\r\n\r\n    catalogModalItem.forEach((item) => {\r\n        item.addEventListener(\"click\", () => {\r\n            // фильтруем товары выбранной категории\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, item.textContent)));\r\n\r\n            // закрываем модельное окно после выбора категории\r\n            catalogModal.style.display = \"\";\r\n            isOpen = !isOpen;\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://ozone/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst filter = () => {\r\n    const minInput = document.getElementById(\"min\");\r\n    const maxInput = document.getElementById(\"max\");\r\n    const checkboxInput = document.getElementById(\"discount-checkbox\");\r\n    const checkboxSpan = document.querySelector(\".filter-check_checkmark\");\r\n\r\n    minInput.addEventListener(\"input\", () => {\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) =>\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n                (0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(\r\n                    (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked),\r\n                    minInput.value, maxInput.value\r\n                )\r\n            )\r\n        );\r\n    });\r\n\r\n    maxInput.addEventListener(\"input\", () => {\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) =>\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n                (0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(\r\n                    (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked),\r\n                    minInput.value, maxInput.value\r\n                )\r\n            )\r\n        );\r\n    });\r\n\r\n    checkboxInput.addEventListener(\"change\", () => {\r\n        if (checkboxInput.checked) {\r\n            checkboxSpan.classList.add(\"checked\");\r\n        } else {\r\n            checkboxSpan.classList.remove(\"checked\");\r\n        }\r\n\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) =>\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n                (0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(\r\n                    (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked),\r\n                    minInput.value, maxInput.value\r\n                )\r\n            )\r\n        );\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack://ozone/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"hotSaleFilter\": () => (/* binding */ hotSaleFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n    return goods.filter(({ title }) =>\r\n        title.toLowerCase().includes(value.toLowerCase())\r\n    );\r\n};\r\n\r\nconst categoryFilter = (goods, value) => {\r\n    return goods.filter(({ category }) => category === value);\r\n};\r\n\r\nconst priceFilter = (goods, min, max) => {\r\n    return goods.filter((good) => {\r\n        if (min === \"\" && max === \"\") {\r\n            return good;\r\n        } else if (min !== \"\" && max !== \"\") {\r\n            return good.price >= +min && good.price <= +max;\r\n        } else if (min !== \"\" && max === \"\") {\r\n            return good.price >= +min;\r\n        } else if (min === \"\" && max !== \"\") {\r\n            return good.price <= +max;\r\n        }\r\n    });\r\n};\r\n\r\nconst hotSaleFilter = (goods, value) => {\r\n    return goods.filter((good) => {\r\n        if (value) {\r\n            return good.sale === true;\r\n        } else {\r\n            return good;\r\n        }\r\n    });\r\n};\n\n//# sourceURL=webpack://ozone/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n    // const URL = \"http://localhost:3000/goods\";\r\n    const URL = `https://ozone-10720-default-rtdb.europe-west1.firebasedatabase.app/goods.json?`;\r\n\r\n    return fetch(URL).then((res) => {\r\n        return res.json();\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozone/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://ozone/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\r\n    // const URL = \"http://localhost:3000/goods\";\r\n    const URL = \"https://jsonplaceholder.typicode.com/posts\";\r\n\r\n    return fetch(URL, {\r\n        method: \"POST\",\r\n        body: JSON.stringify(cart),\r\n        headers: {\r\n            \"Content-type\": \"application/json; charset=UTF-8\",\r\n        },\r\n    }).then((response) => response.json());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://ozone/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n    const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n\r\n    cartWrapper.innerHTML = \"\"; // очищаем предыдущее содержимое\r\n\r\n    // если корзина пустая\r\n    if (goods.length === 0) {\r\n        cartWrapper.insertAdjacentHTML(\r\n            \"beforeend\", `\r\n      <div id=\"cart-empty\">\r\n        Ваша корзина пока пуста\r\n      </div>`\r\n        );\r\n    } else {\r\n        goods.forEach(({ id, title, img, price, sale }) => {\r\n            cartWrapper.insertAdjacentHTML(\r\n                \"beforeend\",\r\n                `\r\n          <div class=\"card\" data-key=\"${id}\">\r\n            ${sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : \"\"}\r\n            <div class=\"card-img-wrapper\">\r\n              <span class=\"card-img-top\" style=\"background-image: url('${img}')\"></span>\r\n            </div>\r\n            <div class=\"card-body justify-content-between\">\r\n              <div class=\"card-price\">${price} ₴</div>\r\n              <h5 class=\"card-title\">${title}</h5>\r\n              <button type=\"button\" class=\"btn btn-primary\">Удалить</button>\r\n            </div>\r\n          </div>\r\n        `\r\n            );\r\n        });\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://ozone/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n    const goodsWrapper = document.querySelector(\".goods\");\r\n    goodsWrapper.innerHTML = \"\"; // очищаем предыдущее содержимое\r\n\r\n    // динамически формируем вёрстку\r\n    goods.forEach(({ id, title, img, price, sale }) => {\r\n        goodsWrapper.insertAdjacentHTML(\r\n            \"beforeend\",\r\n            `\r\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n          <div class=\"card\" data-key=\"${id}\">\r\n          ${sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : \"\"}\r\n          <div class=\"card-img-wrapper\">\r\n            <span class=\"card-img-top\" style=\"background-image: url('${img}')\"></span>\r\n          </div>\r\n          <div class=\"card-body justify-content-between\">\r\n            <div class=\"card-price\">${price} ₴</div>\r\n              <h5 class=\"card-title\">${title}</h5>\r\n              <button type=\"button\" class=\"btn btn-primary\">В корзину</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      `\r\n        );\r\n    });\r\n\r\n    // если массив товаров не пустой, то сохраняем его в Local Storage\r\n    if (goods.length) {\r\n        localStorage.setItem(\"goods\", JSON.stringify(goods));\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://ozone/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n  const searchInput = document.querySelector('.search-wrapper_input')\r\n\r\n  searchInput.addEventListener('input', (event) => {\r\n    const value = event.target.value;\r\n\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\r\n    });\r\n  });\r\n\r\n  // const searchBtn = document.querySelector(\".search .search-btn button\");\r\n  \r\n  // searchBtn.addEventListener(\"click\", () => {\r\n  //   let searchValue = document.querySelector(\".search-wrapper_input\").value;\r\n  //   console.log(`input.value = ${searchValue}`);\r\n  // })\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://ozone/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;