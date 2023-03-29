import jwt from 'jsonwebtoken';
import { connect } from 'mongoose';
import loginCollection from '../model/model.js';


//creating token
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

const login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await loginCollection.login(email, password);
        console.log(user._id)
        const _id = user._id
        const token = createToken(user._id)
        console.log(token)
        res.status(200).json({token, _id})
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

export  {
    login_post
}

