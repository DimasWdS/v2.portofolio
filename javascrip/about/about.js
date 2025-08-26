import { createNavFooter, sum, headerNav } from "../../module/module.mjs";

const mainAbout = document.createElement("main");
document.body.appendChild(mainAbout);
Object.assign(mainAbout.style, {
  backgroundColor: "var(--background-color)",
});

// nav
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
//halaman awal
{
  const container = document.createElement("section");
  const headerKiri = document.createElement("section");

  const teksSatu = document.createElement("span");
  const teksDua = document.createElement("span");
  const teksTiga = document.createElement("span");

  const conImgKanan = document.createElement("div");

  teksSatu.textContent = "FIRST🤚.";
  teksDua.textContent = "MY FULL NAME IS";
  teksTiga.textContent = "DIMAS WIDY SAPUTRA";

  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
    div.classList.add("box-home-about");
    Object.assign(div.style, {
      width: "50%",
      height: "100%",
      // backgroundColor: "blue",
    });
    switch (i) {
      case 0:
        div.appendChild(headerKiri);
        headerKiri.appendChild(teksSatu);
        headerKiri.appendChild(teksDua);
        headerKiri.appendChild(teksTiga);

        Object.assign(div.style, {
          // backgroundColor: "green",
          display: "grid",
          placeItems: "center",
        });

        Object.assign(headerKiri.style, {
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        });
        [teksSatu, teksDua, teksTiga].forEach((el, dex) => {
          Object.assign(el.style, {
            fontSize: "clamp(1rem, calc(3vw + 1rem), 3rem)",
            fontWeight: "900",
            color: "var(--main-font)",
            margin: "0 0 0 1rem",
          });
          if (dex == 0) {
            el.style.position = "absolute";
            el.style.bottom = "60%";
          } else if (dex === 2) {
            el.style.position = "absolute";
            el.style.top = "60%";
          }
        });
        break;
      case 1:
        div.appendChild(conImgKanan);

        Object.assign(div.style, {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        });

        Object.assign(conImgKanan.style, {
          position: "relative",
          width: "50%",
          aspectRatio: "6/7",
          // backgroundColor: "yellow",
          // borderRadius: "10px",
          border: "2px solid var(--line)",
          // boxShadow:
          //   "rgba(50, 50, 93, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 1) 0px 3px 20px -3px",

          backgroundImage: "url(asset/my-foto/1.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        });

        break;
    }
  }
  // garis hiasan container foto
  {
    const lineSatu = document.createElement("span");
    const lineDua = document.createElement("span");
    const lineTiga = document.createElement("span");
    const lineEmpat = document.createElement("span");
    const lineLima = document.createElement("span");
    const lineEnam = document.createElement("span");

    conImgKanan.appendChild(lineSatu);
    conImgKanan.appendChild(lineDua);
    conImgKanan.appendChild(lineTiga);
    conImgKanan.appendChild(lineEmpat);
    conImgKanan.appendChild(lineLima);
    conImgKanan.appendChild(lineEnam);

    [lineSatu, lineDua, lineTiga, lineEmpat, lineLima, lineEnam].forEach(
      (el) => {
        Object.assign(el.style, {
          position: "absolute",
          display: "inline-blok",
          backgroundColor: "var(--line)",
        });

        Object.assign(lineSatu.style, {
          width: "5rem",
          right: "100%",
          top: "0",
          height: "2px",
          transform: "translateY(-100%)",
        });
        Object.assign(lineDua.style, {
          width: "10rem",
          height: "2px",
          bottom: "0",
          left: "100%",
          transform: "translateY(100%)",
        });
        Object.assign(lineTiga.style, {
          height: "5rem",
          width: "2px",
          top: "100%",
          transform: "translateX(-100%)",
        });
        Object.assign(lineEmpat.style, {
          width: "15rem",
          height: "2px",
          top: "100%",
          right: "100%",
        });
        Object.assign(lineLima.style, {
          width: "2rem",
          height: "2px",
          left: "100%",
          bottom: "100%",
        });
        Object.assign(lineEnam.style, {
          height: "10rem",
          width: "2px",
          left: "100%",
          bottom: "100%",
        });
      }
    );
  }

  mainAbout.appendChild(container);

  container.classList.add("home-about");

  Object.assign(container.style, {
    width: "100%",
    maxWidth: "80rem",
    height: "100dvh",
    // backgroundColor: "yellow",
    display: "flex",
    margin: "auto",
    overflow: "hidden",
  });
}
// halaman kedua
{
}

// footer
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
