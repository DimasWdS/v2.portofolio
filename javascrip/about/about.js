import { createNavFooter, sum, headerNav } from "../../module/module.mjs";

const mainAbout = document.createElement("main");
document.body.appendChild(mainAbout);
Object.assign(mainAbout.style, {
  backgroundColor: "var(--background-color)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
  const container = document.createElement("section");

  mainAbout.appendChild(container);

  Object.assign(container.style, {
    position: "relative",
    width: "100%",
    maxWidth: "80rem",
    // height: "50rem",
    // backgroundColor: "green",
    margin: "auto",
  });

  // con garuda
  {
    const garuda = document.createElement("section");
    const firstCon = document.createElement("section");
    const secondCon = document.createElement("section");

    container.appendChild(garuda);
    garuda.appendChild(firstCon);
    firstCon.appendChild(secondCon);

    Object.assign(garuda.style, {
      width: "100%",
      height: "50rem",
      // backgroundColor: "yellow",
      display: "flex",
      justifyContent: "end",
    });

    Object.assign(firstCon.style, {
      height: "80%",
      aspectRatio: "16/9",
      // backgroundColor: "gray",
      transform: "translateX(20%)",
      scale: "1.2",
      margin: "5rem 0 0 0",
    });
    Object.assign(secondCon.style, {
      position: "relative",
      width: "100%",
      height: "100%",
      opacity: "50%",
      // backgroundColor: "gray",
    });
    for (let i = 0; i < 4; i++) {
      const div = document.createElement("div");
      secondCon.appendChild(div);

      Object.assign(div.style, {
        position: "absolute",
        width: "100%",
        height: "100%",
        // backgroundColor: "blue",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeate",
        backgroundSize: "cover",
      });

      switch (i) {
        case 0:
          div.classList.add("ekor");
          Object.assign(div.style, {
            backgroundImage: "url(asset/page-about/garuda/garudaekor.svg)",
          });
          break;
        case 1:
          div.classList.add("sayap-kiri");
          Object.assign(div.style, {
            backgroundImage: "url(asset/page-about/garuda/garudasayapkiri.svg)",
          });
          break;
        case 2:
          div.classList.add("sayap-kanan");
          Object.assign(div.style, {
            backgroundImage:
              "url(asset/page-about/garuda/garudasayapkanan.svg)",
          });
          break;
        case 3:
          div.classList.add("objek-random");
          Object.assign(div.style, {
            backgroundImage: "url(asset/page-about/garuda/garudabadan.svg)",
          });
          break;
      }
    }
  }
  // konten teks illustrator
  {
    const conTeks = document.createElement("section");
    const div = document.createElement("section");
    const teksSatu = document.createElement("p");
    const teksDua = document.createElement("p");

    container.appendChild(conTeks);
    conTeks.appendChild(div);
    div.appendChild(teksSatu);
    div.appendChild(teksDua);

    teksSatu.textContent = "I ENJOY DRAWING";
    teksDua.textContent = "AS A HOBBY.";

    Object.assign(conTeks.style, {
      position: "absolute",
      width: "100%",
      height: "50rem",
      // backgroundColor: "green",
      top: "0",
      display: "flex",
      alignItems: "center",
    });

    Object.assign(div.style, {
      position: "relative",
      // backgroundColor: "yellow",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "0 0 0 1rem",
    });
    [teksSatu, teksDua].forEach((el, dex) => {
      Object.assign(el.style, {
        color: "var(--main-font)",
        fontWeight: "800",
        fontSize: "clamp(1rem, calc(3vw + 1rem), 3rem)",
      });
      if (dex === 1) {
        el.style.position = "absolute";
        el.style.top = "55%";
      }
    });
  }
  //con vscode tiruan
  {
    const container = document.createElement("section");
    const header = document.createElement("header");
    const vscode = document.createElement("section");

    mainAbout.appendChild(container);
    container.appendChild(header);
    container.appendChild(vscode);

    header.textContent = "AND WEB DEVOLOPMENT IS MY GOAL.";

    vscode.classList.add("clone-vscode");

    Object.assign(container.style, {
      width: "100%",
      maxWidth: "80rem",
      // backgroundColor: "green",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0 0 5rem 0",
    });
    Object.assign(header.style, {
      width: "100%",
      color: "var(--main-font)",
      padding: "0 1rem 4rem 1rem",
      fontWeight: "800",
      fontSize: "clamp(1rem, calc(3vw + 1rem), 3rem)",
    });

    Object.assign(vscode.style, {
      position: "relative",
      width: "80%",
      height: "30rem",
      backgroundColor: "var(--footer)",
      borderRadius: "10px",
      border: "2px solid var(--second-background)",
      display: "flex",
      overflow: "hidden",
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      display: "none",
      // backgroundColor: "yellow",
    });
    // navigasi kiri
    {
      const container = document.createElement("section");
      const conFakeBtn = document.createElement("section");

      vscode.appendChild(container);
      container.appendChild(conFakeBtn);

      Object.assign(container.style, {
        height: "100%",
        width: "10rem",
        backgroundColor: "#1e1e1eff",
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "green",
      });
      // fake btn
      {
        Object.assign(conFakeBtn.style, {
          width: "100%",
          height: "2rem",
          // backgroundColor: "yellow",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          margin: "0 0 1rem 0",
        });
        for (let i = 0; i < 3; i++) {
          const div = document.createElement("div");
          conFakeBtn.appendChild(div);

          Object.assign(div.style, {
            width: "10px",
            aspectRatio: "1/1",
            backgroundColor: "yellow",
            borderRadius: "50%",
          });
          switch (i) {
            case 0:
              div.style.backgroundColor = "red";
              break;
            case 1:
              div.style.backgroundColor = "yellow";
              break;
            case 2:
              div.style.backgroundColor = "green";
              break;
          }
        }
      }
      // folder about
      {
        const folderAbout = document.createElement("section");
        container.appendChild(folderAbout);
        Object.assign(folderAbout.style, {
          width: "100%",
          height: "5rem",
          backgroundColor: "green",
        });
      }
    }
    //con navigasi atas dan code
    {
      const con = document.createElement("section");
      vscode.appendChild(con);

      Object.assign(con.style, {
        width: "100%",
        height: "100%",
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
      });
      // con nav atas
      {
        const conNavAtas = document.createElement("section");

        con.appendChild(conNavAtas);

        conNavAtas.classList.add("container-nav-atas");

        Object.assign(conNavAtas.style, {
          width: "100%",
          height: "2rem",
          // backgroundColor: "black",
          display: "flex",
        });
      }
      // container konten
      {
        const conKonten = document.createElement("section");
        con.appendChild(conKonten);

        conKonten.classList.add("container-konten-vscode");

        Object.assign(conKonten.style, {
          width: "100%",
          height: "100%",
        });
      }
    }
  }
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
