const express = require('express');
const userRouter = require('../users/users-router');

const server = express();

server.use(express.json()); // This always has to come before your routers.

server.use('/api', userRouter);

module.exports = server;