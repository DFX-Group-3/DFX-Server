import mongoose from "mongoose";
import validator from "validator";


const Schema = mongoose.Schema();

const experienceModel = new Schema({
    imageURL: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
})

const Experience = mongoose.model('experience', experienceModel);

export default Experience