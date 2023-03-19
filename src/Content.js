// import images
import Hero_person from "./assets/images/Hero/me.png";

import redux from "./assets/images/Skills/redux.png";
import express from "./assets/images/Skills/express.png";
import knex from "./assets/images/Skills/knex.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import pg from "./assets/images/Skills/pg.png";
import git from "./assets/images/Skills/git.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/food.jpg";
import project2 from "./assets/images/Projects/ecommerce.jpg";
import project3 from "./assets/images/Projects/chat.jpg";
// import person_project from "./assets/images/projects/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Emerging Software Engineer",
    firstName: "SUJAN",
    LastName: "GAUTAM",
    bio: "Coding Aficionado and Enthusiast to Learn",
    btnText: "Download CV",
    image: Hero_person,
    hero_content: [
      {
        count: "1.5+",
        text: "Years of Experience in Software Development",
      },
      // {
      //   count: "5+",
      //   text: "Projects Worked in my career",
      // },
    ],
  },
  skills: {
    title: "Technologies and Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Redux",
        para: "Lorem ipsum text  dummy",
        logo: redux,
      },
      {
        name: "Express js",
        para: "Lorem ipsum text  dummy",
        logo: express,
      },
      {
        name: "Postgresql",
        para: "Lorem ipsum text  dummy",
        logo: pg,
      },
      {
        name: "Knex Js",
        para: "Lorem ipsum text  dummy",
        logo: knex,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
    ],
    icon: MdArrowForward,
  },
  experiences: {
    title: "Experiences",
    subtitle: "WHERE I HAVE WORKED",
    service_content: [
      {
        company: "Real Time Solutions Pvt Ltd",
        title: "Junior Full Stack Software Developer",
        para1: "- Maintenance and Development of QMS Project",
        para2: "- Real Time Projects and Dashboards",
        logo: services_logo1,
        date: "December 2021 - March 2023"
      },
      {
        company: "Real Time Solutions Pvt Ltd",
        title: "Software Developer Intern",
        para1: "- Basic to Intermediate React and Node projects ",
        para2: "- Working with PostgreSQL Database and Knex Query Builder",
        logo: services_logo2,
        date: "November 2021 - December 2021"
      },
      {
        company: "Sayami Technology",
        title: "Front End Intern",
        para1: "- Basic to Intermediate HTML, CSS and Frameworks",
        para2: "- Website Design and Development",
        logo: services_logo3,
        date: "September 2021 - November 2021"
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Food Delivery App",
        image: project1,
      },
      {
        title: "Ecommerce Project",
        image: project2,
      },
      {
        title: "Chat Application",
        image: project3,
      },
    ],
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "Sujan Gautam",
        icon: BsGithub,
        link: "https://www.github.com/sujan66root",
      },
      {
        text: "sujan.rock45@gmail.com",
        icon: GrMail,
        link: "mailto:sujan.rock45@gmail.com",
      },
      {
        text: "Sujan Gautam",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/sujan-gautam-3b3a74220/",
      },
      {
        text: "suj_aan",
        icon: BsInstagram,
        link: "https://www.instagram.com/suj_aan",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
