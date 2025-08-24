import { createNavFooter, sum, headerNav } from "../../module/module.mjs";

const mainAbout = document.createElement("main");
document.body.appendChild(mainAbout);
Object.assign(mainAbout.style, {
  backgroundColor: "var(--background-color)",
});

//
{
  const containerHeaderNavAbout = document.createElement("section");
  mainAbout.appendChild(containerHeaderNavAbout);

  Object.assign(containerHeaderNavAbout.style, {
    width: "100%",
    // height: "5rem",
    // backgroundColor: "green",
  });
  headerNav(containerHeaderNavAbout);
}

// halaman awal
{
  const container = document.createElement("section");
  mainAbout.appendChild(container);
  Object.assign(container.style, {
    position: "relative",
    width: "100%",
    height: "100dvh",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "var(--footer)",
  });

  // konten
  {
    const containerKonten = document.createElement("section");
    const kontenTeks = document.createElement("section");

    container.appendChild(containerKonten);
    containerKonten.appendChild(kontenTeks);

    containerKonten.classList.add("container-kontenTeks-garuda");
    kontenTeks.classList.add("margin-right-teks-name");

    Object.assign(containerKonten.style, {
      width: "100%",
      maxWidth: "80rem",
      height: "100%",
      position: "absolute",
      // backgroundColor: "red",
      top: "0",
      display: "flex",
      alignItems: "center",
      zIndex: "2",
    });

    Object.assign(kontenTeks.style, {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: "var(--main-font)",
      gap: "0.1rem",
      // backgroundColor: "green",
    });
    for (let i = 0; i < 3; i++) {
      const conTeks = document.createElement("div");
      const teks = document.createElement("p");

      kontenTeks.appendChild(conTeks);
      conTeks.appendChild(teks);

      conTeks.classList.add("con-teks-page-home");
      teks.classList.add("teks-page-home");

      switch (i) {
        case 0:
          teks.textContent = "FIRST🤚. ";
          break;
        case 1:
          teks.textContent = "MY FULL NAME IS,";
          break;
        case 2:
          teks.textContent = "DIMAS WIDY SAPUTRA";
          break;
      }

      Object.assign(conTeks.style, {
        height: "3rem",
        width: "100%",
        // backgroundColor: "gray",
        display: "flex",
        alignItems: "center",
      });
      Object.assign(teks.style, {
        fontSize: "3rem",
        fontWeight: "900",
        padding: "0 0 0 1rem",
        // textShadow: "10px 2px var(--footer)",
      });
    }
  }

  // background
  {
    const garuda = document.createElement("section");
    const firstContainer = document.createElement("section");
    const secondContainer = document.createElement("section");

    container.appendChild(garuda);
    garuda.appendChild(firstContainer);
    firstContainer.appendChild(secondContainer);

    garuda.classList.add("container-background-garuda");
    firstContainer.classList.add("objek-random");

    Object.assign(garuda.style, {
      width: "100%",
      height: "100%",
      // backgroundColor: "yellow",
      display: "flex",
      justifyContent: "end",
      transform: "translateX(20%)",
      opacity: "40%",
    });

    Object.assign(firstContainer.style, {
      // width: "60rem",
      height: "100%",
      aspectRatio: "16/9",
      // backgroundColor: "green",
      scale: "1.2",
    });

    Object.assign(secondContainer.style, {
      width: "100%",
      height: "100%",
      // backgroundColor: "red",
      position: "relative",
    });

    for (let i = 0; i < 4; i++) {
      const div = document.createElement("div");

      secondContainer.appendChild(div);

      div.classList.add("container-img-garuda");

      Object.assign(div.style, {
        position: "absolute",
        height: "100%",
        width: "100%",
        // backgroundColor: "cyan",
        filter: "drop-shadow(4px 6px 6px rgba(0, 0, 0, 0.61))",
      });
    }

    const containerImg = document.querySelectorAll(".container-img-garuda");
    [...containerImg].forEach((el, dex) => {
      Object.assign(el.style, {
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      });
      switch (dex) {
        case 0:
          el.classList.add("ekor");
          Object.assign(el.style, {
            backgroundImage: "url(asset/page-about/garuda/garudaekor.svg)",
          });
          break;
        case 1:
          el.classList.add("sayap-kiri");
          Object.assign(el.style, {
            backgroundImage: "url(asset/page-about/garuda/garudasayapkiri.svg)",
          });
          break;
        case 2:
          el.classList.add("sayap-kanan");
          Object.assign(el.style, {
            backgroundImage:
              "url(asset/page-about/garuda/garudasayapkanan.svg)",
          });
          break;
        case 3:
          Object.assign(el.style, {
            backgroundImage: "url(asset/page-about/garuda/garudabadan.svg)",
          });
          break;
      }
    });
  }
}

// halaman ke dua
{
  const container = document.createElement("section");
  mainAbout.appendChild(container);
  Object.assign(container.style, {
    position: "relative",
    width: "100%",
    height: "100dvh",
    backgroundColor: "var(--second-background)",
  });

  // container tolls scroll
  {
    function createCardTools(imgIcon, teks) {
      const container = document.createElement("section");
      const conImg = document.createElement("div");
      const img = document.createElement("img");
      const name = document.createElement("p");

      secondContainer.appendChild(container);
      container.appendChild(conImg);
      conImg.appendChild(img);
      container.appendChild(name);

      name.textContent = teks;

      img.setAttribute("loading", "lazy");
      img.setAttribute("src", `asset/icon/${imgIcon}`);
      img.setAttribute("alt", "logo");

      Object.assign(container.style, {
        padding: "0.4rem",
        backgroundColor: "var(--line)",
        margin: "0 1rem 0 0",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        flexShrink: "0",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      });

      Object.assign(conImg.style, {
        height: "50px",
        aspectRatio: "1/1",
        // backgroundColor: "yellow",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      });
      Object.assign(name.style, {
        fontWeight: "800",
        fontSize: "1.2em",
        color: "var(--footer)",
      });
    }

    const containerTech = document.createElement("section");
    const firstContainer = document.createElement("section");
    const secondContainer = document.createElement("section");

    container.appendChild(containerTech);
    containerTech.appendChild(firstContainer);
    firstContainer.appendChild(secondContainer);

    Object.assign(containerTech.style, {
      position: "absolute",
      width: "100%",
      height: "5rem",
      // backgroundColor: "yellow",
      // opacity: "30%",
      top: "0",
      display: "flex",
      // transform: "translateY(-50%)",
    });
    Object.assign(firstContainer.style, {
      overflow: "hidden",
      width: "90%",
      maxWidth: "80rem",
      height: "100%",
      backgroundColor: "var(--footer)",
      margin: "auto",
      borderRadius: "0 0 10px 10px",
      boeder: "2px solid var(--accen-color)",
      // boxShadow: "rgba(0, 0, 0, 0.69) 0px 3px 8px",
      display: "flex",
    });
    Object.assign(secondContainer.style, {
      // width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      // backgroundColor: "yellow",
      flexShrink: "0",
      animation: "toolsScroll 20s linear infinite",
    });

    createCardTools("html.svg", "HTML");
    createCardTools("css.svg", "CSS");
    createCardTools("javascript.svg", "JavaScrip");
    createCardTools("tailwindcss.svg", "Tailwind css");

    for (let i = 0; i < 3; i++) {
      const conScrollClone = secondContainer.cloneNode(true);
      firstContainer.appendChild(conScrollClone);
    }
  }
}

{
  const containerNavFooterAbout = document.createElement("section");
  mainAbout.appendChild(containerNavFooterAbout);
  Object.assign(containerNavFooterAbout.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "var(--footer)",
    // height: "20rem",
  });

  createNavFooter(containerNavFooterAbout);
}
