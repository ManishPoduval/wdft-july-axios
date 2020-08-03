const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home.hbs')
})

router.get('/characters', (req, res) => {
    res.render('bb-char.hbs')
})

module.exports = router;