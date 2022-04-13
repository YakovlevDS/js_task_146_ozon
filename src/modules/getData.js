const getData = () => {
    // const URL = "http://localhost:3000/goods";
    const URL = `https://ozone-10720-default-rtdb.europe-west1.firebasedatabase.app/goods.json?`;

    return fetch(URL).then((res) => {
        return res.json();
    });
};

export default getData;