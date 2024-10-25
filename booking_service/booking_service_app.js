const { connectToDB, closeDB } = require('./routes/booking_service_back');

const express = require('express');
const app = express();
const port = 3000;

connectToDB();
