import {
  createNavFooter,
  sum,
  headerNav,
  cardIllustrator,
} from "./../../module/module.mjs";

const containerIllustrator = document.createElement("main");

document.body.appendChild(containerIllustrator);

// style main
const main = document.querySelector("main");
Object.assign(main.style, {
  width: "100%",
  backgroundColor: "var(--background-color)",
});

// nav
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
{
  const containerThumbnail = document.createElement("section");
  main.appendChild(containerThumbnail);
  Object.assign(containerThumbnail.style, {
    position: "relative",
    width: "100%",
    height: "100dvh",
    overflow: "hidden",
  });

  //background
  {
    const background = document.createElement("section");
    const conApi = document.createElement("section");
    const conImg = document.createElement("section");
    const imgSatu = document.createElement("div");
    const imgDua = document.createElement("div");

    containerThumbnail.appendChild(background);
    background.appendChild(conApi);
    background.appendChild(conImg);
    conImg.appendChild(imgSatu);
    conImg.appendChild(imgDua);

    Object.assign(background.style, {
      position: "relative",
      width: "100%",
      height: "100%",
    });

    Object.assign(conApi.style, {
      width: "100%",
      height: "100%",
      backgroundImage: "url(asset/page-illustrator/api-bg-01.svg",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      opacity: "40%",
      filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.67))",
    });

    Object.assign(conImg.style, {
      position: "absolute",
      width: "100%",
      height: "80%",
      // backgroundColor: "yellow",
      bottom: "0",
      display: "flex",
      justifyContent: "space-between",
    });

    [imgSatu, imgDua].forEach((el, dex) => {
      Object.assign(el.style, {
        height: "100%",
        aspectRatio: "1/1",
        // background: "green",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        filter: "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.67))",
        backgroundImage:
          dex === 0
            ? "url(asset/page-illustrator/hellcatmobil.svg)"
            : "url(asset/page-illustrator/moonknight.svg)",
        transform:
          dex === 0
            ? "perspective(300px) rotateY(10deg)"
            : "perspective(300px) rotateY(-10deg)",
      });
    });
  }

  // konten teks
  {
    const conTeks = document.createElement("section");
    const header = document.createElement("section");

    for (let i = 0; i < 3; i++) {
      const teks = document.createElement("p");

      header.appendChild(teks);

      Object.assign(header.style, {
        fontWeight: "900",
        color: "var(--main-font)",
        fontSize: "3em",
      });

      switch (i) {
        case 0:
          teks.textContent = "MY";
          Object.assign(teks.style, {
            position: "absolute",
            bottom: "2.5rem",
          });
          break;
        case 1:
          teks.textContent = "PROJECTS";
          break;
        case 2:
          teks.textContent = "ILLUSTRATOR";
          Object.assign(teks.style, {
            position: "absolute",
            top: "2.5rem",
          });
          break;
      }
    }

    containerThumbnail.appendChild(conTeks);
    conTeks.appendChild(header);

    header.classList.add("header-thumbnail-illustrator");

    Object.assign(conTeks.style, {
      position: "absolute",
      top: "0",
      width: "100%",
      height: "100%",
      // backgroundColor: "yellow",
    });

    Object.assign(header.style, {
      width: "100%",
      position: "relative",
      // height: "5rem",
      // backgroundColor: "yellow",
      margin: "10rem 0 0 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    });
  }
}

//konten
{
  const container = document.createElement("section");
  const background = document.createElement("section");
  for (let i = 0; i < 2; i++) {
    const bgLine = document.createElement("div");
    background.appendChild(bgLine);

    Object.assign(bgLine.style, {
      position: "relative",
      width: "100%",
      height: "5px",
      backgroundColor: "var(--accen-color)",
    });
  }
  const konten = document.createElement("section");

  main.appendChild(container);
  container.appendChild(background);
  container.appendChild(konten);

  Object.assign(container.style, {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  Object.assign(background.style, {
    position: "absolute",
    width: "100%",
    height: "100%",
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  });
  Object.assign(konten.style, {
    position: "relative",
    zIndex: "1",
    width: "100%",
    maxWidth: "80rem",
    padding: "5rem 0 5rem 0",
    display: "flex",
    gap: "3rem",
    flexWrap: "wrap",
    justifyContent: "center",
  });

  for (let i = 0; i < 4; i++) {
    cardIllustrator(konten, "garuda-01.png");
  }
}

// container nav footer
{
  const containerNavFooterIllustrator = document.createElement("section");
  main.appendChild(containerNavFooterIllustrator);
  Object.assign(containerNavFooterIllustrator.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "var(--footer)",
  });

  createNavFooter(containerNavFooterIllustrator);
  // console.log(sum(10, 10));
}
