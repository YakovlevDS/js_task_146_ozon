import axios from "axios";

const postData = cart =>
    // const URL = "http://localhost:3000/goods";
    const URL = "https://jsonplaceholder.typicode.com/posts";

//     return fetch(URL, {
//         method: "POST",
//         body: JSON.stringify(cart),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8",
//         },
//     }).then((response) => response.json()).catch(err => console.log(err);
// };
axios.post(URL, {
        body: JSON.stringify(cart),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    }).catch(err => console.log(err)

        export default postData;