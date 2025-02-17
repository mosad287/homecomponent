import { Spinner } from "flowbite-react";
import useGetProducts from "../../custom/useGetProducts";
import HomeProducts from "./HomeProducts";
import TopHome from "./TopHome";

function Home() {
  const { isLoading } = useGetProducts();

  return isLoading ? (
    <div className="w-full h-screen  bg-spinnerground flex flex-row items-center justify-center">
      <Spinner
        className="bg-slate-600 rounded-full"
        aria-label="Extra large spinner example"
        size="xl"
      />
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center">
      <TopHome />
      <HomeProducts />
    </div>
  );
}

export default Home;
