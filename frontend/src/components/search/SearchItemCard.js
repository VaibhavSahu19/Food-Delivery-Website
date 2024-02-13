import React from "react";
import { CDN_URL } from "../../utils/constants";

const SearchItemCard = ({ text, cloudinaryId, tagToDisplay }) => {
  // console.log(data)

  return (
    <div className="p-4 flex hover:bg-slate-100 ">
      <img
        className="w-16 h-12 sm:w-20 sm:h-16 object-cover rounded-md overflow-hidden"
        src={`${CDN_URL}${cloudinaryId}`}
        alt={text}
      />
      <div className="text-left sm:py-4 mx-2">
        <p className="font-light">{text}</p>
        <p className="font-extralight text-gray-500">{tagToDisplay}</p>
      </div>
    </div>
  );
};

export default SearchItemCard;
