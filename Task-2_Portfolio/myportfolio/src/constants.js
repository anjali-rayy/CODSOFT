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
import ScriblyLogo from './assets/work_logo/scribly.png';
import PathwayLogo from './assets/work_logo/pathwayai.png';
import ImageAnalyzerLogo from './assets/work_logo/imageanalyzer.png';

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
    role: "Frontend Developer",
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
      "CasaTrip is a full-stack travel stay listing app that connects travelers with unique stays. Features Mapbox integration for geo-location mapping, full CRUD operations, secure booking, and dynamic listings with a MongoDB backend and EJS-rendered views.",
    image: CasaTrip,
    tags: ["Node.js", "MongoDB", "EJS", "Mapbox", "Express"],
    github: "https://github.com/anjali-rayy/CasaTrip",
    webapp: null,
  },
  {
    id: 1,
    title: "Scribly",
    description:
      "A modern blogging platform inspired by Medium. Features Firebase authentication, Firestore real-time database, rich text editor, tag-based post recommendation engine, and search functionality for a seamless writing and reading experience.",
    image: ScriblyLogo,
    tags: ["React", "Firebase", "Tailwind CSS", "Vite"],
    github: "https://github.com/anjali-rayy/Scribly",
    webapp: "https://scribly-blog.netlify.app",
  },
  {
    id: 2,
    title: "PathwayAI",
    description:
      "An AI-powered career guidance and job matching platform that helps users discover career paths, match with relevant jobs, and get personalized guidance based on their skills, interests, and goals.",
    image: PathwayLogo,
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "AI"],
    github: "https://github.com/anjali-rayy/AI-Powered-Career-Guidance-And-Job-Matching-Platform",
    webapp: null,
  },
  {
    id: 3,
    title: "Image Quality Analyzer",
    description:
      "A full-stack image analysis tool built in Go that detects blur, exposure, noise, color profile & EXIF metadata in real time. Uses concurrent goroutines for fast processing, supports batch upload of up to 20 images, CSV export, and is Dockerized and deployed.",
    image: ImageAnalyzerLogo,
    tags: ["Go", "Docker", "Vanilla JS", "REST API"],
    github: "https://github.com/anjali-rayy/image-analyzer",
    webapp: "https://image-analyzer-nmri.onrender.com",
  },
];