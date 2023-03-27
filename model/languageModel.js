import mongoose from "mongoose";
import validator from "validator";
const Schema = mongoose.Schema;

const languageModel = new Schema({
    level: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    }
})

const Language = mongoose.model('language', languageModel)

export default Language