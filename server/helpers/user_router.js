const express = require('express')
const ObjectId = require('mongodb').ObjectId;

const user_router = function (users) {

    const router = express.Router()

    router.post('/', (req, res) => {
        const newData = req.body;
        users
        .insertOne(newData)
        .then((result) => {
            res.json(result.ops[0])
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        });

    });

    return router;

};

module.exports = user_router;