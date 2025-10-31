import React, { useState, useEffect, useCallback, useMemo } from "react";
import myImage from "../assets/img/dbimage1.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ResumePDF from "../assets/doc/Asim_Resume.pdf";

const Hero = () => {
  // --- Typing animation state ---
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = useMemo(
    () => ["Backend Developer", "Fullstack Developer"],
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
      className="min-h-screen bg-[#0a0a0a] flex items-center px-6 md:px-12 lg:px-20 text-white py-32"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left text area */}
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div
              className={`space-y-6 text-center md:text-left transition-all duration-1000 ${
                isVisible ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <p className="text-orange-500 font-semibold uppercase tracking-wide font-raleway">
                Welcome to my portfolio
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway leading-tight">
                Hi, I'm <span className="text-orange-500">Asim Patrick</span>{" "}
                <br />
                <span className="text-gray-300">
                  {text}
                  <span className="text-orange-500">|</span>
                </span>
              </h1>

              <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed font-raleway">
                A driven Software Engineer specializing in backend development
                with Django and Python. Expert in building robust APIs,
                designing efficient databases, and architecting scalable
                systems. With fullstack capabilities and a passion for clean
                code, I transform complex problems into elegant, user-centric
                digital solutions that deliver real impact.
              </p>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start pt-4 font-raleway">
                <a href={ResumePDF} download className="w-full md:w-auto">
                  <button className="w-full md:w-auto flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 px-8 py-3 rounded-lg font-semibold shadow-lg shadow-orange-500/30 hover:scale-[1.03] transition-transform duration-300 text-white">
                    Download Resume
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-3 w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                      />
                    </svg>
                  </button>
                </a>

                <a href="#contact" className="w-full md:w-auto">
                  <button className="w-full md:w-auto flex items-center justify-center border border-gray-500 px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold text-gray-200">
                    Let's Connect
                  </button>
                </a>
              </div>
            </div>
          )}
        </TrackVisibility>

        {/* Right image area */}
        <div className="flex justify-center md:justify-end">
          <img
            src={myImage}
            alt="Cloud Computing and Data Management"
            className={`
              w-[280px] md:w-[400px] lg:w-[500px]
              object-contain 
              drop-shadow-2xl
              transition-all duration-1000 ease-out
              ${isMounted ? "scale-100 opacity-100" : "scale-75 opacity-0"}
            `}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
