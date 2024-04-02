import express from 'express';
import mongoose from 'mongoose';

const PORT = 3000;
const app = express();

// datababse connection
mongoose.connect('mongodb://localhost/photo-gallery')
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error(err));

app.use(express.json());

// upload photo endpoint
app.post('/api/upload', (request, response) => {

});

// get all photos endpoint
app.get('/api/photos', (request, response) => {

});

// get photo bt id endpoint
app.get('/api/photo/:id', (request, response) => {

});

// update photo endpint
app.put('/api/photo/:id', (request, response) => {

});

// delete photo endpoint
app.delete('/api/photo/:id', (request, response) => {

});

app.listen(PORT, () => {
    console.log(`Api is listening on port ${PORT}`);
});