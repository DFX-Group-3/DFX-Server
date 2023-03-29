import mongoose from "mongoose";
import validator from "validator";
const Schema = mongoose.Schema;

const qualificationModel = new Schema({
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

const Qualification = mongoose.model('qualification', qualificationModel);

export default Qualification