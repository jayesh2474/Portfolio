export const METADATA = {
  author: "Jayesh Joshi",
  title: "Portfolio | Jayesh Joshi",
  description:
    "Jayesh Joshi is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubhporwal24",
  keywords: [
    "Jayesh Joshi",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: divyeshjoshi7474@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/jayesh-joshi24/",
  },
  {
    name: "github",
    url: "https://github.com/jayesh2474",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/jayesh._.joshi__/",
  },
  {
    name: "twitter",
    url: "https://x.com/jayeshJ74",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "dart",
    "sass",
    "nodejs",
    "vite",
    "firebase",
    "figma",
  ],
  librariesAndFrameworks: ["react", "flutter", "nextjs", "tailwindcss"],
  DevOpsDeployment: ["docker", "gcloud", "aws"],
  databases: ["mysql", "mongodb", "firebase"],
  other: ["git", "xampp", "moodle"],
};

export const PROJECTS = [
  {
    name: "Sanaank Quiz App",
    image: "/projects/homepage.webp",
    blurImage: "/projects/blur/homepage.webp",
    description:
      "Mobile quiz app with authentication, courses, and embedded videos.",
    gradient: ["#F14658", "#DC2537"],
    url: "https://shubh73-airbnb.vercel.app/",
    tech: ["flutter", "firebase", "dart"],
  },
  {
    name: "Sanaank Website",
    image: "/projects/sanaank-website.webp",
    blurImage: "/projects/blur/sanaank-website.webp",
    description:
      "Informational website for the Sanaank using NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://sanaank.com/",
    tech: ["nextjs", "typescript", "react", "tailwindcss"],
  },
  {
    name: "Cost2Go",
    image: "/projects/cost.webp",
    blurImage: "/projects/blur/cost.webp",
    description:
      "Calculates fuel costs based on distance and vehicle efficiency.",
    gradient: ["#000066", "#6699FF"],
    url: "https://cost2go.netlify.app/",
    tech: ["react", "nodejs", "MongoDB"],
  },
  {
    name: "AI Medical Diagnosis",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Image-based disease diagnosis using AI models.",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
    tech: ["react"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  SANAAK: [
    {
      title: "Sanaank",
      description:
        "A mobile quiz platform offering interactive learning experiences with courses, authentication, and embedded videos.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Empowering learning, one quiz at a time
        </div>
      ),
    },
    {
      title: "Development",
      description:
        "Since 2024, the Sanaank Quiz App has provided an engaging learning experience. Leading the Flutter app development, I built authentication, course management, and integrated the YouTube API for seamless video streaming. This ensured a smooth user experience and scalability.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Flutter App Developer
        </div>
      ),
    },
    {
      title: "Web Platform",
      description:
        "Recognizing the need for an optimized web presence, I developed and deployed the Sanaank website using Next.js, Docker, and Google Cloud Run. Implementing CI/CD pipelines via GitHub Actions streamlined deployments and improved performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Freelance Web Developer
        </div>
      ),
    },
  ],
  TECHEI_AI: [
    {
      title: "Techei AI",
      description:
        "An AI-powered PC builder with intelligent upgrade recommendations via Catalyst.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Smarter PC builds with AI-driven insights
        </div>
      ),
    },
    {
      title: "Intelligent Builder",
      description:
        "Since 2023, Techei AI has revolutionized PC building by leveraging AI. Leading the front-end development, I built a responsive Flutter-based UI and integrated Firebase for real-time data handling, ensuring a seamless user experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Flutter Developer
        </div>
      ),
    },
    {
      title: "Backend API",
      description:
        "Recognizing the need for a robust backend, I developed a Flask-based API to handle PC build analysis and upgrade recommendations. This streamlined data processing and improved system efficiency.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Backend Developer
        </div>
      ),
    },
  ],
  HACKATHON: [
    {
      title: "Code Red 4.0",
      description:
        "Code Red 4.0 was a hackathon where we built an innovative tech solution under tight deadlines.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Innovation through teamwork and technology
        </div>
      ),
    },
    {
      title: "The Challenge",
      description:
        "Competing at VGU Jaipur, our team, Agile Avengers, developed a high-impact solution under the mentorship of Aditya Maheshwari. We tackled complex problems and implemented a fully functional prototype within the given time constraints.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Team Collaboration & Problem-Solving
        </div>
      ),
    },
    {
      title: "Recognition",
      description:
        "Winning the runner-up position and a ₹25,000 cash prize validated our technical expertise and strategic execution, marking a milestone in our journey as developers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Hackathon Runner-Up
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
