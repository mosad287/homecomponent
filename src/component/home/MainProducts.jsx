import { FaStar, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAddProduct from "../../custom/useAddProduct";
import { Spinner } from "flowbite-react";

function MainProducts({ product }) {
  const navigate = useNavigate();
  const { addProduct, lodingAdd } = useAddProduct();

  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 px-4 p-6 group overflow-hidden hover:shadow-2xl shadow-black cursor-pointer">
      <div onClick={() => navigate(`/productdetails/${product.id}`)}>
        <img
          src={product.imageCover}
          alt="error"
          className="w-full object-cover"
        />
        <h1 className="mt-2 mb-4 text-green-600">{product.category.name}</h1>
        <h1 className="font-medium mb-2">
          {product.title.split(" ", 3).join(" ")}
        </h1>
        <div className="flex flex-row items-center justify-between mb-3">
          <h1>{product.price} EGP</h1>
          <h1 className="flex flex-row items-center gap-2">
            <FaStar className="text-[20px] text-yellow-400" />{" "}
            {product.ratingsAverage}
          </h1>
        </div>
        <h1 className="text-[25px]">
          <FaHeart className="ml-auto" />
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center mt-2 translate-y-20 group-hover:translate-y-0 transition-all duration-500">
        <button
          onClick={() => addProduct(product.id)}
          className="w-3/4 py-3 rounded-[6px] bg-green-600 text-white"
        >
          {lodingAdd ? (
            <Spinner aria-label="Default status example" />
          ) : (
            "+ Add"
          )}
        </button>
      </div>
    </div>
  );
}

export default MainProducts;
