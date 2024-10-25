const { connectToDB, closeDB } = require('./routes/train_back');

const express = require('express');
const app = express();
const port = 3000;

connectToDB();
