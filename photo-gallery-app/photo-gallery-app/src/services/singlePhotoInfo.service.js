const singlePhotoInfo = async photoId => {
    try {
        const request = await fetch(`http://localhost:3000/api/photo-info/${photoId}`);
        if (!request.ok) throw new Error('Something is wrong');
        const data = await request.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default singlePhotoInfo;