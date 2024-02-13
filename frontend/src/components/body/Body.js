import RestuarantCard from "../restuarantCard/RestuarantCard";
import { useState, useEffect } from "react";
import Shimmer from "../shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import InfiniteScroll from "react-infinite-scroll-component";
import { CDN_URL } from "../../utils/constants";
import InfiniteShimmer from "../shimmer/InfiniteShimmer";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../auth/Auth";
import Footer from "../footer/Footer";

const Body = () => {
  //Local State Variable - Super powerful Variable
  const [listofRestuarants, setlistofRestuarants] = useState([]);
  const [listofTopRestuarants, setlistofTopRestuarants] = useState([]);
  const [filterRestuarants, setfilterRestuarants] = useState([]);

  const { isAuthenticated } = useAuth0();

  const [searchText, setsearchText] = useState("");
  const [foodItem, setFoodItem] = useState([]);
  const [filters, setFilters] = useState([]);
  const onlineStatus = useOnlineStatus();

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1); // Initial page

  useEffect(() => {
    fetchData();
  }, []); //when page changes it loads more

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D22.6461695%26lng%3D75.8163521%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json.data);

    const foodItemsInfo =
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info;

    const topResturantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const filterOption = json?.data?.cards[3]?.card?.card?.facetList;

    const restaurantsData =
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    if (!restaurantsData || restaurantsData.length === 0) {
      setHasMore(false); // No more data available
      return;
    }

    setFilters(filterOption);
    setFoodItem(foodItemsInfo);
    setlistofTopRestuarants(topResturantData);
    setlistofRestuarants([...listofRestuarants, ...restaurantsData]); //it is taking each new array restuarant data on each fetch and combining it into new one array listofResturant
    setfilterRestuarants([...filterRestuarants, ...restaurantsData]);
    setPage(page + 1); // Increment page number
  };

  const fetchMoreData = async () => {
    fetchData();
  };

  if (onlineStatus === false) {
    return <h1>You Are Offline Sorry. Please Check Your Connection!</h1>;
  }

  //Conditional Rendering
  if (listofRestuarants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className=" sm:w-9/12 sm:mx-auto ">
        <div className="p-4">
          <div className="mb-4 flex gap-2">
            {isAuthenticated && (
              <span className="font-bold text-2xl">
                <Profile /> ,
              </span>
            )}
            <h2 className="font-bold text-2xl ">What's on your mind?</h2>
          </div>
          <div className=" mx-[-16px] overflow-x-scroll overflow-y-hidden no-scrollbar">
            <div className=" grid grid-flow-col sm:flex sm:pt-0 ">
              {foodItem.map((item, index) => (
                <div className="pr-6 first:pl-4 w-full">
                  <img
                    className=" w-20 sm:w-[146px] max-w-xl"
                    key={item.id}
                    src={CDN_URL + item.imageId}
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="sm:w-9/12 sm:mx-auto mb-8  " />
      {listofTopRestuarants && (
        <div className=" w-full sm:w-9/12 sm:mx-auto ">
          <div className="px-4">
            <div className="mb-4">
              <h2 className="font-bold text-2xl ">
                Top restaurant chains in Indore
              </h2>
            </div>
            <div className=" flex gap-4 my-4 mx-2 overflow-x-scroll overflow-y-hidden no-scrollbar ">
              {listofTopRestuarants.map(
                (
                  restaurant //Map function to iterate over the data dynamically
                ) => (
                  <Link
                    key={restaurant.info.id}
                    to={"/restuarants/" + restaurant.info.id}
                  >
                    <div className=" min-w-[200px] sm:min-w-[245px]">
                      <RestuarantCard resData={restaurant} />
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )}
      <hr className="sm:w-9/12 sm:mx-auto mt-8 mb-8 " />
      {/* InfiniteScroll using react-component-infinite-scroll */}
      {filters && (
        <div className=" sm:w-9/12 sm:mx-auto ">
          <div className=" p-4 ">
            <div className="font-bold text-2xl ">
              Restaurants with online food delivery in Indore.{" "}
            </div>
            <div className="flex my-4 mt-5 gap-2 overflow-y-scroll no-scrollbar cursor-pointer">
              {filters.map((filter) => (
                <div className="flex text-sm border rounded-3xl px-2 p-[6px]  whitespace-nowrap ">
                  {filter.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <InfiniteScroll
        dataLength={filterRestuarants.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<InfiniteShimmer />} // Loader component while fetching data
        endMessage={<p>No more restaurants to show.</p>} // Message when no more data available
      >
        <div className=" w-full sm:w-9/12 sm:mx-auto ">
          <div className="px-4">
            <div className="flex flex-col sm:grid sm:grid-cols-4 items-start gap-4 my-4 mx-2">
              {filterRestuarants.map(
                (
                  restaurant //Map function to iterate over the data dynamically
                ) => (
                  <Link
                    key={restaurant.info.id}
                    to={"/restuarants/" + restaurant.info.id}
                  >
                    <RestuarantCard resData={restaurant} />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </InfiniteScroll>
      <Footer />
    </>
  );
};
export default Body;
