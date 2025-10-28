import React, { useState, useEffect, useCallback, useMemo } from "react";
import myImage from "../assets/img/dbimage1.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Hero = () => {
  // --- Typing animation state ---
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = useMemo(
    () => ["Backend Developer", "Fullstack Developer", "Web3 Enthusiast"],
    []
  );
  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text.length, toRotate, period]);

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [delta, tick]);

  // --- Zoom animation for the image ---
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-white py-32"
    >
      {/* Left text area */}
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <div
            className={`md:w-1/2 space-y-6 text-center md:text-left mb-10 md:mb-0 transition-all duration-1000 ${
              isVisible ? "animate__animated animate__fadeInLeft" : ""
            }`}
          >
            <p className="text-orange-500 font-semibold uppercase tracking-wide font-raleway">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl md:text-6xl font-bold font-raleway leading-tight">
              Hi, I’m <span className="text-orange-500">Asim Patrick</span>{" "}
              <br />
              <span className="text-gray-300">
                {text}
                <span className="text-orange-500">|</span>
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-julius">
              A passionate and inquisitive Software Engineer with a keen
              interest in software development, API design, and creative
              problem-solving. I love turning ideas into functional, elegant
              digital solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-4 font-raleway">
              <a href="#contact">
                <button className="flex items-center bg-gradient-to-r from-orange-600 to-red-600 px-8 py-3 rounded-lg font-semibold shadow-lg shadow-orange-500/30 hover:scale-[1.03] transition-transform duration-300">
                  Let's Connect
                  {/* Inline SVG replacement for FaRegArrowAltCircleRight */}
                  <svg
                    className="ml-3 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </a>
              <a href="#projects">
                <button className="border border-gray-500 px-8 py-3 rounded-lg hover:bg-gray-800 transition font-medium">
                  View Projects
                </button>
              </a>
            </div>
          </div>
        )}
      </TrackVisibility>

      {/* Right image area (kept exactly as yours) */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={myImage}
          alt="Cloud Computing and Data Management"
          className={`
            w-[300px] md:w-[500px]
            object-contain 
            drop-shadow-2xl
            transition-all duration-1000 ease-out
            ${isMounted ? "scale-100 opacity-100" : "scale-75 opacity-0"}
          `}
        />
      </div>
    </section>
  );
};

export default Hero;
