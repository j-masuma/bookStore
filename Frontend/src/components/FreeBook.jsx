
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";


function FreeBook() {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
    const getBooks = async ()=>{
      try{
        const res = await axios.get("http://localhost:4001/books");
        console.log(res.data);
        setBooks(res.data.filter((book)=>book.category==="Free"));
      }catch(error){
        console.log("Error : ",error);
      }
    }
    getBooks();
    },[])
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
    
        <div className="container mx-auto px-4 md:px-20">
            <div>
                <h1 className="font-semibold text-xl">Free Books</h1>
                <p>Explore a collection of free books spanning various genres. Discover captivating stories and valuable knowledge without any cost. Perfect for readers seeking great content on a budget. </p>
            </div>
            <div className="slider-container">
            <Slider {...settings}>
                {
                    books.map((item)=>
                        <Cards items={item} key={item.id}/>
                    )
                }
            </Slider>
        </div>
    </div>
    

    )
}

export default FreeBook
