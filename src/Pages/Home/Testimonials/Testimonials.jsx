import React, { useEffect } from "react";
import SectionTitle from "../../Shared/sectionTitle/SectionTitle";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <section className="mt-10">
      <SectionTitle
        subHeading={"what our client say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper h-auto"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="px-24 py-6 text-center">
                <div className="flex items-center justify-center mb-6">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    //   onChange={setRating}
                    readOnly
                  />
                </div>
                <p className="mb-4">{review.details}</p>
                <p>{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
