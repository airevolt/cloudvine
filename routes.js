const express = require("express")
const bodyParser = require("body-parser")

module.exports = (model) => {
    const rtr = express.Router();

    rtr.post("/",bodyParser.json(), (req, res, next) =>{
        model.create(req.body)
        .then(id => {
            res.send({message: "success", id})
        }).catch((error) =>{
            next(error)
        });
    });

    rtr.get("/",(req, res, next) =>{
        model.read()
        .then(response =>{
            res.send(response)
        }).catch((error) =>{
            next(error)
        })
    })

    return rtr
}