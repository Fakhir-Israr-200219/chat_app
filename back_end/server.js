const app = require('./app')
const env = require('dotenv')
env.config({path:'./config.env'})
const db_config = require('./config/db_config')

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})