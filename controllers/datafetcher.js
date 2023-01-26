/**
 * 
 *  
 *      Dashboard Data fetcher
 * 
 * 
 */

// The libraries
require('dotenv').config();
const BodyPart = require("../models/bodypart");
const {Router} = require('express');
const {log} = require('mercedlogger');

// The Router
const router = Router();

// Get data 
router.get("/getBodyParts", async (req, res) => {
    try {
        BodyPart.find({}, (err, bodyparts) => {
            data = [];
            bodyparts.forEach(part => {
                data.push(part);
            });
            log.green("Fetch Request Status", "SUCESS");
            res.send(data);
        });
    } catch (err) {
        log.red("Something went wrong", err);
    }
});

// Let's Export
module.exports = router;