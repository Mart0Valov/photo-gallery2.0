import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import { PhotoInfo } from './dataBaseSchemas/photoInfoSchema.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
const app = express();
// setting destination and what the file name for the photo must be
const storage = multer.diskStorage({
    destination: 'photos/',
    filename: (request, file, cb) => {
        // it takes the id of the photo info stored in the database
        // and renames the file with it
        cb(null, request.params.id);
    }
});

const upload = multer({ storage });

// datababse connection
mongoose.connect('mongodb://localhost/photo-gallery')
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error(err));

// middleware
app.use(express.json());
app.use(cors());
const photosDirectory = path.join(__dirname, '../photos');

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
    // sending response to the client that the file is saved successfully.
    return response.status(200).send({ msg: 'Photo info uploaded successfully' });
});


// get all photos info endpoint
app.get('/api/photos-info', async (request, response) => {
    const photosInfo = await PhotoInfo.find();
    return response.status(200).send(photosInfo);
});

// get photo by id endpoint
app.get('/api/photo/:id', async (request, response) => {
    const { params: { id } } = request;
    const filePath = path.join(photosDirectory, id);
    return response.sendFile(filePath);
});

// get photo info bt id endpoint
app.get('/api/photo-info/:id', (request, response) => {

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