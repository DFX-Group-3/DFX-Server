import mongoose from "mongoose";
// import isEmail  from "validator";
import bcrypt from 'bcrypt';
import validator from "validator";

const Schema = mongoose.Schema;

const loginModel = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true ,
        minlength: 6
    }
})



//static method to login user 
loginModel.statics.login = async function (email, password) {
    //making sure the form wont be empty
    if (!email || !password) {
        throw Error('Please fill up the login form')
    }

    //email check and password match
    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Email is incorrect or not existed')
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Password is incorrect')
    }

    return user
}

const loginCollection = mongoose.model('loginCollection', loginModel);

export default loginCollection;