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
        height: "4rem",
        width: "100%",
        // backgroundColor: "gray",
        display: "flex",
        alignItems: "center",
      });
      Object.assign(teks.style, {
        fontSize: "4rem",
        fontWeight: "600",
        padding: "0 0 0 1rem",
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

// konten
{
  const container = document.createElement("section");
  mainAbout.appendChild(container);
  Object.assign(container.style, {
    width: "100%",
    height: "100dvh",
    backgroundColor: "gray",
  });
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
