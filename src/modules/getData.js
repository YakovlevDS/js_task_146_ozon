import axios from "axios";
// const getData = () => fetch(URL).then(res => res.json());
const getData = () => axios(URL);
export default getData