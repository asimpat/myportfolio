import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { skills } from "./data";

// Helper function to calculate the dash-offset for the circular progress
// Formula: Circumference * (1 - percentage / 100)
const getCircleOffset = (percentage, radius) => {
  const circumference = 2 * Math.PI * radius;
  return circumference * (1 - percentage / 100);
};

const Skills = () => {
  const radius = 60; // Radius of the circle in px
  const circumference = 2 * Math.PI * radius;

  return (
    <section
      id="skills"
      className="py-20 bg-gray-900 text-white border-t border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-4 text-center">
        {/* Header Section */}
        <div className="mb-12 font-raleway">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">
            A dynamic view of my proficiency across key technologies.
          </p>
        </div>

        {/* Swiper Carousel for Sliding Skills */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          // Responsive settings: 1, 2, or 3 circles per view
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="pb-16" // Add padding bottom for pagination dots
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="flex flex-col items-center bg-gray-900 p-8 font-raleway rounded-xl h-full border border-gray-700 hover:border-orange-500 transition-colors duration-300">
                {/* Circular Progress Bar (SVG) */}
                <div className="relative w-32 h-32 mb-6">
                  <svg
                    viewBox="0 0 140 140"
                    className="w-full h-full transform -rotate-90"
                  >
                    {/* Background Circle */}
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      className="text-gray-700 stroke-current"
                      strokeWidth="10"
                      fill="none"
                    />

                    {/* Foreground Progress Arc */}
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      className="stroke-current transition-all duration-1000 ease-out"
                      strokeWidth="10"
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        color: skill.color || "#F97316", // Use skill-specific color or default orange
                        strokeDasharray: circumference,
                        // This is the core logic: hides the arc based on percentage
                        strokeDashoffset: getCircleOffset(
                          skill.percentage,
                          radius
                        ),
                      }}
                    />
                  </svg>

                  {/* Percentage Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                    <span className="text-orange-500">{skill.percentage}%</span>
                  </div>
                </div>

                {/* Skill Name */}
                <h4 className="text-2xl font-semibold mt-2">{skill.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
