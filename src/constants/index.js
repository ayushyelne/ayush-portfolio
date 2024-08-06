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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import imaginify from "../assets/imaginify.png";
import stock from "../assets/stock.png";
import attendance from "../assets/attendance.png";
import traderware from "../assets/company/traderware.png";
import kintsugi from "../assets/company/kintsugi.png";
import edusoft from "../assets/company/edusoft.png";
import brandpreneur from "../assets/company/brandpreneur.png";

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
    title: "Mobile Application Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
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
    title: "Data Science Intern",
    company_name: "Traderware",
    icon: traderware,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Designed and implemented a comprehensive backtesting system for stock trading strategies using Python and yfinance.",
      "Calculated key performance metrics such as cumulative returns, maximum drawdown, and annualized volatility to evaluate the effectiveness of trading strategies.",
      "Incorporated stop-loss functionality to manage risk and improve trading performance.",
      "Developed a backtesting engine for customizable trading strategies with dynamic buy/sell signals.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Kintsugi Global",
    icon: kintsugi,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Developed the backend for the company’s online store using Node.js and Express.js, reducing server response time by 30% and improving overall site performance.",
      "Collaborated on the front-end development by creating React components with React.js and Tailwind CSS, enhancing user interface responsiveness and reducing page load time by 15%.",
      "Integrated Stripe payment gateway into the store’s website, resulting in a 20% increase in successful transactions and a smoother user payment experience.",
      "Automated CI/CD pipelines and deployed on AWS, reducing deployment time by 40% and ensuring 99.9% uptime.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Future Fitness Technology",
    icon: brandpreneur,
    iconBg: "#ffffff",
    date: "June 2022 - Dec 2022",
    points: [
      "Engineered an agile development approach for the company’s website using React, Node.js, and MongoDB; increased traffic by 30% and reduced server response time by 50%, significantly improving site performance..",
      "Built RESTful APIs with Node.js and Express.js to optimize client-server communication; reduced API response time by 40% and increased scalability to handle 2x more users concurrently.",
      "Implemented CI/CD pipelines with Jenkins, using Docker and Kubernetes for scalable microservices architecture.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "OCC Edusoft",
    icon: edusoft,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - March 2022",
    points: [
      "Architected a sophisticated car rental system leveraging PHP and Flask for backend, and Vue.js and React.js for frontend; boosted platform engagement by 30% and cut development cycles by 15%",
      "Optimized rental service operations by integrating Google Maps for geolocation services, improving route efficiency by 20% and cutting transportation costs by 15%.",
      "Utilized Amazon Web Services (AWS) for cloud hosting and managed services, ensuring high availability and reliability of the car rental platform.",
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
    name: "Imaginify",
    description:
      "Web-based platform for real-time stock data and portfolio management allowing users to maintain their portfolios and watchlists efficiently.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: imaginify,
    source_code_link: "https://imaginify-ivory-rho.vercel.app/",
  },
  {
    name: "Stock Insigts",
    description:
      "Web-based platform for real-time stock data and portfolio management allowing users to maintain their portfolios and watchlists efficiently.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://ayush1621.wl.r.appspot.com",
  },
  {
    name: "One Stop Shop",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/ayushyelne/ecommerce-mini-project.git",
  },
  {
    name: "Smart Attendance System",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: attendance,
    source_code_link:
      "https://github.com/ayushyelne/Smart-Attendance-System-With-Face-Recognition.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
