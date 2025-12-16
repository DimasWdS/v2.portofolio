import {
  createNavFooter,
  sum,
  headerNav,
  createCarProjectWeb,
  smoothScroll,
} from "../../module/module.mjs";

const mainDevoloper = document.createElement("main");
document.body.appendChild(mainDevoloper);

Object.assign(mainDevoloper.style, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "var(--background-color)",
});
smoothScroll();

//NAV
{
  const containerHeaderNavAbout = document.createElement("section");
  mainDevoloper.appendChild(containerHeaderNavAbout);

  Object.assign(containerHeaderNavAbout.style, {
    width: "100%",
    // height: "5rem",
    // backgroundColor: "green",
  });
  headerNav(containerHeaderNavAbout);
}

// home
{
  const container = document.createElement("section");
  const conMargin = document.createElement("section");
  const conKonten = document.createElement("section");
  const conBlur = document.createElement("section");

  mainDevoloper.appendChild(container);
  container.appendChild(conMargin);
  container.appendChild(conKonten);
  container.appendChild(conBlur);

  Object.assign(container.style, {
    height: "100dvh",
    width: "100%",
    // position:"fixed"
  });

  // style conMargin
  {
    Object.assign(conMargin.style, {
      height: "100%",
      width: "100%",
      // backgroundColor: "green",
    });
  }
  // style conKonten
  {
    //container teks
    const conTeks = document.createElement("section");

    conKonten.appendChild(conTeks);

    Object.assign(conKonten.style, {
      height: "100%",
      width: "100%",
      maxWidth: "80rem",
      // backgroundColor: "green",
      position: "fixed",
      inset: "0",
      left: "50%",
      transform: "translateX(-50%)",
      // backgroundColor: "green",
      zIndex: "4",
    });

    // konten teks
    {
      Object.assign(conTeks.style, {
        height: "100%",
        width: "100%",
        // backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      });

      // teks header
      const section = document.createElement("section");
      // komen
      const section1 = document.createElement("section");
      // github link
      const section2 = document.createElement("section");

      conTeks.appendChild(section);
      conTeks.appendChild(section1);
      conTeks.appendChild(section2);

      // teks header
      {
        Object.assign(section.style, {
          // backgroundColor: "green",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          // justifyContent: "center",
          alignItems: "center",
        });

        for (let i = 0; i < 3; i++) {
          const span = document.createElement("span");

          section.appendChild(span);

          span.classList.add("fontPixel");

          // span.textContent = "tess";

          Object.assign(span.style, {
            fontSize: "6em",
            color: "var(--main-font)",
            fontSize: "clamp(6rem, calc(2vw + 1rem), 1rem)",
          });

          switch (i) {
            case 0:
              span.textContent = "MY";
              Object.assign(span.style, {
                position: "absolute",
                bottom: "60%",
              });
              break;
            case 1:
              span.textContent = "PROJECT";
              break;
            case 2:
              span.textContent = "WEBSITE";
              Object.assign(span.style, {
                position: "absolute",
                top: "60%",
              });
              break;
          }
        }
      }
      // komen
      {
        Object.assign(section1.style, {
          height: "2rem",
          width: "90%",
          // backgroundColor: "green",
          margin: "5rem 0 0 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // fontSize: "1rem",
        });

        const span = document.createElement("span");

        section1.appendChild(span);

        span.textContent = "// you can also see it on my github page";

        Object.assign(span.style, {
          fontFamily: "monospace",
          fontSize: "clamp(0.8rem, calc(1vw + 0.5rem), 1rem)",
          color: "gray",
        });
      }
      // link github ke con teks
      {
        const div = document.createElement("div");

        section2.appendChild(div);

        Object.assign(section2.style, {
          height: "2rem",
          width: "90%",
          // backgroundColor: "green",
          margin: "1rem 0 0 0",
        });
        Object.assign(div.style, {
          height: "2rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "red",
        });
        for (let i = 0; i < 6; i++) {
          const span = document.createElement("span");

          div.appendChild(span);
          Object.assign(span.style, {
            fontWeight: "400",
            fontSize: "1rem",
            fontFamily: "monospace",
            fontSize: "clamp(0.8rem, calc(1vw + 0.5rem), 1.2rem)",
          });

          switch (i) {
            case 0:
              Object.assign(span.style, {
                color: "purple",
              });
              span.textContent = "const";
              break;
            case 1:
              Object.assign(span.style, {
                margin: "0 0 0 0.8rem",
                color: "cyan",
              });
              span.textContent = "githubLink";
              break;
            case 2:
              Object.assign(span.style, {
                margin: "0 0 0 0.8rem",
                color: "red",
              });
              span.textContent = "=";
              break;
            case 3:
              Object.assign(span.style, {
                margin: "0 0 0 0.8rem",
                color: "green",
              });
              span.textContent = `"`;
              break;
            case 4:
              Object.assign(span.style, {
                color: "green",
              });
              span.textContent = `https://github.com/dimaswidysap`;
              break;
            case 5:
              Object.assign(span.style, {
                color: "green",
              });
              span.textContent = `"`;
              break;
          }
        }
      }
    }
  }

  //conBlur
  {
    Object.assign(conBlur.style, {
      height: "100%",
      width: "100%",
      position: "fixed",
      inset: "0",
      // backgroundColor: "red",
      // backdropFilter: "blur(5px)",
      zIndex: "3",
      transition: "0.2s ease",
    });
  }
  //
  {
    const remToPx = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const threshold = 10 * remToPx; // 2rem → px

    window.addEventListener("scroll", () => {
      if (window.scrollY >= threshold) {
        conBlur.style.zIndex = "6";
        conBlur.classList.add("glass");
        // conBlur.style.backdropFilter = "blur(5px)";
        // conBlur.style.background = "rgba(255, 255, 255, 0.02)";
      } else {
        conBlur.style.zIndex = "3";
        conBlur.classList.remove("glass");
        // conBlur.style.backdropFilter = "blur(0px)";
        // conBlur.style.background = "rgba(255, 255, 255, 0)";
      }
    });
  }
}

//container card
{
  const container = document.createElement("section");

  mainDevoloper.appendChild(container);

  Object.assign(container.style, {
    width: "100%",
    maxWidth: "80rem",
    // height: "100vh",
    padding: "4rem 0 4rem 0",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10rem",
    position: "relative",
    zIndex: "10",
  });

  createCarProjectWeb(
    container,
    "MY OWN WEB PORTOFOLIO",
    "https://dimaswds.github.io/v2.portofolio/",
    "prj1/bg.png",
    " blanditiis? Odit, iusto! Reprehenderit adipisci dicta illo impedit quae alias recusandae, quaerat inventore, dolore ab cumque! molestiae illum laborum deserunt dolorem error fugit odio enim ex, aut eligendi placeat. Perferendis, distinctio unde sapiente molestias minima molestiae illum laborum deserunt dolorem error fugit odio enim ex, aut eligendi placeat. Perferendis, distinctio unde sapiente molestias minima ",
    "Desainer Web | Frontend Dev",
    [
      ["html.svg", "HTML"],
      ["javascript.svg", "Javascrip"],
      ["css.svg", "CSS"],
    ],
    "prj1/bgpesawat.jpg"
  );

  for (let i = 0; i < 1; i++) {
    createCarProjectWeb(
      container,
      "WEB TODOLIST",
      "https://dimaswds.github.io/TODOLIST/",
      "prj2/ss-web.png",
      "molestiae illum laborum deserunt dolorem error fugit odio enim ex, aut eligendi placeat. Perferendis, distinctio unde sapiente molestias minima explicabo incidunt illum eligendi, porro ut blanditiis pariatur quos ab eum modi veritatis? Ipsa saepe, magnam pariatur modi aut qui vitae consequuntur delectus perferendis, odit, doloremque nam? Sunt, soluta blanditiis? Odit, iusto! Reprehenderit adipisci dicta illo impedit quae alias recusandae, quaerat inventore, dolore ab cumque!",
      "Frontend Dev",
      [
        ["html.svg", "HTML"],
        ["javascript.svg", "Javascrip"],
        ["css.svg", "CSS"],
      ],
      "prj1/big-city.jpg"
    );
  }
}

// FOTTER
{
  const containerNavFooterDevoloper = document.createElement("section");
  mainDevoloper.appendChild(containerNavFooterDevoloper);
  Object.assign(containerNavFooterDevoloper.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "var(--footer)",
    position: "relative",
    zIndex: "10",
    // height: "20rem",
  });

  createNavFooter(containerNavFooterDevoloper);
}
