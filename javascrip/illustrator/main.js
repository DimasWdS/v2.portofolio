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

  background.classList.add("background-card-illustrator");

  Object.assign(container.style, {
    position: "relative",
    width: "100%",
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
    height: "100rem",
  });
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
