import React from "react";
import { FaCode, FaGithub, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";
import { projects } from "./data";

const Projects = () => (
  <section
    id="projects"
    className="py-20 bg-[#0a0a0a] text-white border-t border-b border-gray-800 font-raleway"
  >
    <div className="max-w-7xl mx-auto px-6">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center font-raleway">
        My <span className="text-orange-500">Projects</span>
      </h2>

      {/* Projects Grid - 3 per row on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Conditional Image or Placeholder */}
            {project.imgUrl ? (
              <img
                src={project.imgUrl}
                alt={project.title}
                className="w-full h-48 object-cover object-top"
              />
            ) : (
              <div className="w-full h-48 flex flex-col items-center justify-center bg-gray-800 p-4 text-gray-500">
                <FaCode className="text-5xl mb-3 text-orange-500" />
                <p className="text-center font-semibold font-raleway">
                  API Documentation Available
                </p>
                <p className="text-sm font-raleway">
                  No dedicated website preview.
                </p>
              </div>
            )}

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 font-raleway">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed font-raleway">
                {project.description}
              </p>

              {/* Action Links */}
              <div className="flex flex-wrap gap-3 mt-4">
                {/* Live Demo */}
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium bg-orange-600 px-3 py-1.5 rounded-lg hover:bg-orange-700 transition font-raleway"
                  >
                    <FaExternalLinkAlt className="mr-2 text-xs" />
                    Live Demo
                  </a>
                )}

                {/* API Docs */}
                {project.docsUrl && (
                  <a
                    href={project.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium border border-orange-500 text-orange-500 px-3 py-1.5 rounded-lg hover:bg-orange-500 hover:text-white transition font-raleway"
                  >
                    <FaFileAlt className="mr-2 text-xs" />
                    API Docs
                  </a>
                )}

                {/* GitHub */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-400 px-3 py-1.5 rounded-lg hover:text-white hover:bg-gray-700 transition font-raleway"
                  >
                    <FaGithub className="mr-2 text-xs" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
