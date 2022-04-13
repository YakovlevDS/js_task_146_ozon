import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from './filters';

const catalog = () => {
    const btnCatalog = document.querySelector(".catalog-button > button");
    const catalogModal = document.querySelector(".catalog");
    const catalogModalItem = document.querySelectorAll(".catalog li");
    let isOpen = false;

    btnCatalog.addEventListener("click", () => {
        isOpen = !isOpen;
        catalogModal.style.display = isOpen ? "block" : "";
    });

    catalogModalItem.forEach((item) => {
        item.addEventListener("click", () => {
            // фильтруем товары выбранной категории
            getData().then((data) => renderGoods(categoryFilter(data, item.textContent)));

            // закрываем модельное окно после выбора категории
            catalogModal.style.display = "";
            isOpen = !isOpen;
        });
    });
};

export default catalog;