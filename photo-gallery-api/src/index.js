import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import { PhotoInfo } from './dataBaseSchemas/photoInfoSchema.js';

const PORT = 3000;
const app = express();
const storage = multer.diskStorage({
    destination: 'photos/',
    filename: (request, file, cb) => {
        cb(null, request.params.id);
    }
});

const upload = multer({ storage });

// datababse connection
mongoose.connect('mongodb://localhost/photo-gallery')
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error(err));

app.use(express.json());
app.use(cors());

// upload image info
app.post('/api/upload-image-info', async (request, response) => {
    const { body } = request;
    const newPhotoInfo = new PhotoInfo(body);
    try {
        const savePhotoInfo = await newPhotoInfo.save();
        return response.status(200).send({ msg: 'Photo info uploaded successfully', photoId: savePhotoInfo._id });
    } catch (error) {
        return response.status(400).send('Bad request. Check your paramters!');
    }
});

// upload photo endpoint
app.post('/api/upload-image/:id', upload.single('file'), (request, response) => {
    return response.status(200).send({ msg: 'Photo info uploaded successfully' });
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