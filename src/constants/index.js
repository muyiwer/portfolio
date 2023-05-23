import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  xpress,
  marval,
  tcl,
  pfs,
  payxpress,
  xpresspay,
  paymentpage,
  threejs,
  advreact,
  udemy,
  da,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Azure/AWS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Frontend Developer",
    company_name: "Xpress Payment LTD",
    icon: xpress,
    iconBg: "#383E56",
    date: "February 2021 - Till date",
    points: [
      "Development of complex user interfaces for various web applications, mentoring junior developers, and collaborating with designers and back-end engineers to ensure seamless front-end and back-end systems integration.",
      "Responsible for implementing and maintaining high-quality code standards, following agile development methodologies, and conducting code reviews to ensure the best possible application performance, scalability, and maintainability.",
      "Developed a large-scale payment platform that increased online transactions by 25%.",
      "Improving the user experience, optimizing application performance, and ensuring that the applications are accessible and responsive across all devices.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company_name: "Marval Softwares",
    icon: marval,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Feb 2023",
    points: [
      "Rebuilt the old interface used with old technology to new technology.",
      "Improved the user experience which increased user rate on the application.",
      "Developed reusable and modular components that resulted in reduced development time and improved code maintainability.",
      "Developed and maintained user interfaces and collaborated with designers and back-end engineers to ensure seamless front-end and back-end systems integration.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Precise Financial Systems",
    icon: pfs,
    iconBg: "#383E56",
    date: "April 2019 - January 2021",
    points: [
      "Developed a scalable architecture for a high-traffic payment solution",
      "Integrated various third-party APIs to enhance the functionality of the applications.",
      "Developed and maintained full-stack applications using React, .Net, and related technologies.",
      "Optimizing the user experience, and staying up to date with the latest frontend and backend technologies and best practices.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Techspecialist Consulting LTD",
    icon: tcl,
    iconBg: "#E6DEDD",
    date: "May 2018 - March 2019",
    points: [
      "Developed responsive, accessible, and visually appealing user interfaces that resulted in improved user engagement and satisfaction.",
      "Developed a highly scalable and performant backend architecture for a high-traffic web application that resulted in improved application speed and reduced server costs.",
      "Developed and maintained full-stack applications using React, .Net, and related technologies.",
      "collaborate with designers, other developers, and project managers to ensure that the applications are scalable, maintainable, and meet business requirements.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Payxpress",
    description: `It is a web platform for purchasing airtime, make
      bill payments, make fund transfer to self or third-party beneficiaries, and set up
      recurring payment instructions. I was responsible for designing and implementing
      the user interface and collaborating with the backend developers to ensure seamless
      integration with the back-end systems. Over 300s bills is paid through this app daily
      and it has 94% success rate.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: ".Net",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: payxpress,
    source_code_link: "www.payxpress.com",
  },
  {
    name: "XpressPay",
    description: `It is a web platform that registers merchant businesses and helps
      merchants initiate e-commerce, in-app, and point of sale for various payment
      methods allowing their customers to securely transfer payments between XpressPay
      payment portal and the processor or acquiring bank. I was responsible for designing
      and implementing the user interface and collaborating with the backend developers
      to ensure seamless integration with the back-end systems. The app was launched
      successfully, resulting in a 25% increase in online transaction within the first month of
      its release. Customers praised the app for its ease of use, intuitive interface, and fast
      loading times.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: xpresspay,
    source_code_link: "https://myxpresspay.com/",
  },
  {
    name: "Xpress Single Sign On",
    description: `XpressPayments merchants and merchants’ customer uses this application to
      securely authenticate with multiple XpressPayments web and mobile applications by
      using just one set of credentials. I was responsible for designing and implementing
      the user interface and collaborating with the backend developers to ensure seamless
      integration with the back-end systems. Over 5000s users are authenticated on this
      application.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: paymentpage,
    source_code_link: "https://myxpresspay.com:6003/GeqkCsrFET6HY",
  },
];

const certification = [
  {
    name: "Advance React for Enterprise: React for Senior Engineers",
    image: advreact,
    issuingOrganization: "Udemy",
    url: "https://www.udemy.com/certificate/UC-2752a1a5-e733-47df-8258-a9a96f1cb87c/",
    date: "Feb 2023",
    logo: udemy,
  },
  {
    name: "JavaScript Data Structure and Algorithm",
    image: da,
    issuingOrganization: "Udemy",
    url: "https://www.udemy.com/certificate/UC-2752a1a5-e733-47df-8258-a9a96f1cb87c/",
    date: "Mar 2023",
    logo: udemy,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certification,
};
