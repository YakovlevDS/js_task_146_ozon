import getData from './getData';

const second = () => {
  getData().then(data => console.log(data));
};

export default second;
