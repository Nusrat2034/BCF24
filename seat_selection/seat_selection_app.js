const { connectToDB, closeDB } = require('./routes/seat_selection_back');

const express = require('express');
const app = express();
const port = 3000;

connectToDB();
