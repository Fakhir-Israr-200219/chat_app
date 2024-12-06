const express = require("express")
const app = express();
const auth_router = require('./controllers/auth_controller')
const user_router = require('./controllers/user_controller')
const chat_router = require("./controllers/chat_controller")

app.use(express.json())
app.use('/api/auth',auth_router)
app.use('/api/user',user_router)
app.use('/api/chat',chat_router)



module.exports = app;
