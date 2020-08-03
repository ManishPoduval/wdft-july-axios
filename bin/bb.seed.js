const mongoose = require('mongoose');
const BBModel = require('../models/bb.model');
const axios = require('axios')

/* Ensure database is connected for seeding */
require('../config/database.config')

axios.get('https://breakingbadapi.com/api/characters')
    .then((response) => {
       BBModel.insertMany(response.data)
        .then(() => {
            console.log('Data added')
        })
    })
    .catch((err) => {
        console.log('Error ', err)
    })