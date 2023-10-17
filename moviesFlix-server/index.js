//server is for MoviesFlix site.
//come from express.
const express = require('express');
//come from cors.
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
//come from dotenv.
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.s0x7bvc.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const moviesFlixDb = client.db('moviesFlix');

        app.get('/', (request, response) => {
            response.send('this is testing server');
        });

        app.post('/data', async (request, response) => {
            const moviesFlix = request.body;
            const icon = moviesFlixDb.collection('icon');
            const result = await icon.insertOne(moviesFlix);
            response.send(result);
        });
    } finally {
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log('Server is running on Port' + port);
});
