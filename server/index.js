const express = require('express');
const app = express(); // used to create backend server

const http = require("http"); // create instane of http

const { Server } = require('socket.io'); // grab  a class Server from socket.io
const cors = require("cors");
app.use(cors());
const server = http.createServer(app); // create http server with express

const io = new Server(server, {
    cors: {
        origin: "htp://localhost:3000",
        methods: ["GET", "POST"],
    },
});

server.listen(3001, () => {
    console.log("Server is running");
});





 