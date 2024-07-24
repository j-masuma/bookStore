import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';
import { config } from 'dotenv';
const app = express()

app.use(cors());
app.use(express.json());



config() 

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;
//Connect with mongodb
try{
    mongoose.connect(URI, {
        //if you use atlas then no need to add them
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected');
}catch(err){
  console.log("Error : ",err)
}

//defining routes
app.use('/books', bookRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})