const deletePhoto = async photoId => {
    const options = {
        method: 'DELETE'
    }

    try {
        const request = await fetch(`http://localhost:3000/api/photo/${photoId}`, options);
        if (!request.ok) throw new Error(request.msg);
        const response = await request.json();
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default deletePhoto;