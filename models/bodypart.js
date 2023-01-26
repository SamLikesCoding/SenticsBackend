/**
 * 
 *  Database Model : Body Part
 * 
 */

const {Schema, model} = require('../database/server');

const BodyPartSchema = new Schema({
    PID: {
        type: String,
        unique: true,
        required: true
    },
    qcheck : {
        type: Number,
    },
    cracks: {
        type: Array,
    }
});

const BodyPart = model("BodyPart", BodyPartSchema);

// Let's Export
module.exports = BodyPart;