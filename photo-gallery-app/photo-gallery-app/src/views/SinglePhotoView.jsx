import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import deletePhoto from '../services/deletePhoto.service.js';
import singlePhotoInfo from '../services/singlePhotoInfo.service.js';


const SinglePhotoView = () => {
    const photoId = useParams().id;
    const navigate = useNavigate();
    const [photoInfo, setPhotoInfo] = useState({});

    const onDelete = async () => {
        try {
            await deletePhoto(photoId);
        } catch (error) {
            console.log(error.message);
        } finally {
            navigate('/');
        }
    }

    useEffect(() => {
        singlePhotoInfo(photoId).then(data => setPhotoInfo({ ...data }));
    }, [photoId]);


    return (
        <>
            {
                photoInfo &&
                <div>
                    <h1>{photoInfo.title}</h1>
                    <p>{photoInfo.description}</p>
                    <img src={`http://localhost:3000/api/photo/${photoId}`} />
                    <button onClick={() => navigate(`/edit/${photoId}`)}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </div>
            }
        </>
    );
};

export default SinglePhotoView;