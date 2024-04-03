import { useEffect, useState } from 'react';
import PhotoElement from '../components/ImageElement/PhotoElement';

const HomeView = () => {
    // get all photos info from api
    const [photosInfo, setPhotosInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/photos-info')
            .then(reesponse => reesponse.json())
            .then(data => setPhotosInfo(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div className='home-view'>
                {photosInfo.length !== 0 ? photosInfo.map(photoInfo => <PhotoElement key={photoInfo._id} photoId={photoInfo._id} />) : <p>Currently there are no photos</p>}
            </div>
        </div>
    )
};

export default HomeView;