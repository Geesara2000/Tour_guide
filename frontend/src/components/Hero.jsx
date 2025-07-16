// import { Link } from 'react-router-dom';
// import Herobg from '../assets/hero.jpg';

// function Hero() {
//   return (
//     <div className="relative h-[80vh] bg-blue-50">
//       {/* Background image with overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${Herobg})`,
//         }}
//       >
//        <div className="absolute inset-0 bg-blue-200/30"></div>
//       </div>

//       {/* Content */}
//       <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col justify-center h-full text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-950 mb-4">
//             Discover Your Next Adventure
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-950 mb-8">
//             Book unforgettable tours with ease and confidence.
//           </p>
//           <div>
//             <Link 
//               to="/tours"
//               className="inline-block px-8 py-4 bg-blue-900 text-white rounded-2xl hover:bg-blue-600 transition-colors shadow-md text-lg"
//             >
//               Come Fly With Us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;


import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Herobg1 from '../assets/hero1.jpg';
import Herobg2 from '../assets/hero2.jpg';
import Herobg3 from '../assets/hero3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function Hero() {
  // Sample slide data - replace with your actual images and content
  const slides = [
    {
      image: Herobg1,
      title: "Discover Your Next Adventure",
      description: "Book unforgettable tours with ease and confidence."
    },
    {
      image: Herobg2, // Replace with other images
      title: "Explore Exotic Destinations",
      description: "Uncover hidden treasures around the world."
    },
    {
      image: Herobg3, // Replace with other images
      title: "Create Lasting Memories",
      description: "Experience journeys that will stay with you forever."
    }
  ];

  return (
    <div className="relative h-[80vh] bg-blue-50">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background image with overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 "></div>
              </div>

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center h-full text-center md:text-left">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-950 mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-950 mb-8">
                    {slide.description}
                  </p>
                  <div>
                    <Link 
                      to="/tours"
                      className="inline-block px-8 py-4 bg-blue-900 text-white rounded-2xl hover:bg-blue-600 transition-colors shadow-md text-lg"
                    >
                      Come Fly With Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
