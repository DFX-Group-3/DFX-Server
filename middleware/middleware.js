import jwt from 'jsonwebtoken';
import loginCollection from '../model/model.js';

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: 'no value for authorization' })
    }
    const token = authorization.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await loginCollection.findById({_id}).select("_id")
        
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'request not authorized' })
    }
}


export default requireAuth;