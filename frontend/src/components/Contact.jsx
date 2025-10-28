import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaTwitter,
} from "react-icons/fa";
import { contact } from "./data";

const Contact = () => (
  <section
    id="contact"
    className="py-20 bg-[#0a0a0a] text-white font-raleway relative overflow-hidden"
  >
    {/* Decorative gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5 pointer-events-none"></div>

    <div className="max-w-4xl mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-raleway">
          Get in <span className="text-orange-500">Touch</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-raleway">
          I'd love to hear from you! Whether it's a project, job opportunity, or
          just a chat — let's connect and create something amazing together.
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 md:p-12 shadow-2xl shadow-orange-500/5 hover:border-orange-500/50 transition-all duration-300">
        {/* Contact Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Email Card */}
          <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500/10 p-3 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                <FaEnvelope className="text-orange-500 text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-400 mb-2 font-raleway uppercase tracking-wide">
                  Email
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white hover:text-orange-500 transition-colors font-raleway font-medium break-all"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          {contact.phone && (
            <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/10 p-3 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <FaPhone className="text-orange-500 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-400 mb-2 font-raleway uppercase tracking-wide">
                    Phone
                  </h3>
                  <p className="text-white font-raleway font-medium">
                    {contact.phone}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Social Links Section */}
        <div className="border-t border-gray-800 pt-8">
          <h3 className="text-center text-gray-400 font-raleway font-semibold mb-6 uppercase tracking-wide text-sm">
            Connect With Me
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a0a0a] p-4 rounded-xl border border-gray-800 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-gray-300 text-2xl group-hover:text-orange-500 transition-colors" />
            </a>
            <a
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a0a0a] p-4 rounded-xl border border-gray-800 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <FaTwitter className="text-gray-300 text-2xl group-hover:text-orange-500 transition-colors" />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a0a0a] p-4 rounded-xl border border-gray-800 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <FaGithub className="text-gray-300 text-2xl group-hover:text-orange-500 transition-colors" />
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 rounded-lg font-semibold shadow-lg shadow-orange-500/30 hover:scale-[1.03] transition-transform duration-300 font-raleway"
          >
            <FaPaperPlane className="mr-3" />
            Send Me a Message
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-center text-gray-500 mt-10 font-raleway text-sm">
        Available for freelance opportunities and full-time positions
      </p>
    </div>
  </section>
);

export default Contact;
