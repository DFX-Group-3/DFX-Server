import Profile from "../model/profileModel.js";
import mongoose from "mongoose";

const profile_get = async (req, res) => {
    const user_id = req.user._id
    console.log(user_id)
    const profile = await Profile.find({user_id})
    res.status(200).json(profile)
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
    
    
    const user_id = req.user._id
    console.log('userid',user_id)
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({ error: 'No such peep validation' })
    }

    const profile = await Profile.find({ user_id: user_id }).updateOne({ user_id: user_id }, { ...req.body })
    const updatedProfile = await Profile.find({ user_id: user_id })
    // const profile = await Profile.findByIdAndUpdate( user_id , {...req.body} )

    if (!profile) {
        return res.status(400).json({ error: 'No such profile' })
    }

    res.status(200).json(updatedProfile)

}



export {profile_get,profile_post, profile_patch}