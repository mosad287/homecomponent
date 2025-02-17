import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

function useGetProductDetails() {
  const { id } = useParams();
  const getProductDetails = () =>
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);

  const {
    isLoading,
    isError,
    error,
    data: Products,
  } = useQuery({
    queryKey: [`productDetails,${id}`],
    queryFn: getProductDetails,
    staleTime: 5000 * 1000,
    select: (data) => data.data.data,
  });

  return { isLoading, isError, error, Products };
}

export default useGetProductDetails;
