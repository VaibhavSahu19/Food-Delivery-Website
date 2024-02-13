import aboutUsImg from "../../images/aboutUsImg.jpeg";
import TestimonialSlider from "./TestimonialSlider";
import Footer from "../footer/Footer";

const AboutUs = () => {
  return (
    <div className="grid  grid-flow-row bg-gray-200 w-full h-full ">
      <div className="flex flex-col p-12 sm:flex-row sm:p-20">
        <div className="flex flex-col justify-center mb-10 tracking-wider ">
          <h1 className="font-bold text-5xl mb-4 break-words">
            A Neighborhood of Good
          </h1>
          <p className="leading-relaxed font-normal break-words">
            At RushBite, we celebrate the people behind every order. Our mission
            is to empower and grow local economies. When consumers get their
            goods, local merchants get business, and Rushers get paid.
          </p>
        </div>
        <div className="flex ">
          <img
            className=" clipPath shadow-lg "
            src={aboutUsImg}
            alt="women delivering"
          />
        </div>
      </div>
      <hr className="mt-6 w-3/4 mx-auto" />
      <div className="flex flex-col items-center ">
        <h1 className=" text-center font-bold my-10 tracking-wide text-xl">
          Valuable reviews of our loving Customers.
        </h1>
        <div className="max-w-xs w-full shadow-md">
          <TestimonialSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
