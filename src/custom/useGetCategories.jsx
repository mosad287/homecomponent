import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useGetCategories() {
  const getCategories = () =>
    axios.get("https://ecommerce.routemisr.com/api/v1/categories");

  const {
    isLoading,
    isError,
    error,
    data: categories,
    isFetching,
  } = useQuery({
    queryKey: ["getcategories"],
    queryFn: getCategories,

    staleTime: 5000 * 1000,
    select: (data) => data.data.data,
  });

  return { isLoading, isError, error, categories, isFetching };
}

export default useGetCategories;
