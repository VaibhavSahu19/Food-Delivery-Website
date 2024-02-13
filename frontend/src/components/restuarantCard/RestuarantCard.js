import { CDN_URL } from "../../utils/constants";
import { FaStar } from "react-icons/fa";
const RestuarantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info; //optional chaining
  return (
    <div className="grid grid-flow-col gap-4 sm:grid sm:gap-3 cursor-pointer items-center sm:justify-stretch sm:grid-flow-row transition-transform ease-in-out transform hover:scale-95">
      <div className=" w-full h-full relative overflow-hidden drop-shadow-lg">
        <img
          className=" w-36 h-44  sm:w-60 sm:h-40 object-cover rounded-2xl "
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="dishImg"
        />
      </div>
      <div className="overflow-x-auto sm:ml-3 sm:overflow-y-auto">
        <h1 className=" text-lg font-bold text-gray-900 overflow-hidden w-full text-ellipsis whitespace-nowrap  break-words">
          {name}
        </h1>
        <h2 className="grid grid-flow-col items-center mt-[2px] gap-[2px] justify-start">
          <p className="text-green-600">
            <FaStar />
          </p>
          <p className="text-lg font-bold text-gray-900 overflow-hidden w-full break-words">
            <span>{avgRating} •</span> {sla?.slaString}
          </p>
        </h2>
        <h3 className="grid items-center mt-[2px] gap-[2px]">
          <p className="text-base font-light overflow-hidden w-full text-ellipsis whitespace-nowrap break-words">
            {cuisines.join(", ")}
          </p>
          <p className="text-base font-light overflow-hidden w-full text-ellipsis whitespace-nowrap break-words">
            Location
          </p>
        </h3>
      </div>
    </div>
  );
};

export default RestuarantCard;
