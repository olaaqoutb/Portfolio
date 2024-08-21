import "./Main.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"
import img6 from "../../assets/img6.png"
import img7 from "../../assets/img7.png"
import img8 from "../../assets/img8.jpeg"
import img9 from "../../assets/img9.png"

const myProjects = [
  { id: 1, projectTitle: "Html & Css project", category: ["css"], imgPath: img1, projectDesc: "This is a landing page made with HTML and CSS. I also used Bootstrap for the footer and the form, and I customized it to suit my needs." },
  { id: 2, projectTitle: "js & css project", category: ["js"], imgPath: img2, projectDesc: "This is a home page with a background video of a movie, a brief description of the movie, and a button to watch the movie. When you click this button, it takes you to another page with details about the movie and its trailer. The movie will be available soon. There is also a toggle switch for light and dark mode, which I implemented using JavaScript. At the bottom, there is a section with a number of various movies." },
  { id: 3, projectTitle: "css project", category: ["css"], imgPath: img3, projectDesc: "This is a sidebar with a list of movie categories. There are six sections: Western, Arabic, Indian, Cartoon, and movies from the years 2020, 2021, 2022, and 2023. I created this using CSS and Bootstrap." },
  { id: 4, projectTitle: "js & css project", category: ["js"], imgPath:  img4, projectDesc: "This is the details page for the movie that appears when you click the watch button. I used HTML and CSS for everything, and Bootstrap for the footer. For the dark and light mode toggle, I used JavaScript." },
  { id: 5, projectTitle: "react project", category: ["react"], imgPath:  img5, projectDesc: "This is a page from the categories section, specifically the Western movies section. It contains a large number of diverse movies, each with its own separate page for details and watching the movie. I created this using React." },
  { id: 6, projectTitle: "bootstrap project", category: ["bootstrap"], imgPath:  img6, projectDesc: "This is a website that mimics Noon, which I created entirely with Bootstrap. I definitely did some customization to achieve this final look." },
  { id: 7, projectTitle: "bootstrap project", category: ["bootstrap"], imgPath:  img7, projectDesc: "This is a website that mimics Noon, which I created entirely with Bootstrap. I definitely did some customization to achieve this final look.." },
  { id: 8, projectTitle: "react project", category: ["react"], imgPath:  img8, projectDesc: "This is a to-do list where you can write down your tasks, add them, and then either delete them or move them up and down based on their importance. It has a simple, user-friendly, and beautiful design that I created using React." },
  { id: 9, projectTitle: "API project", category: ["react"], imgPath:  img9, projectDesc: "This is a code bug fixer that I created using API and JavaScript. You can add the code with an error, and it will fix it and provide you with the corrected code. It has a beautiful and user-friendly design." },
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
              key={item.id} // استخدم مفتاح فريد هنا
              className="card"
            >
              <img width={266} src={item.imgPath} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title" >{item.projectDesc}</p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
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
