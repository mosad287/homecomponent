import { Spinner, TextInput } from "flowbite-react";
import useGetProducts from "../../custom/useGetProducts";
import MainProducts from "../home/MainProducts";

function Products() {
  const { isLoading, isError, error, products } = useGetProducts();

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
      <div className="w-full sm:w-[85%] my-20 px-4">
        <div className="w-full flex flex-row items-center justify-center">
          <TextInput
            placeholder="search..."
            type="text"
            required
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-12 w-full ">
          {products?.map((product) => (
            <MainProducts key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
