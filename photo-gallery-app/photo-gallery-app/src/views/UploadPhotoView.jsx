import { useForm } from 'react-hook-form';
import uploadPhotoInfo from '../services/uploadPhotoInfo.service.js';
import photoUpload from '../services/photoUpload.service.js';

const UploadPhotoView = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        try {
            // sending image info
            const photoInfoId = await uploadPhotoInfo(data.title, data.description);
            // sending image
            await photoUpload(data.file[0], photoInfoId);
        } catch (error) {
            console.log(error);
        } finally {
            reset();
        }
    };

    return (
        <div>
            <h1>Upload a photo</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input type="text" {...register('title', { required: 'Title is required!' })} />
                {errors.title && <p>{errors.title.message}</p>}

                <input type="text" {...register('description', { required: 'Description is required!' })} />
                {errors.description && <p>{errors.description.message}</p>}

                <input type="file" {...register('file', { required: 'File required' })} />
                {errors.file && <p>{errors.file.message}</p>}

                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadPhotoView;