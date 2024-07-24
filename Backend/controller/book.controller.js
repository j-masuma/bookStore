import Book from "../modal/book.modal.js";

export const getBooks = async (req, res)=>{
    try{
        const books = await Book.find();
        res.status(200).json(books);

    }catch(error){
        console.log("Error : ",error);
        req.status(500).json({message : error});
    }
}