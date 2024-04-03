const photoUpload = async (file, photoInfoId) => {
    // function that sends the photo file to the api and returns api's response
    const fileData = new FormData();
    fileData.append('file', file);

    const optionsPhoto = {
        method: 'POST',
        body: fileData
    };

    try {
        const requestPhoto = await fetch(`http://localhost:3000/api/upload-image/${photoInfoId}`, optionsPhoto);
        if (!requestPhoto.ok) throw new Error('Somtheing went wrong');
        const responsePhoto = await requestPhoto.json();
        return responsePhoto;
    } catch (error) {
        throw new Error(error.message)
    }
};

export default photoUpload;