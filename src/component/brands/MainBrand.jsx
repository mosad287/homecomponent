import { useState } from "react";
import BrandDetails from "./BrandDetails";

function MainBrand({ brand }) {
  const [brandId, setBrandId] = useState(null);
  const [check, setCheck] = useState(true);

  function brandDetails(brandId) {
    setBrandId(brandId);
    setCheck(false);
  }

  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3  px-4 p-6 ">
      <div
        onClick={() => brandDetails(brand._id)}
        className="border-[1px] border-solid border-gray-200 rounded-[5px]  hover:shadow-2xl shadow-black cursor-pointer"
      >
        <img
          src={brand.image}
          alt="error"
          className="w-full h-[200px] object-cover rounded-[5px]"
        />
        <h1 className="text-[15px] text-center py-5">{brand.name}</h1>
      </div>
      {!check && (
        <BrandDetails brandId={brandId} check={check} setCheck={setCheck} />
      )}
    </div>
  );
}

export default MainBrand;
