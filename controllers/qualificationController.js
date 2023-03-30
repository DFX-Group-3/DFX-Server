import mongoose from "mongoose";
import Qualification from "../model/qualificationModel.js";

const qualification_get = async (req, res) => {
    const user_id = req.user._id
    console.log(user_id)
    const qualification = await Qualification.find({ user_id })
    res.status(200).json(qualification)
}

const qualification_post = async (req, res) => {

    const { imageURL,
    grade,
    subjectName,
    institutionName,
    description,
    from,
    to,
    type,
    weight,
    qualificationLevel,
    priority} = req.body
    const user_id = req.user._id


    let emptyFields = []
    console.log(emptyFields.length)
    if (!imageURL && !grade && !subjectName && !institutionName && !description && !from && !to && !type && !weight && !qualificationLevel && !priority) {
        emptyFields.push('haha')
    }
    if (emptyFields.length > 0) {
        console.log(emptyFields)
        return res.status(400).json({ error: 'please fill up the form' })

    }
    console.log('passed')
    try {
        const qualification = await Qualification.create({
            imageURL,
            grade,
            subjectName,
            institutionName,
            description,
            from,
            to,
            type,
            weight,
            qualificationLevel,
            priority,
            user_id
        })
        res.status(200).json(qualification)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const qualification_patch = async (req, res) => {


    const user_id = req.user._id
    console.log('userid', user_id)
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({ error: 'No such peep validation' })
    }

    const qualification = await Qualification.find({ user_id: user_id }).updateOne({ user_id: user_id }, { ...req.body })
    const updatedQualification= await Qualification.find({ user_id: user_id })
    // const profile = await Profile.findByIdAndUpdate( user_id , {...req.body} )

    if (!qualification) {
        return res.status(400).json({ error: 'No such qualification' })
    }

    res.status(200).json(Qualification)

}



export {qualification_get, qualification_post, qualification_patch}