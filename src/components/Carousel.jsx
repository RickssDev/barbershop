import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import reseña1 from "../assets/prueba1.jpg";

export default function ReviewCarousel() {
  const reviews = [
    { nombre: "Carlos Mendoza", img: reseña1 },
    { nombre: "Ricardo Radilla", img: reseña1 },
    { nombre: "Manuel Serpias", img: reseña1 },
    { nombre: "Kevin Díaz", img: reseña1 },
    { nombre: "Luis Fernández", img: reseña1 },
  ];

  return (
    <div className="w-full px-4">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-black/70 p-6 rounded-xl text-white shadow-lg h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-center mb-5">
                {review.nombre}
              </h3>
              <img
                src={review.img}
                alt={`Reseña de ${review.nombre}`}
                className="w-full h-[250px] object-contian mx-auto border border-gray-400"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
