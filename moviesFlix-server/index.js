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

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        const behindTheScenes = moviesFlixDb.collection('behindTheScenes');
        const popularMovie = moviesFlixDb.collection('popularMovie');
        const popularShow = moviesFlixDb.collection('popularShow');
        const trailerVideo = moviesFlixDb.collection('trailerVideo');
        const movies = moviesFlixDb.collection('movies');
        const watchingLate = moviesFlixDb.collection('watchingLate');
        const user = moviesFlixDb.collection('user');
        const careerOpportunities = moviesFlixDb.collection(
            'careerOpportunities'
        );
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
            const cursorBehindTheScenes = behindTheScenes.find();
            const cursorCareer = careerOpportunities.find();
            const cursorPopularMovies = popularMovie.find();
            const cursorTrailerVideo = trailerVideo.find();
            const cursorShow = popularShow.find();

            const resultEntertainment = await cursorEntertain.toArray();
            const resultBehindTheScenes = await cursorBehindTheScenes.toArray();
            const resultCareer = await cursorCareer.toArray();
            const resultPopularMovies = await cursorPopularMovies.toArray();
            const resultTrailerVideo = await cursorTrailerVideo.toArray();
            const resultShow = await cursorShow.toArray();
            response.json({
                resultEntertainment,
                resultBehindTheScenes,
                resultCareer,
                resultPopularMovies,
                resultShow,
                resultTrailerVideo,
            });
        });
        app.get('/movies', async (request, response) => {
            const cursorMovies = movies.find();

            const resultMovies = await cursorMovies.toArray();
            response.send(resultMovies);
        });

        app.get('/error', async (request, response) => {
            const errorPageCursor = errorPage.find();

            const result = await errorPageCursor.toArray();
            response.send(result);
        });
        app.get('/watching-late', async (request, response) => {
            const cursorWatchingLate = watchingLate.find();

            const result = await cursorWatchingLate.toArray();
            response.send(result);
        });
        app.get('/top-collection-movies', async (request, response) => {
            const topCollectionMovies = homeHeroBanar.find();

            const result = await topCollectionMovies.toArray();
            response.send(result);
        });
        app.get('/', async (request, response) => {
            response.send('Welcome to my Server...');
        });

        // single movie
        app.get('/movies/:id', async (request, response) => {
            const id = request.params.id;
            const query = {
                _id: new ObjectId(id),
            };
            resultMovies = await movies.findOne(query);

            response.send(resultMovies);
        });

        // data post
        app.post('/data', async (request, response) => {
            const moviesFlix = request.body;

            const result = await icon.insertOne(moviesFlix);
            response.send(result);
        });

        app.post('/watching-late', async (request, response) => {
            const moviesFlix = request.body;

            const result = await watchingLate.insertOne(moviesFlix);
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
        app.post('/behindTheScenes', async (request, response) => {
            const moviesFlix = request.body;

            const result = await behindTheScenes.insertOne(moviesFlix);
            response.send(result);
        });
        app.post('/career-opportunities', async (request, response) => {
            const moviesFlix = request.body;

            const result = await careerOpportunities.insertOne(moviesFlix);
            response.send(result);
        });
        app.post('/popular-show', async (request, response) => {
            const moviesFlix = request.body;

            const result = await popularShow.insertOne(moviesFlix);
            response.send(result);
        });
        app.post('/videos', async (request, response) => {
            const moviesFlix = request.body;

            const result = await trailerVideo.insertOne(moviesFlix);
            response.send(result);
        });
        app.post('/movies', async (request, response) => {
            const moviesFlix = request.body;

            const result = await movies.insertOne(moviesFlix);
            response.send(result);
        });
        app.post('/user', async (request, response) => {
            const moviesFlix = request.body;

            const result = await user.insertOne(moviesFlix);
            response.send(result);
        });
        app.patch('/user', async (request, response) => {
            const moviesFlix = request.body;
            const filter = {
                email: moviesFlix.email,
            };

            const updatData = {
                $set: {
                    lastLoggedAt: user.lastLoggedAt,
                },
            };

            const result = await user.updateOne(filter, updatData);
            response.send(result);
        });

        app.delete('/watching-late/:id', async (request, response) => {
            const id = request.params.id;
            const query = {
                wlId: id,
            };

            const result = await watchingLate.deleteOne(query);
            response.send(result);
        });
    } finally {
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log('Server is running on Port' + port);
});
