"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuotes = void 0;
const axios = require('axios');
const GetQuotes = () => {
    const options = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        //params: { category: 'all', count: '2'},
        // headers: {
        //     'X-RapidAPI-Key': 'your-rapidapi-key',
        //     'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
        // },
    };
    axios
        .request(options)
        .then(function (response) {
        console.log(response.data);
        //return response.data;
    })
        .catch(function (error) {
        console.error(error);
        // return error;
    });
};
exports.GetQuotes = GetQuotes;
