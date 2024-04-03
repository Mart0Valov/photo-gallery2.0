const uploadPhotoInfo = async (title, description) => {
    // function to send title and description and returns id for that information
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description })
    };
    try {
        const request = await fetch('http://localhost:3000/api/upload-image-info', options);
        if (!request.ok) console.log(request);
        const response = await request.json();
        return response.photoId;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default uploadPhotoInfo;