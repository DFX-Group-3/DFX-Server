import mongoose from "mongoose";
import validator from "validator";

const Schema = mongoose.Schema;

const portfolioModel = new Schema({
    imageURL: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    URL: {
        type: String,
        required: true
    },
    title: {
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

const Portfolio = mongoose.model('portfolio', portfolioModel)

export default Portfolio