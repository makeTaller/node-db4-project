const express = require('express')

const Cookbook = require('./CookBook/cookbook-router')

const server = express()

server.use(express.json())

server.use('/api/cookbook',Cookbook)
// Insert Code Here Kirk!

module.exports = server;