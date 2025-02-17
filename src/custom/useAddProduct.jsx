import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function useAddProduct() {
  const [lodingAdd, setLodingAdd] = useState(false);

  async function addProduct(id) {
    try {
      setLodingAdd(true);
      let res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          productId: id,
        },
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );
      setLodingAdd(false);
      toast.success(res.data.message, {
        position: "top-right",
        duration: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return { addProduct, lodingAdd };
}

export default useAddProduct;
