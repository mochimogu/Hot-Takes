const express = require('express');
const uRoutes = express.Router();

const db = require('../database/database');

uRoutes.post('/addUserToDB', async (req, res) => {

    console.log(req.body);

    const results = await db.addUserToDB(req.body);

    if(results !== -1) {
        res.status(200).json({'results' : 'successful'});
    } else {
        res.status(400).json({'results' : 'failed'});
    }

})



module.exports = uRoutes;