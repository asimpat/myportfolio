import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Working with Asim was a wonderful experience! His attention to detail and clean coding practices made the entire process smooth and enjoyable.",
  },
  {
    name: "Michael Smith",
    role: "Tech Lead, DevBase",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Asim delivers high-quality work under tight deadlines. His ability to turn ideas into functional products is impressive!",
  },
  {
    name: "Sophia Johnson",
    role: "Product Manager, InnovateX",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "I appreciate Asim's communication and dedication. He brings creativity and professionalism to every project he works on.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#0a0a0a] text-white py-20 px-6 md:px-10 lg:px-20 mx-auto max-w-7xl font-raleway"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-raleway">
          Happy Clients <span className="text-orange-500">Say</span>
        </h2>
        <p className="text-gray-400 mt-3 font-raleway">
          Here's what people have to say about working with me.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          // Extra Small screens (mobile)
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // Medium screens (tablet)
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // Large screens (desktop)
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center text-center p-4 sm:p-6 bg-gray-900 rounded-xl"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 rounded-full mb-6 border-4 border-orange-500 shadow-lg shadow-orange-500/30"
            />
            <p className="text-base md:text-lg italic text-gray-300 mb-4 font-raleway">
              "{t.quote}"
            </p>
            <h4 className="text-xl font-semibold font-raleway">{t.name}</h4>
            <p className="text-sm text-gray-500 font-raleway">{t.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
