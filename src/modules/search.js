import getData from "./getData"
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";

const search = () => {
  const searchInput = document.querySelector('.search-wrapper_input')

  searchInput.addEventListener('input', (event) => {
    const value = event.target.value;

    getData().then((data) => {
      renderGoods(searchFilter(data, value));
    });
  });

  // const searchBtn = document.querySelector(".search .search-btn button");
  
  // searchBtn.addEventListener("click", () => {
  //   let searchValue = document.querySelector(".search-wrapper_input").value;
  //   console.log(`input.value = ${searchValue}`);
  // })
};

export default search;