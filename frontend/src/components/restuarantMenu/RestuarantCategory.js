import ItemList from "./ItemList";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const RestuarantCategory = ({ data, showIndex, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex(showIndex === false ? true : null); // Toggle the showIndex state
  };
  return (
    <div>
      {/* {Accordian Header} */}
      <div className=" sm:w-6/12 sm:mx-auto  bg-white shadow-lg my-4 p-4 ">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          {showIndex ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {/* {Accordian body} */}
        {/* If both true then show */}
        {showIndex && <ItemList items={data?.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestuarantCategory;
