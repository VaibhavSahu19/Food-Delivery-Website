import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../../utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { FaClock } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { TbDiscount2 } from "react-icons/tb";

import {
  setRestuarantId,
  setRestuarantInfo,
} from "../../utils/redux/restuarantSlice";
const RestuarantMenu = () => {
  const dispatch = useDispatch();

  const { resId } = useParams();

  const resInfo = useRestuarantMenu(resId);
  console.log(resInfo);

  const [showIndex, setShowIndex] = useState(null);
  const dummy = "Dummy Data";

  dispatch(setRestuarantId(resId));
  dispatch(setRestuarantInfo(resInfo));

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    avgRatingString,
    totalRatingsString,
    sla,
  } = resInfo?.cards[0]?.card?.card?.["info"];

  const { message } = resInfo?.cards[0]?.card?.card?.["info"]?.feeDetails;
  const { offers } = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  // // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className=" bg-gray-100 pt-4 sm:bg-white">
      <div className=" flex flex-col pt-1 p-4 mx-4  bg-white rounded-lg  shadow-lg shadow-gray-400 sm:w-6/12 sm:mx-auto  sm:shadow-none sm:round-none">
        <div className="flex justify-between ">
          <div className="flex flex-col self-start">
            <h2 className="font-semibold mt-5 mb-1 text-2xl">{name}</h2>
            <p className=" mb-1 text-gray-600 text-xs font-extralight">
              {cuisines.join(", ")}
            </p>
            <p className="  text-gray-600 text-xs font-extralight">
              {locality}
            </p>
            <p className=" flex items-center my-2 mb-4 text-gray-600 text-sm font-extralight">
              <span>
                <IoIosBicycle />
              </span>
              <span className="mx-2">{message}</span>
            </p>
          </div>
          <div className="flex flex-col justify-center ">
            <button className="border  rounded-md shadow-sm ">
              <p className="flex items-center justify-center text-green-600">
                <span>
                  <FaStar />
                </span>
                <span className="mx-2 my-2"> {avgRatingString} </span>
              </p>
              <hr className="w-1/2 mx-auto " />
              <p className="  text-gray-600 text-xs font-light mx-2 my-2">
                {totalRatingsString}
              </p>
            </button>
          </div>
        </div>
        <hr className=" w-full mx-auto border-dashed" />
        <div className="flex gap-8 mt-3 font-extrabold text-gray-950 text-sm">
          <div className="flex items-center gap-2 ">
            <FaClock className="text-xl" /> {sla.deliveryTime} mins
          </div>
          <div className="flex  gap-2 items-center ">
            <HiOutlineCurrencyRupee className="text-xl" />
            {costForTwoMessage}
          </div>
        </div>

        <div className="flex mt-4 gap-2 overflow-y-scroll no-scrollbar">
          {offers.map((offer) => (
            <div className="flex flex-col border rounded-md text-gray-500 font-bold p-2 w-fit whitespace-nowrap ">
              <div className="flex text-sm items-center gap-2">
                <div className="text-amber-900 text-lg ">
                  <TbDiscount2 />
                </div>
                {offer.info.header}
              </div>
              <div className="flex gap-1 text-[10px] text-gray-600 font-light">
                <span>{offer.info.couponCode}</span>|
                <span>{offer.info.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className=" sm:w-6/12 sm:mx-auto mt-8 mx-2 border-dashed" />

      {/* {Categories accordions} */}
      {categories.map((category, index) => (
        //Controlled Component
        <RestuarantCategory
          key={category?.card?.card.name}
          data={category?.card?.card}
          showIndex={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestuarantMenu;
