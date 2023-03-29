import mongoose from "mongoose";
import validator from "validator";
const Schema = mongoose.Schema;

const interestModel = new Schema({
    interestType: {
        type: String,
        required: true
    },
    interestTitle: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    }
}) 

const Interest = mongoose.model('interest', interestModel);

export default Interest