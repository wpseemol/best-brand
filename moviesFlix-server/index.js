//server is for MoviesFlix site.
//come from express.
const express = require('express');
//come from cors.
const cors = require('cors');

const app = express();

//come from dotenv.
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.send('this is testing server');
});

app.listen(port, () => {
    console.log('Server is running on Port' + port);
});
