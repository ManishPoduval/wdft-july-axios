const express = require('express')
const router = express.Router()
const BBmodel = require('../models/bb.model')
const axios = require('axios')

router.get('/', (req, res) => {
    res.render('home.hbs')
})

router.get('/characters', (req, res) => {
    BBmodel.find()
        .then((characters) => {
            res.render('bb-char.hbs', {characters})
        })   
})

router.get('/quotes', (req, res) => {
    axios.get('https://breakingbadapi.com/api/quotes')
        .then((response) => {
            res.render('bb-quotes.hbs', {quotes : response.data})
        })
})

router.get('*', (req, res) => {
    res.render('404.hbs')
})


module.exports = router;