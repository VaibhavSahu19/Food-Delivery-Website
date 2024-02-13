import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItems, removeItems } from "../../utils/redux/cartSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState({});

  //// const resID = useSelector((store) => store.restuarant.resoId);
  //// console.log(resID);

  const handleAddItem = (item, resID) => {
    // Here prev contains previous itemCounts state value
    // We return new state object with spread ...prev - this will keep existing key-value pairs intact
    // Then we update specific item.id count:
    // Get current count using prev[item.id]
    // Set to 0 if undefined using || 0
    // Increment it: (prev[item.id] || 0) + 1
    // So we update state, incrementing specific item count
    // State initialization: The itemCounts state is initialized as an empty object, ready to store counts for individual items.
    // Count increment: When an item is clicked, the handleAddItem function updates the itemCounts object, incrementing the count for the specific item's ID.
    // Count display: In the JSX, the itemCounts[item.id] expression accesses the count for the current item, ensuring that each button displays its own independent count.
    setItemCount((prevCount) => ({
      ...prevCount,
      [item.card.info.id]: (prevCount[item.card.info.id] || 0) + 1,
    }));
    //dispatching an action
    dispatch(addItems(item));
  };

  const handleRemoveItem = (item) => {
    // Same pattern as above
    // Decrement the specific item.id count
    // Ensure we don't go below 0 using || 0
    setItemCount((prevCount) => ({
      ...prevCount,
      [item.card.info.id]: prevCount[item.card.info.id] - 1 || 0,
    }));
    dispatch(removeItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "
        >
          {/* {console.log(item)} */}
          <div className="w-9/12 ">
            <div className=" py-2">
              <span>{item?.card?.info?.name}</span>
              <br></br>
              <span>
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs m-3">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <img
              className="rounded-md object-cover h-32 w-full"
              src={CDN_URL + item.card.info.imageId}
              alt="dishImg"
            />
            <div className="flex items-center justify-center mt-4">
              <button
                className="btn btn-square btn-xs  border-green-500 text-green-500 hover:bg-green-600 focus:ring-green-500 focus:ring-opacity-50"
                onClick={() => handleRemoveItem(item)}
              >
                -
              </button>

              <span className="mx-2 text-lg font-medium text-green-800">
                {itemCount[item.card.info.id] || 0}
              </span>

              <button
                className="btn btn-square btn-xs bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 focus:ring-opacity-50"
                onClick={() => handleAddItem(item)}
              ></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
