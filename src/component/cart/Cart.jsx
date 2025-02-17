import axios from "axios";
import MainCart from "./mainCart";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart/CartContext";
import { LoginContext } from "../../context/login/LoginContext";

function Cart() {
  const { checkUpdateCart, setCheckUpdateCart, setCartLength } =
    useContext(CartContext);
  const { setLoading } = useContext(LoginContext);
  const [cart, setCart] = useState(null);

  // -------------------  get cart  ----------------------------//

  async function getCart() {
    try {
      setLoading(true);
      await axios
        .get("https://ecommerce.routemisr.com/api/v1/cart", {
          headers: { token: localStorage.getItem("userToken") },
        })
        .then((data) => {
          setCart(data.data.data);
          setCartLength(data.data.data.products.length);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // -------------------  cler cart  ----------------------------//

  async function clearCart() {
    try {
      setLoading(true);
      await axios
        .delete("https://ecommerce.routemisr.com/api/v1/cart", {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        })
        .then(() => setCheckUpdateCart(!checkUpdateCart));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCart();
  }, [checkUpdateCart]);

  return (
    <div className="flex flex-row items-center justify-center px-4 pt-20">
      <div className="w-full flex flex-col gap-4 sm:w-[90%] md:w-[85%]  bg-gray-100 py-10 px-5 rounded-[10px]">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[30px] font-medium">Cart Shop</h1>
          <button
            disabled={cart?.products.length ? false : true}
            className="bg-blue-600 py-2 px-4 rounded-[8px] text-[18px] text-white"
          >
            Check out
          </button>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[20px]">
            Total price :{" "}
            <span className="text-green-600">{cart?.totalCartPrice}</span>
          </h1>
          <h1 className="text-[20px]">
            Total number of item :{" "}
            <span className="text-green-600">{cart?.products.length}</span>
          </h1>
        </div>

        {cart?.products.map((product, index) => (
          <MainCart key={index} product={product} />
        ))}

        <div className="flex flex-row items-center justify-center">
          <button
            disabled={cart?.products.length ? false : true}
            onClick={clearCart}
            className="px-6 py-2 text-[20px] text-green-600 border-solid border-green-600 border-[1px] rounded-[8px] hover:bg-green-600 hover:text-white"
          >
            Clear Your cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
