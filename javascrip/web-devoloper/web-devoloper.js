import {
  createNavFooter,
  sum,
  headerNav,
  createCarProjectWeb,
} from "../../module/module.mjs";

const mainDevoloper = document.createElement("main");
document.body.appendChild(mainDevoloper);

Object.assign(mainDevoloper.style, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "var(--background-color)",
});

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

//HOME (3D)
{
  const container = document.createElement("section");
  const conBgLaptop = document.createElement("section");
  const conKonten = document.createElement("section");
  mainDevoloper.appendChild(container);
  container.appendChild(conBgLaptop);
  container.appendChild(conKonten);
  container.classList.add("con-web-home");
  Object.assign(container.style, {
    position: "relative",
    width: "100%",
    maxWidth: "80rem",
    height: "100dvh",
    backgroundColor: "var(--background-color)",
    // backgroundColor: "yellow",
    margin: "0 0 15rem 0",
  });
  Object.assign(conBgLaptop.style, {
    height: "100%",
    width: "100%",
  });
  Object.assign(conKonten.style, {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "end",
    // backgroundColor: "green",
  });
  //konten
  {
    const firstCon = document.createElement("div");
    const teks = document.createElement("div");

    for (let i = 0; i < 3; i++) {
      const p = document.createElement("p");

      teks.appendChild(p);

      Object.assign(p.style, {
        color: "var(--main-font)",
        fontSize: "3rem",
        fontWeight: "800",
        // textShadow: "5px 5px 5px rgba(0, 0, 0, 1)",
      });

      switch (i) {
        case 0:
          p.textContent = "MY";
          Object.assign(p.style, {
            position: "absolute",
            bottom: "2.5rem",
          });
          break;
        case 1:
          p.textContent = "PROJECT";
          break;
        case 2:
          p.textContent = "WEBSITE 🚀";
          Object.assign(p.style, {
            position: "absolute",
            top: "2.5rem",
          });
          break;
      }
    }

    conKonten.appendChild(firstCon);
    firstCon.appendChild(teks);

    Object.assign(firstCon.style, {
      height: "100%",
      width: "50%",
      // backgroundColor: "green",
      display: "flex",
    });
    Object.assign(teks.style, {
      position: "relative",
      // backgroundColor: "green",
      width: "100%",
      // margin: "10% 0 0 0",
      height: "max-content",
      marginTop: "30%",
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
  });

  createCarProjectWeb(
    container,
    "MY OWN WEB PORTOFOLIO",
    "https://dimaswds.github.io/v2.portofolio/",
    "prj1/bg.png",
    "molestiae illum laborum deserunt dolorem error fugit odio enim ex, aut eligendi placeat. Perferendis, distinctio unde sapiente molestias minima explicabo incidunt illum eligendi, porro ut blanditiis pariatur quos ab eum modi veritatis? Ipsa saepe, magnam pariatur modi aut qui vitae consequuntur delectus perferendis, odit, doloremque nam? Sunt, soluta blanditiis? Odit, iusto! Reprehenderit adipisci dicta illo impedit quae alias recusandae, quaerat inventore, dolore ab cumque!",
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
    // height: "20rem",
  });

  createNavFooter(containerNavFooterDevoloper);
}
