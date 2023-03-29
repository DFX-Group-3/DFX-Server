import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const profileModel = new Schema({
    profileImageURL: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    linkedInURL: {
        type: String,
        required: true
    },
    pronouns: {
        type: String,
        required: true
    },
    githubURL: {
        type: String,
        required: true
    },
    profileHeadline: {
        type: String,
        required: true
    },
    profileVideoURL: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})







const Profile = mongoose.model('profile', profileModel)

export default Profile
