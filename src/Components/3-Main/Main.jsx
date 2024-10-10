import "./Main.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img1 from "../../assets/guest-house.jpg";
import img2 from "../../assets/to-do-list.jpg"
import img4 from "../../assets/portfolio.jpg";
import img5 from "../../assets/landing-page.jpg";
import img6 from "../../assets/prayer.jpg";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/form.jpg";
import img9 from "../../assets/bug-fixer.jpg";

const myProjects = [
  {
    id: 1,
    projectTitle: "Guest House",
    category: ["react","css","bootstrap"],
    imgPath: img1,
    projectDesc:
      "This guest house website, built with React and Material-UI, features a responsive design that ensures a seamless experience on all devices. Utilizing GSAP for smooth animations, it enhances key elements like the booking form and image galleries. The site also includes an interactive virtual tour, allowing potential guests to explore the premises before making a reservation.",
    projectLink: "https://nubian-house-9xl8.vercel.app",
  },
  {
    id: 2,
    projectTitle: "To-DO-List",
    category: ["react", "css"],
    imgPath: img2,
    projectDesc:
      "This project is a responsive To-Do List application built with React and styled using Material-UI. It allows users to add, delete, and rearrange tasks easily, featuring interactive buttons and a clean, dark-themed interface. The design ensures usability across various screen sizes, making task management seamless on both desktop and mobile devices.",
    projectLink: "https://to-do-list-chi-coral-79.vercel.app",
  },
  {
    id: 3,
    projectTitle: "Portfolio",
    category: ["css"],
    imgPath: img4,
    projectDesc:
      "This project is a responsive portfolio website created using HTML and CSS, showcasing various projects and skills in a visually appealing layout. The design adapts seamlessly to different screen sizes, ensuring a user-friendly experience on both desktop and mobile devices.",
    projectLink: "https://olaaqoutb.github.io/simple-portfolio/",
  },
  {
    id: 4,
    projectTitle: "Landing Page",
    category: ["js"],
    imgPath: img5,
    projectDesc:
      "This landing page is crafted using GSAP for engaging animations and transitions, creating a dynamic user experience. It is fully responsive, ensuring optimal display and functionality across various devices and screen sizes.",
    projectLink: " https://olaaqoutb.github.io/landing-page/",
  },
  {
    id: 5,
    projectTitle: "Prayer-Time",
    category: ["react"],
    imgPath: img6,
    projectDesc:
      "The prayer time application utilizes advanced APIs to accurately display prayer times based on the user's location. Built with Material UI, it offers a modern and user-friendly interface, ensuring a seamless experience across devices.",
    projectLink: "https://prayer2-time-39ub.vercel.app",
  },
  {
    id: 6,
    projectTitle: "Noon",
    category: ["bootstrap"],
    imgPath: img7,
    projectDesc:
      "This project, inspired by Noon, showcases a dynamic e-commerce platform designed with Bootstrap for responsive and mobile-friendly layouts. It features an intuitive user interface, allowing seamless navigation through products, categories, and a streamlined checkout process.",
    projectLink: "https://olaaqoutb.github.io/noon2/",
  },
  {
    id: 7,
    projectTitle: "Animation Form",
    category: ["react"],
    imgPath: img8,
    projectDesc:
      "This project features a highly interactive form built with GSAP animations, enhancing user engagement through smooth transitions and visual feedback. It incorporates robust validation mechanisms to ensure accurate input, providing real-time error messages and a seamless user experience.",
    projectLink: "https://code-storm-one.vercel.app",
  },
  {
    id: 8,
    projectTitle: "Bug-Fixer",
    category: ["react"],
    imgPath: img9,
    projectDesc:
      "This project is a bug fixer application that leverages the Gemini API to analyze and resolve code issues efficiently. It provides users with detailed explanations and corrected code snippets, streamlining the debugging process and enhancing overall productivity.",
    projectLink: "https://olaaqoutb.github.io/bug-fixer/",
  },
];

const Main = () => {
  const [current, setCurrent] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrent(buttonCategory);

    const newArr = myProjects.filter((item) => {
      return item.category.includes(buttonCategory);
    });
    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setCurrent("all");
            setArr(myProjects);
          }}
          className={current === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => handleClick("css")}
          className={current === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => handleClick("js")}
          className={current === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleClick("react")}
          className={current === "react" ? "active" : null}
        >
          React & API
        </button>
        <button
          onClick={() => handleClick("bootstrap")}
          className={current === "bootstrap" ? "active" : null}
        >
          Bootstrap & Material UI
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.id}
              className="card"
            >
              <img width={266} src={item.imgPath} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.projectDesc}</p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                   
                      <a
                        href={item.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon-link"></span> {/* Link icon */}
                      </a>
               
                  </div>
                  <a href="" className="link flex">
                    More
                    <span className="icon-arrow_forward"></span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
