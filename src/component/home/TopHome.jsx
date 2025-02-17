import fixed_1 from "../../imges/grocery-banner.png";
import fixed_2 from "../../imges/grocery-banner-2.jpeg";
import slider_1 from "../../imges/slider-image-1.jpeg";
import slider_2 from "../../imges/slider-image-2.jpeg";
import slider_3 from "../../imges/slider-image-3.jpeg";
import Slider from "react-slick";
import useGetCategories from "../../custom/useGetCategories";

function TopHome() {
  const { categories } = useGetCategories();

  let settings1 = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[100%] px-7 mt-20">
      <div className="w-[100%] md:w-[60%] px-7 grid grid-cols-12 mx-auto gap-4">
        <div className="col-span-12 sm:col-span-6 mb-4">
          <Slider {...settings1}>
            <div>
              <img src={slider_1} alt="error" width="100%" />
            </div>
            <div>
              <img src={slider_2} alt="error" width="100%" />
            </div>
            <div>
              <img src={slider_3} alt="error" width="100%" />
            </div>
          </Slider>
        </div>
        <div className="col-span-12 sm:col-span-6 flex flex-col items-center justify-center">
          <img src={fixed_1} alt="error" width="100%" />
          <img src={fixed_2} alt="error" width="100%" />
        </div>
      </div>
      <div className="py-10 slider-container">
        <Slider {...settings2}>
          {categories?.map((categorie) => (
            <div key={categorie._id}>
              <img
                src={categorie.image}
                alt="error"
                className="w-full h-[250px] "
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TopHome;
