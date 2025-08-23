import { createNavFooter, sum, headerNav } from "./../../module/module.mjs";

const containerIllustrator = document.createElement("main");

document.body.appendChild(containerIllustrator);

// style main
const main = document.querySelector("main");
Object.assign(main.style, {
  width: "100%",
  backgroundColor: "var(--background-color)",
});

{
  const containerHeaderNavProject = document.createElement("section");
  main.appendChild(containerHeaderNavProject);

  Object.assign(containerHeaderNavProject.style, {
    width: "100%",
    // height: "5rem",
    // backgroundColor: "green",
  });
  headerNav(containerHeaderNavProject);
}

// thumbnail
const containerThumbnail = document.createElement("section");
main.appendChild(containerThumbnail);
Object.assign(containerThumbnail.style, {
  position: "relative",
});

//background thumbnail
{
  // container
  const background = document.createElement("section");
  // container gambar
  const containerImg = document.createElement("section");
  //   gambar kiri
  const imgKiri = document.createElement("div");
  //   gambar kanan
  const imgKanan = document.createElement("div");

  containerThumbnail.appendChild(background);
  background.appendChild(containerImg);
  containerImg.appendChild(imgKiri);
  containerImg.appendChild(imgKanan);

  Object.assign(background.style, {
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: "100dvh",
    backgroundImage: "url(asset/page-portofolio/api-bg-01.svg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    filter: "drop-shadow(4px 6px 6px rgba(0, 0, 0, 0.5))",
  });
  Object.assign(containerImg.style, {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "80%",
    // backgroundColor: "green",
    display: "flex",
    justifyContent: "space-between",
  });
  [imgKiri, imgKanan].forEach((el, dex) => {
    Object.assign(el.style, {
      height: "100%",
      aspectRatio: "1/1",
      //   backgroundColor: "green",
      backgroundImage:
        dex == 0
          ? "url(asset/page-portofolio/hellcatmobil.svg)"
          : "url(asset/page-portofolio/moonknight.svg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      transform:
        dex === 0
          ? "perspective(300px) rotateY(10deg)"
          : "perspective(300px) rotateY(-10deg)",
    });
  });
}
// konten thumbnail
{
  const container = document.createElement("section");
  const header = document.createElement("header");
  const teksSatu = document.createElement("p");
  const teksDua = document.createElement("p");
  const teksTiga = document.createElement("p");

  containerThumbnail.appendChild(container);
  container.appendChild(header);
  header.appendChild(teksSatu);
  header.appendChild(teksDua);
  header.appendChild(teksTiga);

  teksSatu.textContent = "PROJECTS";
  teksDua.textContent = "ILLUSTRATOR";
  teksTiga.textContent = "DIMAS WIDY SAPUTRA";

  Object.assign(container.style, {
    position: "absolute",
    top: "0",
    height: "100%",
    width: "100%",
    // backgroundColor: "green",
  });
  Object.assign(header.style, {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10% 0 0 0",
    color: "var(--main-font)",
  });
  Object.assign(teksSatu.style, {
    fontSize: "4em",
    fontWeight: "700",
  });
  [teksDua, teksTiga].forEach((el, dex) => {
    Object.assign(el.style, {
      fontSize: "1em",
      fontWeight: "700",
      position: "absolute",
      top: dex === 0 ? "4.5rem" : "0",
    });
  });
}

// container konten
const container = document.createElement("section");
main.appendChild(container);
Object.assign(container.style, {
  position: "relatieve",
  zIndex: "2",
  width: "100%",
  // height: "100vh",
  background: "var(--second-background)",
  boxShadow: "rgba(0, 0, 0, 1) 0px 3px 8px",
});

// konten header tools
{
  function createCardSkill(konten) {
    const container = document.createElement("section");
    skillScrol.appendChild(container);

    Object.assign(container.style, {
      display: "flex",
      gap: "1rem",
      padding: "0 0 0 1rem",
    });

    for (let i = 0; i < konten.length; i++) {
      const div = document.createElement("div");

      div.textContent = konten[i];
      container.appendChild(div);

      Object.assign(div.style, {
        fontWeight: "1.1em",
        fontWeight: "700",
        color: "var(--main-font)",
        fontFamily: `"Google Sans Code", monospace`,
        flexShrink: "0",
        // backgroundColor: "var(--accen-color)",
        padding: "0.2rem",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      });
    }
  }

  const containerTools = document.createElement("section");
  const conScrollTolls = document.createElement("section");
  const skillScrol = document.createElement("div");

  container.appendChild(containerTools);
  containerTools.appendChild(conScrollTolls);
  conScrollTolls.appendChild(skillScrol);

  conScrollTolls.classList.add("container-scroll-skils");
  skillScrol.classList.add("skill-scrol");

  Object.assign(containerTools.style, {
    position: "relative",
    zIndex: "3",
    width: "100%",
    height: "5rem",
    background: "var(--background-color)",
    borderTop: "3px solid var(--main-font)",
    borderBottom: "3px solid var(--main-font)",
    display: "flex",
    justifyContent: "center",
  });

  Object.assign(conScrollTolls.style, {
    width: "100%",
    maxWidth: "80rem",
    height: "100%",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",

    // backgroundColor: "yellow",
  });

  Object.assign(skillScrol.style, {
    flexShrink: "0",
  });

  createCardSkill(["Adobe Illustrator", "Clip Studio Pain"]);

  // clone tools container
  {
    const conScroll = document.querySelector(".skill-scrol");

    for (let i = 0; i < 10; i++) {
      const conScrollClone = conScroll.cloneNode(true);
      conScrollTolls.appendChild(conScrollClone);
    }
  }

  //container card project
}

// container konten card
{
  function createCardProject(judul, img) {
    const container = document.createElement("section");
    //
    const header = document.createElement("header");
    const headerTeks = document.createElement("p");
    //
    const conImg = document.createElement("section");
    const imgKonten = document.createElement("div");
    //
    const navigasi = document.createElement("section");

    containerCard.appendChild(container);
    container.appendChild(header);
    header.appendChild(headerTeks);
    container.appendChild(conImg);
    conImg.appendChild(imgKonten);
    container.appendChild(navigasi);

    headerTeks.textContent = judul;

    container.classList.add("card-project");

    Object.assign(container.style, {
      width: "35rem",
      aspectRatio: "3/4",
      // backgroundColor: "yellow",
      borderRight: "2.5px solid var(--line)",
      borderTop: "2.5px solid var(--line)",
      borderBottom: "2.5px solid var(--line)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    });
    Object.assign(header.style, {
      width: "100%",
      height: "5rem",
      // background: "blue",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });
    Object.assign(headerTeks.style, {
      fontWeight: "800",
      fontSize: "2em",
      color: "var(--main-font)",
      // backgroundColor: "yellow",
    });
    Object.assign(conImg.style, {
      borderTop: "2.5px solid var(--line)",
      width: "100%",
      aspectRatio: "1/1",
      borderLeft: "1px solid var(--line)",
      borderBottom: "2.5px solid var(--line)",
    });
    Object.assign(imgKonten.style, {
      width: "100%",
      height: "100%",
      // backgroundColor: "green",
      backgroundImage: `url(asset/page-portofolio/project/${img})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      filter: "grayscale(1)",
      transition: "all 0.5s ease-in-out",
    });
    Object.assign(navigasi.style, {
      width: "100%",
      height: "5rem",
      // backgroundColor: "blue",
    });

    conImg.addEventListener("mouseenter", function () {
      imgKonten.style.filter = "grayscale(0)";
    });
    conImg.addEventListener("mouseleave", function () {
      imgKonten.style.filter = "grayscale(1)";
    });
  }

  const containerCard = document.createElement("section");

  container.appendChild(containerCard);

  containerCard.classList.add("container-card-project");

  Object.assign(containerCard.style, {
    width: "100%",
    maxWidth: "80rem",
    // height: "20rem",
    margin: "auto",
    padding: "3rem 3.5rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "2rem",
    // backgroundColor: "yellow",
  });

  for (let i = 0; i < 4; i++) {
    createCardProject("GARUDA", "garuda-01.png");
  }
}

// container nav footer
const containerNavFooterIllustrator = document.createElement("section");
main.appendChild(containerNavFooterIllustrator);
{
  Object.assign(containerNavFooterIllustrator.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "var(--footer)",
  });

  createNavFooter(containerNavFooterIllustrator);
  // console.log(sum(10, 10));
}
