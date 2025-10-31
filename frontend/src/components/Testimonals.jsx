import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Umohi Inyang",
    role: "CEO Axum Technologies",
    quote:
      "As the boss, having Asim on the team was a wonderful experience! His attention to detail, attitude to work and coding practices made the entire work experience great.",
  },
  {
    name: "Micheal Ibukun",
    role: "Tech Lead",
    quote:
      "Asim delivers high-quality work under tight deadlines. His ability to turn ideas into functional products is impressive! I love working with him",
  },
  {
    name: "Faith Olamide",
    role: "Product Manager, InnovateX",
    quote:
      "I appreciate Asim's communication and dedication. He brings creativity and professionalism to every project he works on. Highly recommended!",
  },
];

// Helper function to get initials from name
const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

// Helper function to generate avatar background color based on name
const getAvatarColor = (name) => {
  const colors = [
    "from-orange-500 to-red-500",
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-teal-500",
    "from-yellow-500 to-orange-500",
    "from-indigo-500 to-purple-500",
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#0a0a0a] text-white py-20 px-6 md:px-10 lg:px-20 mx-auto max-w-7xl font-raleway"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-raleway">
          Testimo<span className="text-orange-500">nials</span>
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
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
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
            {/* Avatar with Initials */}
            <div
              className={`w-24 h-24 rounded-full mb-6 flex items-center justify-center bg-gradient-to-br ${getAvatarColor(
                t.name
              )} shadow-lg shadow-orange-500/30 border-4 border-gray-800`}
            >
              <span className="text-3xl font-bold font-raleway text-white">
                {getInitials(t.name)}
              </span>
            </div>

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
