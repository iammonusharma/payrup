require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

//routes
const authRoutes=require("./routes/auth")
const userRoutes=require("./routes/user")


const mongoose=require("mongoose")
const express=require("express")
const app=express();
const cors = require('cors')

// DB Connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true

})
.then(()=>{
    console.log("DB CONNECTED");
})
// Middlewares
app.use(cors())

app.use(express.json())
app.use(cookieParser())
//Routes
app.use("/api",authRoutes)
app.use("/api",userRoutes)
// Port
const port= process.env.PORT || 8000
//Server
app.listen(port,()=>{
    console.log(`App is running at ${port}`);
})