const { connectToDB, closeDB } = require('./routes/notification_back');

const express = require('express');
const app = express();
const port = 3000;

connectToDB();
