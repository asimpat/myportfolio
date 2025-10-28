import { experiences } from "./data";

const Experience = () => (
  <section
    id="experience"
    className="py-20 bg-gray-900 text-white border-t border-b border-gray-800 font-raleway"
  >
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center font-raleway">
        Work <span className="text-orange-500">Experience</span>
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 bg-[#0a0a0a] rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:shadow-2xl hover:shadow-orange-500/10"
          >
            <h3 className="text-2xl font-semibold text-orange-400 font-raleway">
              {exp.title}
            </h3>
            <p className="text-gray-400 mt-1 font-raleway">
              {exp.company} •{" "}
              <span className="text-sm italic">{exp.period}</span>
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed font-raleway">
              {exp.description}
            </p>

            {/* Skills Pills */}
            <div className="flex flex-wrap mt-4 pt-4 border-t border-gray-700/50 gap-2">
              {exp.skills_list.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-orange-300 border border-gray-700 px-3 py-1 rounded-full text-xs font-medium font-raleway"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Experience;
