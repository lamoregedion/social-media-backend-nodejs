import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        requied: true,
    },
    description: {
        type: String,
        requied: true
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
});

export default mongoose.model("Blog", blogSchema);