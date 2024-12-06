const express = require("express")
const app = express();
const auth_router = require('./controllers/auth_controller')
const user_router = require('./controllers/user_controller')

app.use(express.json())

app.use('/api/auth',auth_router)
app.use('/api/user',user_router)



module.exports = app;
