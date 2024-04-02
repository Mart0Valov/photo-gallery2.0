import express, { application, response } from 'express';

const PORT = 3000;
const app = express();

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