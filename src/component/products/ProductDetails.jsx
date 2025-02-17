import { Spinner } from "flowbite-react";
import useGetProductDetails from "../../custom/useGetProducDetails";
import { FaStar, FaHeart } from "react-icons/fa";
import useAddProduct from "../../custom/useAddProduct";

function ProductDetails() {
  const { addProduct, lodingAdd } = useAddProduct();
  const { isLoading, isError, error, Products } = useGetProductDetails();

  if (isError) {
    return <p className="text-center text-[20px] py-20">{error}</p>;
  }

  return isLoading ? (
    <div className="w-full h-screen  bg-spinnerground flex flex-row items-center justify-center">
      <Spinner
        className="bg-slate-600 rounded-full"
        aria-label="Extra large spinner example"
        size="xl"
      />
    </div>
  ) : (
    <div className="flex flex-row items-center justify-center">
      <div className="grid grid-cols-12 py-10 w-full sm:w-[90%] md:w-[80%]">
        <div className="col-span-12 md:col-span-4">
          <img src={Products?.imageCover} alt="error" className="w-full" />
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col justify-center gap-4 px-4">
          <h1 className="text-[30px] font-medium">{Products?.title}</h1>
          <p>{Products?.description}</p>
          <div className="flex flex-row items-center justify-between mb-3">
            <h1>{Products?.price} EGP</h1>
            <h1 className="flex flex-row items-center gap-2">
              <FaStar className="text-[20px] text-yellow-400" />{" "}
              {Products?.ratingsAverage}
            </h1>
          </div>
          <div className="flex flex-row items-center justify-between">
            <button
              onClick={() => addProduct(Products?._id)}
              className="w-3/4 py-3 rounded-[6px] bg-green-600 text-white"
            >
              {lodingAdd ? (
                <Spinner aria-label="Default status example" />
              ) : (
                "+ Add"
              )}
            </button>
            <FaHeart className="text-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
