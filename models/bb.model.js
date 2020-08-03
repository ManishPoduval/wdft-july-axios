const mongoose = require('mongoose');

let BBSchema = new mongoose.Schema({
    name: String, 
})

let BBModel = mongoose.model('bb-character', BBSchema);

module.exports =  BBModel;