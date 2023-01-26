/**
 * 
 *      Server :  Database Handler
 * 
 */

// Required libraries
require('dotenv').config();
const manga = require('mongoose');
const {log} = require('mercedlogger');

// Database Path
const {DB_URL} = process.env;

// Let's Connect to the Database
manga.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// On Connection
manga.connection.on('open', () => {
    log.green("Quality Check Database", "Active");
});

// On Disconnection
manga.connection.on("close", () => {
    log.green("Shutting Down ", "Database Disconnected");
});

// On Error
manga.connection.on("error", (err) => {
    log.red("--- Error ---", err);
});

// Let's Export 
module.exports = manga;