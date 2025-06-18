// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import InfosysLogo from './assets/company_logo/infosys.png';
import GuviLogo from './assets/company_logo/guvi.png';

// Education Section Logo's
import APSLogo from './assets/education_logo/APS.png';
import IITPLogo from './assets/education_logo/iitp.png';
import stXavLogo from './assets/education_logo/stXav.png';

// Project Section Logo's
import CasaTrip from './assets/work_logo/CasaTrip.png';
import chatLogo from './assets/work_logo/chat.png';
import CraftLogo from './assets/work_logo/craft.png';
import CurrencyLogo from './assets/work_logo/Currency.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: InfosysLogo,
    role: "AI Developer Intern",
    company: "Infosys",
    date: "April 2025 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
    ],
  },
  {
    id: 1,
    img: GuviLogo,
    role: "Fullstack Developer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
];

export const education = [
  {
  id: 0,
  img: IITPLogo,
  school: "Indian Institute of Technology, Patna",
  date: "Aug 2023 – Present",
  grade: "8.56 CGPA",
  desc: "I am currently pursuing my Bachelor's degree (B.Sc.) in Computer Science and Data Analytics at the Indian Institute of Technology, Patna. The curriculum focuses on programming, data structures, algorithms, databases, statistics, and machine learning.",
  degree: "Bachelor of Science - B.Sc. (Computer Science & Data Analytics)"
},
  {
    id: 1,
    img: stXavLogo,
    school: "St. Xavier’s High School, Patna",
    date: "Aug 2021 - Mar 2023",
    grade: "88.6%",
    desc: "I completed my class 12 education from St. Xavier’s High School, under the BSEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "BSEB(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: APSLogo,
    school: "Anand International School, Patna",
    date: "Apr 2015 – Mar 2021",
    grade: "81%",
    desc: "I completed my Class 10 education from Anand International School, Patna, under the CBSE board. My subjects included Science, Social Science, Mathematics, Hindi, English, and Computer Applications, giving me a well-rounded academic foundation.",
    degree: "CBSE (X) – General Curriculum",
  },
];

export const projects = [
  {
    id: 0,
    title: "CasaTrip",
    description:
      "CasaTrip is a full-stack web app that connects travelers with unique stays, offering secure booking, dynamic listings, and seamless UX. Built with MERN stack, it ensures responsive design, scalability, and smooth reservation management.",
    image: CasaTrip,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    // github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    // webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 2,
    title: "PixelCraft",
    description:
      "PixelCraft is a sleek, responsive landing page built with React, HTML, and Tailwind CSS, crafted to showcase products or services with modern design. It features smooth navigation, clean layout, and fast performance optimized for user engagement.",
    image: CraftLogo,
    tags: ["React JS", "HTML", "Tailwind CSS", "JavaScript", "Responsive Design", "Landing Page"],
    // github: "https://github.com/codingmastr/Movie-Recommendation-App",
    // webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Currency Coverter",
    description:
      "A simple and responsive Currency Converter built with HTML, CSS, and JavaScript that allows users to convert between multiple currencies in real time. It features a clean UI, exchange rate API integration, and instant calculation for a smooth user experience.",
    image: CurrencyLogo,
    tags: ["HTML", "CSS", "JavaScript", "Currency Converter", "API Integration", "Responsive Design"],
    // github: "https://github.com/codingmastr/cmtk-email-validator",
    // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 1,
    title: "Chatting App",
    description:
      "A real-time chatting app built with React Native, offering smooth messaging, user authentication, and an intuitive mobile-friendly UI. Features include instant messaging, secure logins, and responsive cross-platform performance.",
    image: chatLogo,
    tags: ["React Native", "JavaScript", "Firebase", "Expo", "Real-time Chat", "Mobile App"],
    // github: "https://github.com/codingmastr/CSPrep",
    // webapp: "https://csprep.netlify.app/",
  },
];