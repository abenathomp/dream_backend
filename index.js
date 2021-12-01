// import express from express
import express from 'express';

// import mongoose
import mongoose from 'mongoose';

// import dotenv
import dotenv from 'dotenv';

// configure the dotenv
dotenv.config();

// create an instance of express
const app = express();

//extract the body of the request
app.use(express.json());

// create a variable for the port number
const PORT = 4000;

// create a route to handle the GET request
app.get("/",(request, response)=>{
    response.send("Abena say Hello World😃 ")

});

//connect to mongoDB Atlas
mongoose.connect(process.env.MONGO_DB_CONSTRING,(error)=>{
    // start the server to listen to incoming request on a sppecified port, that this port
app.listen(PORT, ()=>
console.log(`Server is up and running on:${PORT}`)
);
    if(error){
        return console.log("Connection to MongDB fail");
    }
    //else log out that connection was successful
    else{
        console.log("Connection to MongoDB was successful");
}
});