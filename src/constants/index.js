export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Authentink - Signature Forgery Detector",
    desc: "Developed AuthentInk, a signature forgery detection app that verifies authenticity through real-time signature capture and feedback. Implemented a verification system comparing input signatures against a pre-trained dataset, using image preprocessing techniques and real-time similarity scoring to detect forgeries. Enhanced expertise in AI, image processing, and neural networks.",
    subdesc:
      "Built using Python, PyTorch, Siamese Neural Networks, Convolutional Neural Networks (CNN), PyQt5, OpenCV, Kaggle datasets.",
    href: "https://github.com/orlololol/AuthentInk",
    texture: "/textures/project/project1vid.mp4",
    logo: "/assets/project-logo1.jpg",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.svg",
      },
      {
        id: 2,
        name: "PyTorch",
        path: "assets/pytorch.svg",
      },
      {
        id: 3,
        name: "CNN",
        path: "/assets/deep-learning.svg",
      },
      {
        id: 4,
        name: "OpenCV",
        path: "/assets/opencv.svg",
      },
    ],
  },
  {
    title: "Magic Chalk - Interactive Whiteboard using AR",
    desc: "Magic Chalk is an interactive whiteboard application developed using Python. It employs technologies like Streamlit for the web interface, OpenCV for image processing, and MediaPipe for hand gesture recognition. This application allows users to draw, erase, solve mathematical equations, and save their work with hand gestures.",
    subdesc:
      "Built using Streamlit, OpenCV, MediaPipe, Numpy, WolframAlpha API.",
    href: "https://github.com/orlololol/Magic-Chalk",
    texture: "/textures/project/project2vid.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.svg",
      },
      {
        id: 2,
        name: "Numpy",
        path: "assets/numpy.svg",
      },
      {
        id: 3,
        name: "OpenCV",
        path: "/assets/opencv.svg",
      },
      // {
      //   id: 4,
      //   name: "Framer Motion",
      //   path: "/assets/framer.png",
      // },
    ],
  },
  {
    title: "Personal VPN - At-Home VPN Service",
    desc: "Designed and implemented a personal VPN using a Raspberry Pi to securely route internet traffic through a home network, bypassing regional restrictions. Utilized WireGuard for an encrypted VPN tunnel, supporting multiple devices for activities like video streaming. Configured dynamic DNS and port forwarding for seamless remote access while ensuring security through SSH key authentication and certificate management.",
    subdesc:
      "Raspberry Pi, WireGuard, Dynamic DNS, SSH key authentication, router port forwarding, certificate management.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3vid.mp4",
    logo: "/assets/vpn.svg",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Raspberry Pi",
        path: "/assets/raspberry.svg",
      },
      {
        id: 2,
        name: "WireGuard",
        path: "assets/wireguard.svg",
      },
      {
        id: 3,
        name: "DNS",
        path: "/assets/dns.svg",
      },
      {
        id: 4,
        name: "SSH",
        path: "/assets/ssh.svg",
      },
    ],
  },

  // other projects

  // {
  //   title: "Horizon - Online Banking Platform",
  //   desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
  //   subdesc:
  //     "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
  //   href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
  //   texture: "/textures/project/project4.mp4",
  //   logo: "/assets/project-logo4.png",
  //   logoStyle: {
  //     backgroundColor: "#0E1F38",
  //     border: "0.2px solid #0E2D58",
  //     boxShadow: "0px 0px 60px 0px #2F67B64D",
  //   },
  //   spotlight: "/assets/spotlight4.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
  // {
  //   title: "Imaginify - AI Photo Manipulation App",
  //   desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
  //   subdesc:
  //     "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
  //   href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
  //   texture: "/textures/project/project5.mp4",
  //   logo: "/assets/project-logo5.png",
  //   logoStyle: {
  //     backgroundColor: "#1C1A43",
  //     border: "0.2px solid #252262",
  //     boxShadow: "0px 0px 60px 0px #635BFF4D",
  //   },
  //   spotlight: "/assets/spotlight5.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Mortgage Kingdom LLC",
    pos: "Full Stack Web Developer Intern",
    duration: "Summer 2024",
    title:
      "Developed a loan officer website using Next.js, Python Flask, Docker, and Google Cloud Run and implemented Google Document AI to extract data from PDF documents such as W2s, paystubs, and 1040 forms.",
    icon: "/assets/mortgagekingdom.webp",
    animation: "victory",
  },
  {
    id: 2,
    name: "Bienvenue NDG",
    pos: "Digital Literacy Trainer/Instructor for Culture Numérique Project",
    duration: "2020 - 2022",
    title:
      "Provided computer literacy training to older adults, covering internet navigation and email setup, and taught Python coding basics. Organized and conducted workshops, seminars, and webinars through online courses.",
    icon: "/assets/bndg.webp",
    animation: "clapping",
  },
  // {
  //   id: 3,
  //   name: "Notion",
  //   pos: "Junior Web Developer",
  //   duration: "2019 - 2020",
  //   title:
  //     "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: "/assets/notion.svg",
  //   animation: "salute",
  // },
];
