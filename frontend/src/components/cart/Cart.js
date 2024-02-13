import { Selector, useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { clearCart, removeItems } from "../../utils/redux/cartSlice";
import { IoTrashBin } from "react-icons/io5";
import emptyCart from "../../images/emptyCart.png";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const itemTotal = useSelector((store) => store.cart.totalPrice);
  const resInfo = useSelector((store) => store.restuarant.restuarantInfo);
  console.log(resInfo);

  if (cartItems.length !== 0) {
    const platformFee = 5;
    const deliveryFees = resInfo?.cards[0]?.card?.card?.info?.feeDetails?.fees
      ? resInfo?.cards[0]?.card?.card?.info?.feeDetails?.fees[0]?.fee / 100
      : 11;
    const gst = ((itemTotal / 100) * 5) / 100;
    const totalToPay = itemTotal / 100 + deliveryFees + platformFee + gst;
  }

  const handleClearItem = () => {
    //dispatching an action
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    //dispatching an action
    dispatch(removeItems(item));
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="bg-white w-svw h-svh flex items-center flex-col justify-center text-center my-auto">
          <div className="w-[271px] h-[256px] ">
            <img src={emptyCart}></img>
          </div>
          <div className="mt-6 text-xl font-medium text-gray-600">
            Your cart is empty
          </div>
          <div className="mt-2 text-gray-400">
            You can go to home page to view more restaurants
          </div>
          <button className="mt-8 px-5 py-3 bg-pink-tone text-white font-semibold text-sm text-center border cursor-pointer   ">
            <Link to="/">See restaurants near you</Link>
          </button>
        </div>
      ) : (
        <div className="text-center bg-gray-200 h-svh   py-6 rounded-lg shadow-md ">
          <h1 className="text-3xl font-bold mb-4">My Cart</h1>
          <div className="mb-3">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleClearItem}
            >
              Clear Cart
            </button>
          </div>
          <div className="flex flex-col mx-4 sm:w-1/3 sm:mx-auto bg-white text-sm font-normal">
            {cartItems.map((item) => (
              <div key={item.card.info.id} className="p-2 m-2 text-left flex">
                <div className="w-1/2 sm:w-2/12 mr-2">
                  <img
                    className="w-full sm:w-20"
                    src={CDN_URL + item.card.info.imageId}
                    alt="dishImg"
                  ></img>
                </div>
                <div className="w-full sm:w-9/12 flex items-center justify-between ">
                  <div className="py-2">
                    <span>{item?.card?.info?.name}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4">
                      ₹
                      {item?.card?.info?.price
                        ? item?.card?.info?.price / 100
                        : item?.card?.info?.defaultPrice / 100}
                    </div>
                    <IoTrashBin
                      className="text-xl w-6 h-6 m-1 cursor-pointer hover:scale-110"
                      onClick={() => handleRemoveItem(item)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="text-left flex flex-col font-light text-gray-500 m-4 border-t border-gray-200 p-4 ">
              <h1 className="text-xl font-medium text-gray-900 mb-2">
                Bill Details
              </h1>
              <div className="flex items-center justify-between ">
                <p className="text-gray-500">Item Total</p>
                <span>₹{itemTotal / 100}</span>
              </div>
              <p className="flex justify-between mb-3">
                Delivery Fees
                <span>₹{deliveryFees}</span>{" "}
              </p>
              <hr />
              <p className="flex justify-between">
                Platform fee <span class="line-through">₹{platformFee}</span>
              </p>
              <p className="flex justify-between mb-6">
                GST and Restaurant Charges <span>₹{gst.toFixed(2)}</span>
              </p>
              <hr className="border-t-2 border-dark-gray" />
              <h2 className="flex justify-between font-bold text-black text-xl my-4">
                To Pay <span>₹{totalToPay.toFixed(2)}</span>
              </h2>
            </div>
            <div className="mb-4">
              <button className="bg-green-500 hover:bg-green-700 hover:shadow-2xl text-white font-bold py-2 px-4 rounded-sm shadow-md">
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
