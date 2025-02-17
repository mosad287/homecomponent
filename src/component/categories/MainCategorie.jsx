function MainCatigorie({ categorie }) {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 px-4 p-6 ">
      <div className="border-[1px] border-solid border-gray-200 rounded-[5px]  hover:shadow-2xl shadow-black cursor-pointer">
        <img
          src={categorie.image}
          alt="error"
          className="w-full h-[350px] object-cover rounded-[5px]"
        />
        <h1 className="text-[25px] text-center py-5 text-green-600">
          {categorie.name}
        </h1>
      </div>
    </div>
  );
}

export default MainCatigorie;
