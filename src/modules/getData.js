const getData = () => fetch('https://ozon-js-default-rtdb.firebaseio.com/goods.json')
  .then(response => response.json());

export default getData;
