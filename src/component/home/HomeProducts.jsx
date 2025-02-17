import { TextInput } from "flowbite-react";
import useGetProducts from "../../custom/useGetProducts";
import MainProducts from "./MainProducts";

function HomeProducts() {
  const { isError, error, products } = useGetProducts();

  if (isError) {
    return <p className="text-center text-[20px] py-20">{error}</p>;
  }

  return (
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
  );
}

export default HomeProducts;
