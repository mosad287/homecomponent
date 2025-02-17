import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useGetBrands() {
  const getBrands = () =>
    axios.get("https://ecommerce.routemisr.com/api/v1/brands");

  const {
    isLoading,
    isError,
    error,
    data: brands,
  } = useQuery({
    queryKey: ["getPrands"],
    queryFn: getBrands,
    staleTime: 5000 * 1000,
    select: (data) => data.data.data,
  });

  return { isLoading, isError, error, brands };
}

export default useGetBrands;
