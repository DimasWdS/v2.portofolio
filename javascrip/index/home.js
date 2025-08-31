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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // margin: "0 0 5rem 0",
  });

  // background
  {
    const conBg = document.createElement("section");
    const wrapperPerson = document.createElement("section");
    const bgPerson = document.createElement("div");

    container.appendChild(conBg);
    conBg.appendChild(wrapperPerson);
    wrapperPerson.appendChild(bgPerson);

    bgPerson.classList.add("wrapper-person");

    Object.assign(conBg.style, {
      position: "relative",
      height: "100%",
      width: "100%",
      // backgroundColor: "green",
    });
    Object.assign(wrapperPerson.style, {
      position: "absolute",
      width: "100%",
      height: "100%",
      // backgroundColor: "cyan",
    });

    Object.assign(bgPerson.style, {
      height: "100%",
      aspectRatio: "16/9",
      // backgroundColor: "red",
      backgroundImage: "url(asset/my-foto/personv2.svg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "fixed",
      zIndex: "0",
      filter: "drop-shadow(10px -10px 5px rgba(0, 0, 0, 0.4))",
      opacity: "70%",
    });
  }
  // konten
  {
    const conKonten = document.createElement("section");
    const header = document.createElement("header");
    const teks1 = document.createElement("p");
    const teks2 = document.createElement("p");
    const teks3 = document.createElement("p");
    const konten = document.createElement("span");

    container.appendChild(conKonten);
    conKonten.appendChild(header);
    header.appendChild(teks1);
    header.appendChild(teks2);
    conKonten.appendChild(konten);

    conKonten.classList.add("con-konten-home");

    teks1.textContent = "HALLO THERE 🤚,";
    teks2.textContent = "I'M WIDY";
    teks3.textContent = "EXPERIENCED ILLUSTRATOR AND FRONTEND WEB DEVELOPER";
    konten.textContent = "ILLUSTRATOR | WEB DEVOLOPER";

    Object.assign(conKonten.style, {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      height: "100%",
      maxWidth: "80rem",
      margin: "auto",
      width: "100%",
      // backgroundColor: "gray",
      top: "0",
      paddingLeft: "10%",
      paddingRight: "10%",
    });

    Object.assign(header.style, {
      width: "100%",
      color: "var(--line)",
      fontWeight: "800",
      fontSize: "clamp(1.5rem, calc(3vw + 1rem), 3rem)",
      position: "relative",
      // backgroundColor: "green",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "10rem 0 0 0",
    });
    Object.assign(teks2.style, {
      position: "absolute",
      top: "60%",
    });
    Object.assign(teks3.style, {
      fontSize: "clamp(0.5rem, calc(3vw + 1rem), 1rem)",
      fontWeight: "400",
    });

    Object.assign(konten.style, {
      // height: "2rem",
      width: "100%",
      // backgroundColor: "green",
      color: "var(--main-font)",
      fontWeight: "500",
      margin: "5% 0 0 0",
    });
  }
}

// footer
{
  const containerNavFooterHome = document.createElement("section");
  mainHome.appendChild(containerNavFooterHome);
  Object.assign(containerNavFooterHome.style, {
    position: "relative",
    zIndex: "5",
    width: "100%",
    display: "flex",
    justifyContent: "center",

    backgroundColor: "var(--footer)",
    // height: "20rem",
  });

  createNavFooter(containerNavFooterHome);
}
