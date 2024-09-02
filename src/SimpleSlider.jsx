import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


export default function SimpleSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className='border-2 my-[7.5rem] border-red-400 w-[300px] h-[200px]'>
        <Slider {...settings}>
        <div>
        <img src="https://images.freecreatives.com/wp-content/uploads/2016/10/Free-HD-Stock-Image.jpg" width="300" height="200" alt="Free HD Stock Image" />
      </div>
      <div>
      <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=nature-forest-industry-34950.jpg&fm=jpg" width="300" height="200" alt="Free HD Stock Image" />
      </div>
      <div>
      <img src="https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg" width="300" height="200" alt="Free HD Stock Image" />
      </div>
      <div>
      <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=nature-forest-industry-34950.jpg&fm=jpg" width="300" height="200" alt="Free HD Stock Image" />
      </div>
      <div>
      <img src="https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg" width="300" height="200" alt="Free HD Stock Image" />
      </div>
      <div>
      <img src="https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=nature-forest-industry-34950.jpg&fm=jpg" width="300" height="200" alt="Free HD Stock Image" />
      </div>
        </Slider>
    
      </div>
      
    </div>
  )
}

