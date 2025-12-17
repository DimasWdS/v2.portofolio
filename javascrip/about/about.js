import {
  createNavFooter,
  sum,
  headerNav,
  createCardKarir,
  createQuestion,
  gilapEffect,
} from "../../module/module.mjs";

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
            // textShadow: "5px 5px 5px rgba(0, 0, 0, 1)",
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
          // backgroundColor: "yellow",
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

          backgroundImage: "url(asset/my-foto/1.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        });

        gilapEffect(conImgKanan, "4");

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
// halaman illlustrator
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
      position: "relative",
      width: "100%",
      height: "50rem",
      // backgroundColor: "yellow",
      // transform: "translateX(20rem)",
      left: "20rem",
      display: "flex",
      justifyContent: "end",
    });

    Object.assign(firstCon.style, {
      position: "absolute",
      height: "80%",
      aspectRatio: "16/9",
      // backgroundColor: "gray",
      transform: "translateX(40%)",
      scale: "1.2",
      margin: "5rem 0 0 0",
    });

    firstCon.classList.add("abdg");

    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      document.querySelector(".abdg").style.transform = `translateX(-${
        scroll * 0.1
      }px)`;
    });

    Object.assign(secondCon.style, {
      position: "relative",
      width: "100%",
      height: "100%",
      opacity: "80%",
      // backgroundColor: "gray",
    });
    for (let i = 0; i < 4; i++) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      secondCon.appendChild(div);
      div.appendChild(img);

      Object.assign(div.style, {
        position: "absolute",
        width: "100%",
        height: "100%",
        // backgroundColor: "blue",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeate",
        backgroundSize: "cover",
      });

      img.setAttribute("loading", "lazy");

      switch (i) {
        case 0:
          div.classList.add("ekor");
          img.setAttribute("alt", "ekor");
          img.setAttribute("src", "asset/page-about/garuda/ekor.png");
          break;
        case 1:
          div.classList.add("sayap-kiri");
          img.setAttribute("alt", "sayapkiri");
          img.setAttribute("src", "asset/page-about/garuda/sayapkiri.png");
          break;
        case 2:
          div.classList.add("sayap-kanan");
          img.setAttribute("alt", "sayapkanan");
          img.setAttribute("src", "asset/page-about/garuda/sayapkanan.png");
          break;
        case 3:
          div.classList.add("objek-random");
          img.setAttribute("alt", "badan");
          img.setAttribute("src", "asset/page-about/garuda/badan.png");
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
    const conTollsIllustrator = document.createElement("section");

    container.appendChild(conTeks);
    {
      conTeks.appendChild(div);
      div.appendChild(teksSatu);
      div.appendChild(teksDua);
      conTeks.appendChild(conTollsIllustrator);

      {
        teksSatu.textContent = "I CAN MAKE ILLUSTRATION";
        teksDua.textContent = "FOR YOU.";

        Object.assign(conTeks.style, {
          position: "absolute",
          width: "100%",
          height: "50rem",
          // backgroundColor: "green",
          top: "0",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
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
            // textShadow: "5px 5px 5px rgba(0, 0, 0, 1)",
          });
          if (dex === 1) {
            el.style.position = "absolute";
            el.style.top = "55%";
          }
        });

        {
          Object.assign(conTollsIllustrator.style, {
            // backgroundColor: "green",
            position: "relative",
            margin: "2rem 0 0 1rem",
            display: "flex",
            gap: "1rem",
            overflow: "hidden",
            backgroundColor: "var(--second-background)",
            width: "max-content",
            padding: "1rem",
            borderRadius: "20px",
          });

          gilapEffect(conTollsIllustrator, "5");

          for (let i = 0; i < 2; i++) {
            const div = document.createElement("div");
            const img = document.createElement("img");

            img.setAttribute("loading", "lazy");
            img.setAttribute("alt", "icon-tools");

            conTollsIllustrator.appendChild(div);
            div.appendChild(img);

            Object.assign(div.style, {
              width: "4rem",
              aspectRatio: "1/1",
              // backgroundColor: "green",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            });

            Object.assign(img.style, {
              height: "100%",
              width: "100%",
            });

            switch (true) {
              case i === 0:
                img.setAttribute("src", "asset/icon/adobeillustratoricon.svg");
                break;
              case i === 1:
                img.setAttribute("src", "asset/icon/clipstudiopaint.png");
                break;
            }
          }
        }
      }
    }
    //
  }
}
// halaman web devoloper
{
  const container = document.createElement("section");
  const header = document.createElement("header");
  const firstCon = document.createElement("section");
  const secondCon = document.createElement("section");
  const layarAtas = document.createElement("section");
  function createCard(iconLogo, teksKonten) {
    const container = document.createElement("div");
    const containerDua = document.createElement("section");
    const conImg = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");
    for (let i = 0; i < 2; i++) {
      const div = document.createElement("div");
      container.appendChild(div);
      Object.assign(div.style, {
        position: "absolute",
        height: "80%",
        aspectRatio: "1/1",
        backgroundColor: "var(--accen-color)",
        borderRadius: "12px",
        transform: "translateY(-3px) translateX(-3px)",
      });
      if (i === 1) {
        Object.assign(div.style, {
          bottom: "0",
          right: "0",
          transform: "translateY(3px) translateX(3px)",
        });
      }
    }

    secondCon.appendChild(container);
    container.appendChild(containerDua);
    containerDua.appendChild(conImg);
    conImg.appendChild(img);
    containerDua.appendChild(span);

    span.textContent = teksKonten;

    img.setAttribute("src", `asset/icon/${iconLogo}`);
    img.setAttribute("alt", "logo");
    img.setAttribute("loading", "lazy");

    Object.assign(container.style, {
      position: "relative",
      // backgroundColor: "yellow",
      // margin: "0 3rem 0 0",
    });
    Object.assign(containerDua.style, {
      backgroundColor: "var(--main-font)",
      display: "flex",
      padding: "0.2rem 1rem 0.2rem 0.2rem",
      borderRadius: "10px",
      gap: "1rem",
      alignItems: "center",
      position: "relative",
      zIndex: "2",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    });

    Object.assign(conImg.style, {
      height: "3rem",
      aspectRatio: "1/1",
      // backgroundColor: "cyan",
      borderRadius: "5px",
    });
    Object.assign(span.style, {
      color: "var(--background-color)",
      fontWeight: "800",
    });
  }
  //
  mainAbout.appendChild(container);
  container.appendChild(layarAtas);
  container.appendChild(header);
  container.appendChild(firstCon);
  firstCon.appendChild(secondCon);

  secondCon.classList.add("con-tech-scroll");

  header.textContent = "AND I CAN MAKE WEB FOR YOU.";

  Object.assign(container.style, {
    position: "relative",
    width: "100%",
    maxWidth: "80rem",
    overflow: "hidden",
    backgroundColor: "var(--second-background)",
    // borderRadius: "5px",
  });

  Object.assign(layarAtas.style, {
    position: "absolute",
    height: "100%",
    width: "100%",
    // backgroundColor: "green",
    zIndex: "5",
    boxShadow: "inset 0 0 30px rgba(0, 0, 0, 0.76)",
  });

  Object.assign(header.style, {
    width: "100%",
    padding: "0 0 0 1rem",
    color: "var(--main-font)",
    fontWeight: "800",
    fontSize: "clamp(1rem, calc(3vw + 1rem), 3rem)",
    margin: "0 0 3rem 0",
  });

  Object.assign(firstCon.style, {
    width: "100%",
    display: "flex",
    margin: "1rem 0 1rem 0",
    gap: "2.5rem",
    // flexDirection: "column",
    // backgroundColor: "green",
  });

  Object.assign(secondCon.style, {
    display: "flex",
    gap: "2.5rem",
    flexShrink: "0",
  });

  createCard("html.svg", "HTML");
  createCard("css.svg", "CSS");
  createCard("tailwindcss.svg", "Tailwind CSS");
  createCard("javascript.svg", "JavaScrip");

  for (let i = 0; i < 2; i++) {
    const secondConClone = secondCon.cloneNode(true);

    firstCon.appendChild(secondConClone);
  }

  {
    const tes = firstCon.cloneNode(true);

    container.appendChild(tes);

    tes.classList.add("clone-tech-scroll");
  }
}
// halaman my story
{
  const containerGallery = document.createElement("section");
  const containerStory = document.createElement("section");

  mainAbout.appendChild(containerGallery);
  mainAbout.appendChild(containerStory);

  containerGallery.classList.add("about-mystory");
  containerStory.classList.add("dlkuo");

  Object.assign(containerStory.style, {
    // height: "100dvh",
    // width: "100%",
    // backgroundColor: "red",
    maxWidth: "60rem",
    padding: "0 5%",
  });

  Object.assign(containerGallery.style, {
    // height: "100vh",
    position: "relative",
    width: "100%",
    maxWidth: "80rem",
    // backgroundColor: "green",
    position: "relative",
    margin: "5rem 0 0 0",
    display: "flex",
    justifyContent: "center",
    height: "50rem",
  });
}
// halaman experince
{
  const container = document.createElement("section");
  const header = document.createElement("header");
  const conKarir = document.createElement("section");
  const conKarirSidebar = document.createElement("section");
  const conCard = document.createElement("section");

  mainAbout.appendChild(container);
  container.appendChild(header);
  container.appendChild(conKarir);
  conKarir.appendChild(conKarirSidebar);
  conKarir.appendChild(conCard);

  header.textContent = "MY EXPERINCE";

  conKarirSidebar.classList.add("sidebar-karir");

  Object.assign(container.style, {
    width: "100%",
    maxWidth: "80rem",
    margin: "0 0 5rem 0",
    // backgroundColor: "green",
  });

  Object.assign(header.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "yellow",
    margin: "7rem 0 5rem 0",
    fontSize: "clamp(1rem, calc(3vw + 1rem), 3rem)",
    fontWeight: "800",
    color: "var(--main-font)",
    // backgroundColor: "green",
    // textShadow: "5px 5px 5px rgba(0, 0, 0, 1)",
  });

  Object.assign(conKarir.style, {
    width: "100%",
    // height: "100vh",
    display: "flex",
    // backgroundColor: "yellow",
  });
  Object.assign(conKarirSidebar.style, {
    width: "15rem",
    borderRight: "1px solid var(--line)",
    // backgroundColor: "green",
  });
  Object.assign(conCard.style, {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    // backgroundColor: "yellow",
    padding: "1rem 0 1rem 0",
  });
  createCardKarir(
    conCard,
    ["2025", "until now"],
    ["Freelance Illustrator", "Happy to work with you."],
    [
      "Saya senang menggunakan Adobe Illustrator untuk membuat karya saya.",
      "Saya juga sedang belajar menggunakan Software Clip Studio Paint.",
    ]
  );

  createCardKarir(
    conCard,
    ["2023", "5 months"],
    ["Network Installation Technician", "@MENAKSOPAL LINK LUSANTARA"],
    [
      "Dapat melakukan instalasi FFTH, mampu menyambung kabel fiber optic menggunakan splicer ataupun menggunakan konektor fiber optic tipe SC.",
      "Dapat melakukan instalasi wifi dengam metode paralel, mampu memasang konektor RJ45 ke kabel lan",
      "Dapat melakukan konfigurasi ke Router.",
    ]
  );
}
// quit quettion
{
  const container = document.createElement("section");
  const header = document.createElement("header");
  const conQuestion = document.createElement("section");

  mainAbout.appendChild(container);
  container.appendChild(header);
  container.appendChild(conQuestion);

  Object.assign(container.style, {
    // height: "20rem",
    width: "100%",
    maxWidth: "80rem",
    // backgroundColor: "yellow",
    padding: "1rem",
    margin: "5rem 0",
  });
  // header
  {
    const p = document.createElement("p");

    header.appendChild(p);

    p.textContent = "QUICK QUESTION ?";

    Object.assign(header.style, {
      // height: "1rem",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      // backgroundColor: "green",
    });
    Object.assign(p.style, {
      color: "var(--main-font)",
      fontWeight: "800",
      fontSize: "clamp(1rem, calc(3vw + 1rem), 3rem)",
    });
  }
  //container pertanyaan
  {
    Object.assign(conQuestion.style, {
      // height: "10rem",
      width: "100%",
      // backgroundColor: "yellow",
      display: "flex",
      gap: "1rem",
      flexDirection: "column",
      alignItems: "center",
      margin: "2rem 0",
    });

    createQuestion(
      conQuestion,
      "Kenapa memilih 2 bidang keahlian?",
      "Menurut saya diera sekarang jika seorang individu ingin berkerja didalam teknologi tidak cukup dengan hanya satu bidang keahlian."
    );
    createQuestion(
      conQuestion,
      "Kenapa memilih Illustrator",
      "Semua berasal dari menonton video dari konten kreator yang bernama Pamzky dari platfrom tiktok di tahun 2023, dari situ saya menjadikan menggambar sebagai hobi."
    );
    createQuestion(
      conQuestion,
      "Kenapa memilih Frontend",
      "Saya memasukan Frontend kedalam kemampuan saya karena itu adalah tujuan saya masuk kedalam dunia teknologi, hal itu dimulai saat saya masuk ke SMKN 1 GEGER jurusan Teknik Komputer dan Jaringan"
    );
    createQuestion(
      conQuestion,
      "Tools apa yang saya gunakan untuk membuat Illustrasi?",
      "Untuk sekarang saya sangat nyaman menggunakan software Adobe Illustrator"
    );
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
