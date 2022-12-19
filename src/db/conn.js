const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://REST:API@restapi.ihumwkm.mongodb.net/?retryWrites=true&w=majority",{
    // useCreateIndex : true ,
    useNewUrlParser  : true ,
    // useUnifiedTopolody : true 
})
mongoose.connection.on('connected',()=>{
    console.log('connected to DB !')
})
mongoose.connection.on('could not connected',(e)=>{
    console.log(`error occured ${e}`)
})