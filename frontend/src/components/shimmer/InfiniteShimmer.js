import React from "react";

const InfiniteShimmer = () => {
  return (
    <>
      <div className="hidden sm:grid sm:grid-cols-4 sm:justify-center sm:w-9/12 sm:mx-auto  ">
        {Array(16)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className=" animate-pulse  w-[230px] h-[220px] p-3 m-5 border border-slate-200 rounded-md bg-[#fdfdfd]"
            >
              <div className="animate-pulse w-full h-[135px] border border-neutral-300 rounded-md bg-gray-100"></div>

              <p class="leading-relaxed mt-4 mb-2 w-full h-3 animate-pulse bg-gray-200 rounded-sm"></p>
              <p class="leading-relaxed mt-2 mb-1 w-2/3 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
              <p class="leading-relaxed  w-1/5 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
            </div>
          ))}
      </div>

      <div className="grid box-border sm:hidden ">
        {Array(16)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="grid grid-cols-2 animate-pulse w-full h-full p-3 rounded-md bg-[#fdfdfd]"
            >
              <div className="animate-pulse w-36 h-44 border border-neutral-300 rounded-2xl bg-gray-100"></div>
              <div className="w-full h-full box-border">
                <p class="leading-relaxed mt-4 mb-2 w-full h-3 animate-pulse bg-gray-200 rounded-sm"></p>
                <p class="leading-relaxed mt-2 mb-1 w-2/3 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
                <p class="leading-relaxed  w-1/5 h-3 animate-pulse bg-gray-200 rounded-sm"></p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default InfiniteShimmer;
