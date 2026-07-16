import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Tilt from "react-parallax-tilt";

import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    name: "React.js",
    icon: <FaReact />,
    color: "text-cyan-500",
    level: "Advanced",
    years: "3+ yrs",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-black dark:text-white",
    level: "Intermediate",
    years: "2 yrs",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    level: "Advanced",
    years: "4+ yrs",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
    level: "Advanced",
    years: "3 yrs",
    gradient: "from-sky-400 to-blue-500",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "text-orange-500",
    level: "Intermediate",
    years: "2 yrs",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-600",
    level: "Intermediate",
    years: "2 yrs",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-700 dark:text-white",
    level: "Intermediate",
    years: "2 yrs",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-500",
    level: "Intermediate",
    years: "1.5 yrs",
    gradient: "from-green-400 to-green-600",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-600",
    level: "Advanced",
    years: "3+ yrs",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-black dark:text-white",
    level: "Advanced",
    years: "3+ yrs",
    gradient: "from-gray-800 to-gray-900",
  },
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = skills.length;

  return (
    <section
      id="skills"
      className="m px-4 rounded-2xl py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 relative">
            My Tech Stack
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6">
            Technologies I master to build modern, scalable, and stunning web
            applications.
          </p>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="!pb-2"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="!h-auto py-2">
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={300}
                  gyroscope={true}
                  className="h-full"
                >
                  <div
                    className="
                      group relative h-full rounded-3xl p-7
                      bg-white/70 dark:bg-gray-800/70 backdrop-blur-md
                      border border-white/30 dark:border-gray-700/30
                      shadow-xl hover:shadow-2xl
                      transition-all duration-500
                      hover:border-blue-400/50 dark:hover:border-blue-500/50
                      flex flex-col items-center text-center
                      overflow-hidden
                    "
                  >
                    {/* Animated gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                    />

                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${skill.gradient} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl`}
                    />

                    {/* Icon */}
                    <div
                      className={`relative z-10 text-6xl mb-4 transition-transform duration-500 ${skill.color} group-hover:scale-125 group-hover:rotate-12 group-hover:animate-bounce group-hover:[animation-duration:1.8s]`}
                    >
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <h3 className="relative z-10 text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {skill.name}
                    </h3>

                    {/* Level Badge */}
                    <span
                      className={`relative z-10 inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        skill.level === "Advanced"
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                      }`}
                    >
                      {skill.level}
                    </span>

                    {/* Years */}
                    <p className="relative z-10 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {skill.years} experience
                    </p>

                    {/* Decorative line */}
                    <div
                      className={`relative z-10 w-12 h-1 mt-4 rounded-full bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                  </div>
                </Tilt>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            aria-label="Previous skill"
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center text-blue-500 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ml-2 md:ml-4"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            aria-label="Next skill"
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center text-blue-500 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 mr-2 md:mr-4"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Custom Pagination — pure Tailwind, driven by React state instead of CSS overrides */}
          <div className="flex justify-center gap-2 mt-6">
            {skills.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 bg-blue-500 dark:bg-blue-400"
                    : "w-2 bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;