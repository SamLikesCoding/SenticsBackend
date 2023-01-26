/*
 * 
 *  Tesla Quality Dashboard : Test Server
 * 
 */

// Required Libraries
require('dotenv').config();
const express = require('express');
const morgan =  require('morgan');
const {log} = require('mercedlogger');
const cors = require('cors');
const { stdout } = require('process');
const scanRouter = require('./controllers/datafetcher');

// Script
const {PORT, DB_URL} = process.env;
const app = express();

// Middleware Setup
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

// The Route Setup
app.get('/', (req, res) => {
    log.yellow("Incoming connection", req.socket.remoteAddress)
    res.send(JSON.stringify({
        "signal": "The server exists",
        "status": "OK",
    }));
});

// Data Handler
app.use("/scanData", scanRouter);

// The Run
app.listen(PORT, () => {
    stdout.write("\n\n\n--- Tesla Quality Monitor Check ---\n\n");
    log.green("Database Server", "Active");
    log.green("Active Port", PORT);
});