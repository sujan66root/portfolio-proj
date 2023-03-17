// import content
import { createElement, useRef } from "react";
import { content } from "../Content";
import CV from '../assets/images/Hero/CV.pdf'

const Hero = () => {
  const { hero, Contact } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10">
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-36 pr-6 pt-5 -ml-36" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <h4>{hero.bio}</h4>
          <br />
          <div className="flex ml-96 justify-around">
            <a className="font-medium px-7 cursor-pointer inline-block px-4 py-2 border rounded-md rounded-br-3xl text-black bg-white-500 hover:bg-red-600 hover:text-white transition-colors duration-300 ease-in-out" href={CV} download="CV.pdf">Download Resume</a>
          </div>
          <div className="flex-1 flex flex-row gap-4 justify-end mr-36 mt-3">
            {Contact.social_media.map((content, i) => (
              <div key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-1">
                <a className="font-Poppins" href={content.link} target="_blank">
                  <p className="text-xl">{createElement(content.icon)}</p>
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[46rem] h-96 -ml-36">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
