const axios = require('axios');
export const GetQuotes = () => {
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
        .then(function (response: any) {
            console.log(response.data);
            //return response.data;
        })
        .catch(function (error: any) {
            console.error(error);
            // return error;
        });
}
