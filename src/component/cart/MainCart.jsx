import axios from "axios";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CartContext } from "../../context/cart/CartContext";
import { LoginContext } from "../../context/login/LoginContext";

function MainCart({ product }) {
  const { setCheckUpdateCart, checkUpdateCart } = useContext(CartContext);
  const { setLoading } = useContext(LoginContext);

  //--------------------  delete item  --------------------------//
  async function deleteItem(id) {
    try {
      setLoading(true);

      await axios
        .delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
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

  //--------------------  update item  --------------------------//

  async function updateItem(id, count) {
    try {
      await axios
        .put(
          `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
          {
            count,
          },
          {
            headers: {
              token: localStorage.getItem("userToken"),
            },
          }
        )
        .then(() => setCheckUpdateCart(!checkUpdateCart));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-12 gap-4 my-4">
      <div className="col-span-12 sm:col-span-2 ">
        <img
          src={product.product.imageCover}
          alt="error"
          className="w-full object-cover"
        />
      </div>
      <div className="col-span-12 sm:col-span-10 flex flex-row items-center justify-between ">
        <div className="flex flex-col gap-2">
          <h1 className="text-[20px] font-medium">
            {product.product.title.split(" ", 2).join(" ")}
          </h1>
          <h1 className="text-[20px] font-medium">{product.price} EGP</h1>
          <h1
            onClick={() => deleteItem(product.product.id)}
            className="text-red-600 flex flex-row items-center justify-start gap-2 cursor-pointer"
          >
            <MdDelete /> <span>Remove</span>
          </h1>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => updateItem(product.product.id, product.count + 1)}
            className="p-2 px-3 border-solid border-[1px] border-green-600 rounded-[5px]"
          >
            +
          </button>
          <h1>{product.count}</h1>
          <button
            onClick={() => updateItem(product.product.id, product.count - 1)}
            disabled={product.count > 1 ? false : true}
            className="p-2 px-3 border-solid border-[1px] border-green-600 rounded-[5px]"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainCart;
