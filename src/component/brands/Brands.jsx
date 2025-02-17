import { Spinner } from "flowbite-react";
import useGetBrands from "../../custom/useGetBrands";
import MainBrand from "./MainBrand";

function Brands() {
  const { isLoading, isError, error, brands } = useGetBrands();

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
    <div className="flex flex-col items-center justify-center my-20 ">
      <h1 className="text-[40px] text-center text-green-600 font-bold">
        All Brands
      </h1>
      <div className="grid w-full sm:w-[85%] px-4 grid-cols-12 ">
        {brands?.map((brand) => (
          <MainBrand key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
}

export default Brands;
