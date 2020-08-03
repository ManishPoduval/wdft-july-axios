const mongoose = require('mongoose')

require('../config/database.config')

const UserSchema = new mongoose.Schema({
    name: String, 
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post' 
    }
})


const PostSchema = new mongoose.Schema({
    title: String
})

const UserModel = mongoose.model('user', UserSchema)
const PostModel = mongoose.model('post', PostSchema) //posts


PostModel.create({title: 'Post 2'})
    .then((response) => {
        
        UserModel.create({name: 'Jorge', post: response._id})
            .then(() => {
                
                UserModel.find()
                    .populate('post')
                    .then((userResponse) => {
                        console.log('User is ', userResponse)
                    })
            })
    })