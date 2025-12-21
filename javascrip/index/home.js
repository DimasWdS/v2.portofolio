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
// background
{
  const conBackground = document.createElement("section");
  const balok = document.createElement("div");
  const bendera = document.createElement("div");

  mainHome.appendChild(conBackground);

  Object.assign(conBackground.style, {
    height: "100%",
    width: "100%",
    position: "absolute",
    overflow: "hidden",
  });
  // balok
  {
    conBackground.appendChild(balok);

    Object.assign(balok.style, {
      width: "100%",
      height: "40%",
      position: "absolute",
      backgroundColor: "var(--second-background)",
      top: "50%",
      transform: "translateY(-50%) rotate(45deg) scaleX(1000%)",
    });
  }
  // bendera
  {
    conBackground.appendChild(bendera);

    Object.assign(bendera.style, {
      position: "fixed",
      // top: "-20%",
      right: "-5%",
      rotate: "12deg",
      height: "30rem",
      aspectRatio: "1/1",
      // backgroundColor: "green",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: "url(asset/page-contack/bendera.png)",
      filter: "blur(3px)",
    });
  }
}

// home
{
  const container = document.createElement("section");

  mainHome.appendChild(container);

  Object.assign(container.style, {
    height: "calc(var(--vh) * 100)",
    width: "100%",
    // backgroundColor: "green",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    zIndex: "2",
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
      backgroundImage: "url(asset/my-foto/personhomelow.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "fixed",
      zIndex: "0",
      filter: "drop-shadow(10px -10px 5px rgba(0, 0, 0, 0.4))",
      // opacity: "70%",
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
    const btnCv = document.createElement("button");

    container.appendChild(conKonten);
    conKonten.appendChild(header);
    header.appendChild(teks1);
    header.appendChild(teks2);
    conKonten.appendChild(konten);
    conKonten.appendChild(btnCv);

    conKonten.classList.add("con-konten-home");

    teks1.textContent = "HALLO THERE 🤚,";
    teks2.textContent = "I'M WIDY";
    teks3.textContent = "EXPERIENCED ILLUSTRATOR AND FRONTEND WEB DEVELOPER";
    konten.innerHTML = `ILLUSTRATOR <span style="color: var(--accen-color)">|</span> FRONTEND`;
    btnCv.textContent = "CV";

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
      color: "var(--line)",
      fontWeight: "500",
      margin: "5% 0 0 0",
    });
    Object.assign(btnCv.style, {
      width: "max-content",
      margin: "1rem 0 0 0",
      padding: "0.5rem 6rem",
      borderRadius: "20px",
      color: "var(--line)",
      fontWeight: "700",
      backgroundColor: "var(--second-background)",
      border: "2px solid var(--accen-color)",
      cursor: "pointer",
    });
    [teks1, teks2, teks3, konten].forEach((el) => {
      Object.assign(el.style, {
        // backgroundColor: "green",
        // color: "#222222ff",
        // textShadow: "5px 5px 5px rgba(0, 0, 0, 1)",
      });
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
