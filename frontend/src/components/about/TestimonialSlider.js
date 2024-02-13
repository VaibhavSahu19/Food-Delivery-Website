import React from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      text: "Great service! I received my order within minutes. Impressed with the quick delivery.",
      author: "Jatin Dalal",
      img: "https://avatars.githubusercontent.com/u/109894649?v=4",
    },
    {
      id: 2,
      text: "Delicious food and excellent customer service. Will definitely order again!",
      author: "Alex Martinez",
      img: "https://avatars.githubusercontent.com/u/104521241?v=4",
    },
    {
      id: 3,
      text: "I love Rush Bite! The variety of cuisines available is amazing. Always satisfies my cravings.",
      author: "Asmita Sagarkar",
      img: "https://avatars.githubusercontent.com/u/121784973?v=4",
    },
    {
      id: 4,
      text: "Fast delivery and quality food. Perfect for a quick meal option.",
      author: "Tushar Sindhi",
      img: "https://avatars.githubusercontent.com/u/74873531?v=4",
    },
    {
      id: 5,
      text: "Rush Bite never disappoints! The food is always fresh and tasty.",
      author: "Jay Verma",
      img: "https://avatars.githubusercontent.com/u/981514?v=4",
    },
    {
      id: 6,
      text: "Convenient and reliable! My go-to app for ordering food anytime, anywhere.",
      author: "Thor Gupta",
      img: "https://avatars.githubusercontent.com/u/104521101?v=4",
    },
  ];

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div className="max-w-xs flex justify-center p-6 border border-white rounded-lg shadow-md bg-white">
          <p className="text-xl text-gray-700 leading-relaxed text-center mb-2">
            {testimonial.text}
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="overflow-hidden w-12 h-12 rounded-full">
              <img
                className="w-full h-full rounded-full object-cover"
                src={testimonial.img}
                alt={testimonial.author}
              />
            </div>
            <h3 className="text-gray-800 font-semibold ">
              {testimonial.author}
            </h3>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
