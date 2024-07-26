import { Link } from 'react-router-dom'
import { useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import { useEffect } from 'react';
function Course() {
  const [books, setBooks] = useState([]);
  useEffect(()=>{
   const getBooks = async ()=>{
    try{
      const res = await axios.get("http://localhost:4001/books");
      console.log(res.data);
      setBooks(res.data);
    }catch(error){
      console.log("Error : ",error);
    }
   }
   getBooks();
  },[])
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="pt-28 justify-center align-center text-center ">
        <h1 className="text-2xl md:text-4xl">
          We are delighted to have you{" "} 
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12">
        
        Discover a curated selection of books across a range of genres. Whether you're seeking bestsellers, classic literature, or unique finds, our collection offers something for every reader. Dive into a world of captivating stories and enriching reads tailored to your interests.
          </p>
        <Link to={"/"}>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            books.map((item)=>(
                <Cards items={item} key={item.id}/>
            ))
          }
      </div>
      
    </div>
  )
}

export default Course
