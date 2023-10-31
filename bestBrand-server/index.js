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

        const bestBrand = client.db('bestBrand');

        const products = bestBrand.collection('products');

        // app.get('/movies', async (request, response) => {
        //     const cursorMovies = movies.find();

        //     const resultMovies = await cursorMovies.toArray();
        //     response.send(resultMovies);
        // });

        // single movie
        // app.get('/movies/:id', async (request, response) => {
        //     const id = request.params.id;
        //     const query = {
        //         _id: new ObjectId(id),
        //     };
        //     resultMovies = await movies.findOne(query);

        //     response.send(resultMovies);
        // });

        //single ite put method
        // app.put('/movies/:id', async (request, response) => {
        //     const id = request.params.id;
        //     const query = {
        //         _id: new ObjectId(id),
        //     };

        //     const options = {
        //         upsert: true,
        //     };

        //     const { filteredObject } = request.body;

        //     const {
        //         bnarImgUrl,
        //         name,
        //         picUrl,
        //         comingSoon,
        //         releaseYear,
        //         type,
        //         description,
        //         storyBy,
        //         producedBy,
        //         executiveProducers,
        //         cast,
        //     } = filteredObject;

        //     const updateDoc = {
        //         $set: {
        //             bnarImgUrl,
        //             name,
        //             picUrl,
        //             comingSoon,
        //             releaseYear,
        //             type,
        //             description,
        //             storyBy,
        //             producedBy,
        //             executiveProducers,
        //             cast,
        //         },
        //     };

        //     const result = await movies.updateOne(query, updateDoc, options);
        //     response.send(result);
        // });

        // data post
        app.post('/products', async (request, response) => {
            const product = request.body;
            const result = await products.insertOne(product);
            response.send(result);
        });

        // data deleted

        // app.delete('/movies/:id', async (request, response) => {
        //     const id = request.params.id;
        //     const query = {
        //         _id: new ObjectId(id),
        //     };

        //     const result = await movies.deleteOne(query);
        //     response.send(result);
        // });
    } finally {
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log('Server is running on Port' + port);
});