import logos from "./logos";

type ProjectName =
  | "devGram"
  | "dogmash"
  | "covid19"
  | "connect4"
  ;

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    main2?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {
  devGram: {
    title: "Expense Tracker",
    description: [
      "The Expense Tracker app is designed to assist both individuals and businesses in monitoring their **expenditures.**",
      " With **features** that enable users to input and categorize expenses, set budgets, and generate spending reports, the app facilitates better financial management and promotes increased savings.",
      "This project was developed using a range of **technologies** including MongoDB, Express, NPM, React, Redux, Bootstrap, Ant Design, JavaScript, CSS, HTML, and Node.",
    ],
    images: {
      main: {
        link: "/project/devGram/et1.gif",
        width: 1082,
        height: 532,
      },
      main2: {
        link: "/project/devGram/et2.gif",
        width: 1082,
        height: 532,
      },
    },
    stack: [
      logos.react,
      logos.mongodb,
      logos.expressjs,
      logos.redux,
      logos.bootstrap,
      logos.ant,
      logos.nodejs,
      logos.javascript,
      logos.css,
      logos.html,
    ],
    links: {
      live: "https://aggressive-mite-cowboy-hat.cyclic.app/",
      github: "https://github.com/prajwal0403/Expense-Tracker-MERN",
    },
  },

  dogmash: {
    title: "MERN Ecommerce",
    description: [
      "This is a fully-functional ecommerce app that includes **features** such as user authentication, user profiles, product pages, shopping cart functionality, payment methods, order history, and sorting options.",
      "The design of the app is inspired by the **Amazon app**, and it was completed as a solo project in 10 days.", 
      "The **tech stack** used for this project includes MongoDB, Express, npm, React, Redux, Bootstrap, JavaScript, CSS, HTML, and Node.",
    ],
    images: {
      main: {
        link: "/project/devGram/ama1.gif",
        width: 1082,
        height: 532,
      },
      main2: {
        link: "/project/devGram/ama2.gif",
        width: 1082,
        height: 532,
      },
    },
    stack: [
      logos.mongodb,
      logos.expressjs,
      logos.react,
      logos.redux,
      logos.nodejs,
      logos.javascript,
      logos.css,
      logos.html,
      logos.bootstrap,
    ],
    links: {
      github: "https://github.com/prajwal0403/MERN-app",
      live: "https://test-n5u4.onrender.com/",
    },
  },
  covid19: {
    title: "BigBasket Clone",
    description: [
      "We cloned India's largest online **food** and **grocery** store, BigBasket", 
      "and added additional **functionalities** using backend technologies such as HTML, JavaScript, CSS, MongoDB, Node.js, and npm.", 
      "We deployed the app on **Vercel**.", 
      "This was a **collaborative** project that was completed in 5 days by a team of 4, including myself and my teammates Iqbal, Ashutosh, and Bhaskar."
    ],
    images: {
      main: {
        link: "/project/devGram/homebb.gif",
        width: 1082,
        height: 532,
      },
      main2: {
        link: "/project/devGram/prodbb.gif",
        width: 1082,
        height: 532,
      },
    },
    stack: [
      logos.mongodb,
      logos.expressjs,
      logos.nodejs,
      logos.javascript,
      logos.css,
      logos.html,
    ],
    links: {
      github: "https://github.com/prajwal0403/BigBasket",
      live: "https://big-basket-five.vercel.app/",
    },
  },
  connect4: {
    title: "JioMart Clone",
    description: [
      "In this project, we aimed to create a visually identical clone of the **Jio-Mart** website", 
      "using **technologies** such as JavaScript, CSS, and HTML.", 
      "Through our **collective efforts** and expertise, we successfully replicated the front-end design and features of the original website.",
    ],
    images: {
      main: {
        link: "/project/devGram/homejio.gif",
        width: 1082,
        height: 532,
      },
      main2: {
        link: "/project/devGram/prodjio.gif",
        width: 1082,
        height: 532,
      },
    },
    stack: [
      logos.mongodb,
      logos.expressjs,
      logos.nodejs,
      logos.javascript,
      logos.css,
      logos.html,
    ],
    links: {
      github: "https://github.com/prajwal0403/JioMart-Clone",
      live: "https://jio-mart-clone-eight.vercel.app/",
    },
  },
};

export default projects;
