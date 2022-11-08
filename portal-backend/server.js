const dotenv = require("dotenv")
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const users = require("./src/api/routes/users")
const posts = require("./src/api/routes/posts")
const connectDB = require("./src/api/db/db.js")
dotenv.config()
connectDB()
// Allow requests from the frontend TODO: EDIT FOR PROD
app.use(cors());
// support parsing of application/json type post data
app.use(bodyParser.json())
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//api routes
app.use('/api/user', users);
app.use('/api/post', posts);
// start server
app.listen(port, () => {
  console.log(`Portal Backend listening on port ${port}`)
});
