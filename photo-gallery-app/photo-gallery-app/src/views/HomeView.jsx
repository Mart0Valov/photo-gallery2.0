import { useEffect, useState } from 'react';

const HomeView = () => {
    // get all photos info from api
    const [photosInfo, setPhotosInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/photos-info')
            .then(reesponse => reesponse.json())
            .then(data => setPhotosInfo(data))
            .catch(error => console.log(error));
    }, []);
    // console.log(photosInfo);
    return (
        <div>
            <p>List of all photos</p>
            {photosInfo.length !== 0 ? photosInfo.map(photoInfo => <p key={photoInfo._id}>{photoInfo.title}</p>) : <p>Currently there are no photos</p>}
        </div>
    )
};

export default HomeView;