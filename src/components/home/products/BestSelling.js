import React, { useEffect, useState } from "react";
import Product from "../../product/product";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const BestSelling = (props) => {
  const [widths, setWidths] = useState(0);
  const products = props.products.sort((a, b) => {
    if (a.star > b.star) return -1;
    return 1;
  });

  // responsive swiper
  useEffect(() => {
    function handleResize() {
      setWidths(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    window.addEventListener("mouseover", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      window.removeEventListener("mouseover", handleResize);
    };
  }, []);

  return (
    <section className="bg-blue-50">
      <div className="md:w-9/12 w-11/12 mx-auto py-7">
        <h1 className="text-3xl py-5 text-center font-medium">Top Selling.</h1>

        <Swiper
          slidesPerView={`${widths < 780 ? 1 : 3}`}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className=" py-2 grid  md:grid-cols-3 gap-2  sm:grid-cols-2 grid-cols-1">
            {products?.slice(0, 6).map((product) => (
              <SwiperSlide key={product._id}>
                <Product topSelling={true} product={product}></Product>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default BestSelling;
