import Profile from "../model/profileModel.js";
import mongoose from "mongoose";

const profile_get = async (req, res) => {
    // const { _id } = req.user
    // const profile = await Profile.find()
    res.status(200).json({message: 'success'})
}

const profile_post = async (req, res) => {
    
    const { profileImageURL,
        firstName,
        lastName,
        nationality,
        linkedInURL,
        pronouns,
        githubURL,
        profileHeadline,
        profileVideoURL,
        tagline } = req.body
    const user_id = req.user._id
    
    
    let emptyFields = []
    console.log(emptyFields.length)
    if (!profileImageURL && !firstName && !lastName && !nationality && !linkedInURL && !pronouns && !githubURL && !profileHeadline && !profileVideoURL && !tagline) {
        emptyFields.push('haha')
    }
    if (emptyFields.length > 0) {
        console.log(emptyFields)
        return res.status(400).json({ error: 'please fill up the form' })

    }
    console.log('passed')
    try {
        const profile = await Profile.create({
            profileImageURL,
            firstName,
            lastName,
            nationality,
            linkedInURL,
            pronouns,
            githubURL,
            profileHeadline,
            profileVideoURL,
            tagline, 
            user_id
        })
        res.status(200).json(profile)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


const profile_patch = async (req, res) => {
    
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such peep validation' })
    }

    const profile = await Profile.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!profile) {
        return res.status(400).json({ error: 'No such profile' })
    }

    res.status(200).json(profile)

}



export {profile_get,profile_post, profile_patch}