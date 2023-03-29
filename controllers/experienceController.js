import mongoose from "mongoose";
import Experience from "../model/experienceModel.js";


const experience_get = async (req, res) => {
    const user_id = req.user._id
    console.log(user_id)
    const experience = await Experience.find({ user_id })
    res.status(200).json(experience)
}


const experience_post = async (req, res) => {
    const { imageURL,
    organization,
    priority,
    position,
    description,
    startDate,
    endDate
    } = req.body
    const user_id = req.user._id

    let emptyFields = []
    console.log(emptyFields.length)
    if (!imageURL && !organization && !position && !description && !startDate && !endDate && !priority ) {
        emptyFields.push('haha')
    }
    if (emptyFields.length > 0) {
        console.log(emptyFields)
        return res.status(400).json({ error: 'please fill up the form' })

    }


    try {
        const experience = await Experience.create({
            imageURL,
            organization,
            priority,
            position,
            description,
            startDate,
            endDate,
            user_id
        })
        res.status(200).json(experience)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }


    
}

const experience_patch = async (req, res) => {

    const user_id = req.user._id
    console.log('userid', user_id)
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({ error: 'No such peep validation' })
    }

    const experience = await Experience.find({ user_id: user_id }).updateOne({ user_id: user_id }, { ...req.body })
    const updatedExperience = await Experience.find({ user_id: user_id })
    // const profile = await Profile.findByIdAndUpdate( user_id , {...req.body} )

    if (!experience) {
        return res.status(400).json({ error: 'No such experience' })
    }

    res.status(200).json(updatedExperience)
}

export {
    experience_get,
    experience_post,
    experience_patch
}