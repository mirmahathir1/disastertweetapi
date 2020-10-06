let axios = require('axios');
axios.post('http://localhost:8080/disaster', {
    mytext: 'It is raining too much',
})
    .then((response) => {
        console.log(response.data);
    }, (error) => {
        //console.log(error);
    });