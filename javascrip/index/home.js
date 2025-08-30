import { createNavFooter, sum, headerNav } from "./../../module/module.mjs";
//
const mainHome = document.createElement("main");
document.body.appendChild(mainHome);
mainHome.setAttribute("id", "scroller-container");
Object.assign(mainHome.style, {
  backgroundColor: "var(--background-color)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

// Nav
{
  const containerHeaderNavHome = document.createElement("section");
  mainHome.appendChild(containerHeaderNavHome);

  Object.assign(containerHeaderNavHome.style, {
    width: "100%",
    // height: "5rem",
    // backgroundColor: "green",
  });
  headerNav(containerHeaderNavHome);
}

// home
{
  const container = document.createElement("section");

  mainHome.appendChild(container);

  Object.assign(container.style, {
    height: "100dvh",
    width: "100%",
    // backgroundColor: "green",
    overflow: "hidden",
  });

  // background
  {
    const conBg = document.createElement("section");
    const bgPerson = document.createElement("div");
    container.appendChild(conBg);
    conBg.appendChild(bgPerson);

    bgPerson.classList.add("con-bg-person");

    Object.assign(conBg.style, {
      position: "relative",
      height: "100%",
      width: "100%",
      // backgroundColor: "green",
    });

    Object.assign(bgPerson.style, {
      height: "100%",
      aspectRatio: "16/9",
      backgroundImage: "url(asset/my-foto/personv2.svg)",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "90%",
      backgroundAttachment: "fixed",
      filter: "drop-shadow(10px -10px 5px rgba(0,0,0,0.5))",
    });
  }
  // konten
  {
    const conKonten = document.createElement("section");
    container.appendChild(conKonten);
    Object.assign(conKonten.style, {
      position: "absolute",
      height: "100%",
      width: "100%",
      // backgroundColor: "gray",
      top: "0",
    });
  }
}

// footer
{
  const containerNavFooterHome = document.createElement("section");
  mainHome.appendChild(containerNavFooterHome);
  Object.assign(containerNavFooterHome.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",

    backgroundColor: "var(--footer)",
    // height: "20rem",
  });

  createNavFooter(containerNavFooterHome);
}
