import { content } from "../Content";

const Services = () => {
  const { experiences } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {experiences.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {experiences.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {experiences.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              {/* <img src={content.logo} alt="..." className="mx-auto" /> */}
              <h2 className="text-3xl">{content.company}</h2>
              <h6 className="mt-3">{content.title}</h6>
              <p className="mb-2">{content.date}</p>
              <p className="leading-7">{content.para1}</p>
              <p className="leading-7">{content.para2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
