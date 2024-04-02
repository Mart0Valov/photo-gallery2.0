import mongoose from "mongoose"

const PhotoSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    description: {
        type: mongoose.Schema.Types.String,
        required: true
    },
});

export const PhotoInfo = mongoose.model('PhotoInfo', PhotoSchema);