import mongoose from "mongoose";
import validator from "validator";
const Schema = mongoose.Schema;

const qualificationModel = new Schema({
    imageURL: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    subjectName: {
        type: Number,
        required: true
    },
    institutionName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    from: {
        type: Date,
        required: true
    },
    to: {
        type: Date,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    qualificationLevel: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})

const Qualification = mongoose.model('qualification', qualificationModel);

export default Qualification