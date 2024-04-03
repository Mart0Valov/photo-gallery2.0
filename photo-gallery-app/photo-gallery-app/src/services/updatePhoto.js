const updatePhoto = async (photoId, title, description) => {
    const options = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description })
    };
    try {
        const request = await fetch(`http://localhost:3000/api/photo/${photoId}`, options);
        if (!request.ok) throw new Error(request.msg);
        const data = request.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default updatePhoto;