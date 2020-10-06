const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

let PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/disaster', (req, res) => {
    console.log('Got body:', req.body.mytext);
    // res.status(200).send({prediction: "1"});

    axios.post(process.env.ML_API+"/ml", {
        mytext: req.body.mytext,
    }).then((response) => {
        console.log(response.data);
        res.status(200).send({prediction: response.data.name});
        }, (error) => {
            console.log(error);
            res.sendStatus(300)
        });

});

app.listen(PORT, () => console.log(`Started server at http://localhost:`+PORT));