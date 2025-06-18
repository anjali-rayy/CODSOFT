import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base md:text-lg font-medium">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0 hidden sm:block"></div>

        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={experience.id}
              className="relative flex flex-col sm:flex-row items-center mb-20"
            >
              {/* Left Column (for even index) */}
              <div className={`sm:w-1/2 ${isLeft ? "sm:pr-8" : "sm:hidden"}`}></div>

              {/* Timeline Dot */}
              <div className="absolute sm:static left-1/2 transform -translate-x-1/2 sm:translate-x-0 z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border-4 border-[#8245ec] overflow-hidden flex justify-center items-center shadow-lg">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className={`w-full sm:w-1/2 sm:px-8 mt-10 sm:mt-0 ${
                  isLeft ? "sm:order-none" : "sm:order-first"
                }`}
              >
                <div className="bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-2xl border border-white backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {experience.role}
                      </h3>
                      <h4 className="text-sm text-gray-300">
                        {experience.company}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{experience.date}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-400 text-sm">{experience.desc}</p>
                  <div className="mt-3">
                    <h5 className="font-medium text-white text-sm">Skills:</h5>
                    <ul className="flex flex-wrap mt-2">
                      {experience.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="bg-[#8245ec] text-white text-xs px-3 py-1 rounded-lg mr-2 mb-2 border border-gray-400"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column (for odd index) */}
              <div className={`sm:w-1/2 ${!isLeft ? "sm:pl-8" : "sm:hidden"}`}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
