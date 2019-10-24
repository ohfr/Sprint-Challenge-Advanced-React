import axios from 'axios';

export const fetchData = (url) => {
    let data = [];
    axios.get(`${url}`)
    .then(res => {
        data = res.data
    })
    .catch(err => console.log(err))

    return data;
}