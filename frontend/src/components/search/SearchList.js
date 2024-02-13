import React from "react";
import SearchItemCard from "./SearchItemCard";

const SearchList = ({ data }) => {
  if (!data) return null;
  // console.log(data)
  return (
    <div className="grid grid-flow-col w-full sm:w-7/12 ">
      {/* <div className="col-span-4"></div> */}

      <div className="flex flex-col mt-8 ">
        {data.map((res, index) => (
          <SearchItemCard {...res} key={index} />
        ))}
      </div>
      {/* <div className="col-span-4"></div> */}
    </div>
  );
};

export default SearchList;
