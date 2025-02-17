import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useGetProducts() {
  const getProducts = () =>
    axios.get("https://ecommerce.routemisr.com/api/v1/products");

  const {
    isLoading,
    isError,
    error,
    data: products,
    isFetching,
  } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
    staleTime: 5000 * 1000,
    select: (data) => data.data.data,
  });

  return { isLoading, isError, error, products, isFetching };
}

export default useGetProducts;
