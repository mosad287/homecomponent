import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

function BrandDetails({ brandId, check, setCheck }) {
  const [brandDetails, setBrandDatails] = useState(null);

  async function getBrandDetails() {
    const res = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/brands/${brandId}`
    );
    setBrandDatails(res.data.data);
  }

  useEffect(() => {
    getBrandDetails();
  }, []);

  return (
    <div
      className={`w-full h-screen bg-spinnerground ${
        check ? "hidden" : "flex"
      }  flex-row items-center justify-center fixed top-0 bottom-0 right-0 left-0`}
    >
      <div className="w-full sm:w-[70%] md:w-[60%] bg-white rounded-[6px]">
        <h1 className="text-[30px] text-gray-500 my-2 mr-2">
          <IoMdClose
            className="ml-auto cursor-pointer"
            onClick={() => setCheck(true)}
          />
        </h1>
        <hr />
        <div className="grid grid-cols-12 items-center justify-center px-6">
          <div className="col-span-12 sm:col-span-6 ml-4">
            <h1 className="text-[40px] text-green-600 font-medium">
              {brandDetails?.name}
            </h1>
            <h1 className="text-[20px]">{brandDetails?.slug}</h1>
          </div>
          <div className="col-span-12 sm:col-span-6">
            <img
              src={brandDetails?.image}
              alt="error"
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-row items-center justify-end pr-2">
          <button
            onClick={() => setCheck(true)}
            className="bg-gray-600 text-white px-4 py-2 rounded-[6px] my-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default BrandDetails;
