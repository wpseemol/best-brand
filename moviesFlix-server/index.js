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
        const icon = moviesFlixDb.collection('icon');
        const navBar = moviesFlixDb.collection('navBar');
        const errorPage = moviesFlixDb.collection('errorPage');
        const homeHeroBanar = moviesFlixDb.collection('homeHeroBanar');
        const entertainment = moviesFlixDb.collection('entertainment');
        // data get
        app.get('/header', async (request, response) => {
            const cursor = icon.find();
            const cursorNav = navBar.find();

            const resultIcon = await cursor.toArray();
            const resultNav = await cursorNav.toArray();
            response.json({ resultIcon, resultNav });
        });
        app.get('/home', async (request, response) => {
            const cursorEntertain = entertainment.find();

            const resultEntertainment = await cursorEntertain.toArray();
            response.json({ resultEntertainment });
        });
        app.get('/error', async (request, response) => {
            const errorPageCursor = errorPage.find();

            const result = await errorPageCursor.toArray();
            response.send(result);
        });
        app.get('/top-collection-movies', async (request, response) => {
            const topCollectionMovies = homeHeroBanar.find();

            const result = await topCollectionMovies.toArray();
            response.send(result);
        });

        // data post
        app.post('/data', async (request, response) => {
            const moviesFlix = request.body;

            const result = await icon.insertOne(moviesFlix);
            response.send(result);
        });
        app.post('/navbar', async (request, response) => {
            const moviesFlix = request.body;

            const result = await navBar.insertOne(moviesFlix);
            response.send(result);
        });

        app.post('/top-collection', async (request, response) => {
            const moviesFlix = request.body;

            const result = await homeHeroBanar.insertOne(moviesFlix);
            response.send(result);
        });
        app.post('/entertainment', async (request, response) => {
            const moviesFlix = request.body;

            const result = await entertainment.insertOne(moviesFlix);
            response.send(result);
        });
    } finally {
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log('Server is running on Port' + port);
});
