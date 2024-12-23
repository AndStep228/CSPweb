import React, { useEffect, useState } from "react";
import debounce from "lodash/debounce";

import PageTitle from "../PageTitle/PageTitle";
import ProjectItem from "./ProjectItem";
import Masonry from "react-masonry-css";

export default function OurProjects() {
  const projects = [
    {
      title: "Брэндинг компании STEKLO&IDEA",
      subtitle:
        "Сайт по продаже зеркал, слоганы, логотипы, фирменные цвета и стиль, презентации, баннеры, оформление соц-сетей",
      imgSrc: "/images/stekloidea-desc.svg",
      backgroundImg: "/images/stekloidea-bkg.png",
    },
    {
      title: "Сайт-портал для компании KOZHURA",
      subtitle:
        "Многостраничный сайт, переработка устаревшего дизайна, UI-кит компании, отрисовка логотипов",
      imgSrc: "/images/kozhura-desc.svg",
      backgroundImg: "/images/kozhura-bkg.png",
    },
    {
      title: "Брэндинг компании STEKLO&IDEA",
      subtitle:
        "Сайт по продаже зеркал, слоганы, логотипы, фирменные цвета и стиль, презентации, баннеры, оформление соц-сетей",
      imgSrc: "/images/stekloidea-desc.svg",
      backgroundImg: "/images/stekloidea-bkg.png",
    },
    {
      title: "Сайт-портал для компании KOZHURA",
      subtitle:
        "Многостраничный сайт, переработка устаревшего дизайна, UI-кит компании, отрисовка логотипов",
      imgSrc: "/images/kozhura-desc.svg",
      backgroundImg: "/images/kozhura-bkg.png",
    },
    // Добавьте другие проекты по мере необходимости
  ];

  const [breakpointCols, setBreakpointCols] = useState({
    default: 2,
    960: 1,
  });

  const handleResize = debounce(() => {
    const width = window.innerWidth;
    if (width < 960) {
      setBreakpointCols({ default: 1 });
    } else {
      setBreakpointCols({ default: 2 });
    }
  }); // Установите задержку по необходимости

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="our-projects" className="our-projects">
      <div className="container">
        <PageTitle titleTxt="наши проекты" titleTheme="dark" />
      </div>
      <div className="container">
        <div className="our-projects__wrapper">
          <Masonry
            breakpointCols={breakpointCols}
            className="our-projects__masonry-grid"
            columnClassName="our-projects__masonry-grid_column"
          >
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                imgSrc={project.imgSrc}
                backgroundImg={project.backgroundImg}
              />
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
}
