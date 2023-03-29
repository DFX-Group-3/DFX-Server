import mongoose from "mongoose";
import validator from "validator";
const Schema = mongoose.Schema;

const certificationModel = new Schema({
    name: {
        type: String,
        required: true
    }
})

const Certification = mongoose.model('certification', certificationModel)

export default Certification