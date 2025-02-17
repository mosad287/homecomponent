import { Spinner } from "flowbite-react";
import useGetCategories from "../../custom/useGetCategories";
import MainCatigorie from "./MainCategorie";

function Categories() {
  const { isLoading, isError, error, categories } = useGetCategories();

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
      <div className="grid w-full sm:w-[85%] my-20 px-4 grid-cols-12 ">
        {categories?.map((categorie) => (
          <MainCatigorie key={categorie._id} categorie={categorie} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
