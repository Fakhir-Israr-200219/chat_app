const express = require("express")
const app = express();
const auth_router = require('./controllers/auth_controller')

app.use(express.json())
app.get('/hoho',(req,res)=>{
    res.send({
        "mess":"pata ni "
    })
})
app.use('/api/auth',auth_router)



module.exports = app;
