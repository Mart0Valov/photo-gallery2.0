import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import photoUpload from '../services/photoUpload.service.js';
import singlePhotoInfo from '../services/singlePhotoInfo.service.js';
import updatePhoto from '../services/updatePhoto.js';

const EditPhotoView = () => {
    const photoId = useParams().id;
    const navigate = useNavigate();
    // const [photoData, setPhotoData] = useState({
    //     title: 'gell',
    //     description: 'hell'
    // });

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    useEffect(() => {
        singlePhotoInfo(photoId).then(data => reset({ ...data }));
    }, [photoId]);

    const onSubmit = async data => {

        try {
            await updatePhoto(photoId, data.title, data.description);
            if (data.file[0]) {
                console.log('Here');
                await photoUpload(data.file[0], photoId);
            }
        } catch (error) {
            console.log(error)
        } finally {
            navigate(-1);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('title', { required: 'Title is required!' })} />
            {errors.title && <p>{errors.title.message}</p>}

            <input type="text" {...register('description', { required: 'Description is required!' })} />
            {errors.description && <p>{errors.description.message}</p>}

            <input type="file" {...register('file')} />
            {errors.file && <p>{errors.file.message}</p>}

            <button type="submit">Update</button>
        </form>
    );
};

export default EditPhotoView;