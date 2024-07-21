import list from "../data/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
function FreeBook() {
    const free_books=list.filter((book)=>book.category==="Free");
    
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae omnis fugit illum adipisci? </p>
            </div>
            <div className="slider-container">
            <Slider {...settings}>
                {
                    free_books.map((item)=>
                        <Cards items={item} key={item.id}/>
                    )
                }
            </Slider>
        </div>
    </div>
    

  )
}

export default FreeBook
