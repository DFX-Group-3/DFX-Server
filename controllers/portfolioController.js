import mongoose from "mongoose";
import Portfolio from "../model/portfolioModel.js";

const portfolio_get = async (req, res) => {
    const user_id = req.user._id
    console.log(user_id)
    const portfolio = await Portfolio.find({ user_id })
    res.status(200).json(portfolio)
}


const portfolio_post = async (req, res) => {
    const {imageURL,
    description,
    URL,
    title,
    priority
    } = req.body

    const user_id = req.user._id

    let emptyFields = []
    console.log(emptyFields.length)
    if (!description && !URL && !title && !priority && !imageURL) {
        emptyFields.push('haha')
    }
    if (emptyFields.length > 0) {
        console.log(emptyFields)
        return res.status(400).json({ error: 'please fill up the form' })

    }


    try {
        const portfolio = await Portfolio.create({
            imageURL,
            description,
            URL,
            title,
            priority,
            user_id
        })
        res.status(200).json(portfolio)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }



}

const portfolio_patch = async (req, res) => {

    const user_id = req.user._id
    console.log('userid', user_id)
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({ error: 'No such peep validation' })
    }

    const portfolio = await Portfolio.find({ user_id: user_id }).updateOne({ user_id: user_id }, { ...req.body })
    const updatedPortfolio = await Portfolio.find({ user_id: user_id })
    // const profile = await Profile.findByIdAndUpdate( user_id , {...req.body} )

    if (!Portfolio) {
        return res.status(400).json({ error: 'No such portfolio' })
    }

    res.status(200).json(updatedPortfolio)
}

export {
    portfolio_get,
    portfolio_post,
    portfolio_patch
}