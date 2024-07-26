import mongoose from "mongoose";

const bookScheme = mongoose.Schema({
    name : String,
    description : String,
    price : Number,
    category : String,
    image : String,
    
})

const Book = mongoose.model('Book', bookScheme);
export default Book;