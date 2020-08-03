//IGNORE THIS FILE WHILE WE ARE WORKING ON THE BREAKING BAD API

const express = require('express')
const router = express.Router()
const axios = require('axios')

require('dotenv').config()



router.get('/nasa', (req, res) => {
    
    let key = process.env.API_KEY
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        .then((response) => {
            res.render('nasa.hbs', {nasa: response.data})
        })
        .catch((err) => {
            console.log('Error is ', err)
        })

})



module.exports = router;