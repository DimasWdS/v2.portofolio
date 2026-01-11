function cardKanan(
  conTarget,
  displayWeb,
  // nomorProject, -> Parameter ini DIHAPUS agar otomatis
  judulProject,
  deskripsiTeks,
  teknologi,
  linkRepositori,
  linkWebsite
) {
  //layar tablet keatas
  {
    const container = document.createElement("section");
    const bg = document.createElement("section");
    const konten = document.createElement("section");

    // PERUBAHAN 1: Menggunakan prepend agar card baru ada di Posisi Paling Atas
    conTarget.prepend(container);

    container.appendChild(bg);
    container.appendChild(konten);

    konten.classList.add("ndguaus");
    container.classList.add("adadad");

    Object.assign(container.style, {
      position: "relative",
      width: "90%",
      height: "25rem",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      marginBottom: "20px",
    });

    // background
    {
      Object.assign(bg.style, {
        width: "100%",
        height: "100%",
        backgroundColor: "var(--second-background, #ccc)",
        opacity: "0.6",
      });
    }

    // konten
    {
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");

      Object.assign(konten.style, {
        height: "100%",
        width: "100%",
        position: "absolute",
        inset: "0",
        display: "flex",
      });

      konten.appendChild(div1);
      konten.appendChild(div2);

      [div1, div2].forEach((el) => {
        Object.assign(el.style, {
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        });
      });

      // div1 (Area Foto)
      {
        const conFoto = document.createElement("section");
        const conBtn = document.createElement("section");

        div1.appendChild(conFoto);
        Object.assign(conFoto.style, {
          position: "relative",
          width: "90%",
          aspectRatio: "16/10",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(asset/page-web/${displayWeb})`,
          overflow: "hidden",
        });

        conFoto.appendChild(conBtn);

        // container btn liat website
        {
          const a = document.createElement("a");
          const teks = document.createElement("p");
          const icon = document.createElement("span");

          Object.assign(conBtn.style, {
            height: "100%",
            width: "100%",
            backdropFilter: "blur(5px)",
            transform: "translateY(-100%)",
            transition: "all 0.3s ease-in-out",
          });

          conBtn.appendChild(a);
          a.appendChild(teks);
          a.appendChild(icon);

          a.setAttribute("href", `${linkWebsite}`);
          a.setAttribute("target", `_blank`);

          teks.textContent = "Visit the website";

          Object.assign(a.style, {
            display: "inline-flex",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--background-color)",
            fontWeight: "900",
            fontSize: "2em",
          });

          conFoto.addEventListener("mouseenter", () => {
            conBtn.classList.add("isfiosudig");
          });
          conFoto.addEventListener("mouseleave", () => {
            conBtn.classList.remove("isfiosudig");
          });
        }
      }
      // div2
      {
        const section1 = document.createElement("section");
        const section2 = document.createElement("section");
        const section3 = document.createElement("section");

        div2.appendChild(section1);
        div2.appendChild(section2);
        div2.appendChild(section3);

        Object.assign(div2.style, {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        });

        // section 1
        {
          Object.assign(section1.style, {
            width: "100%",
            padding: "0.5rem 1rem",
          });

          const number = document.createElement("span");
          const title = document.createElement("h3");
          const deskripsi = document.createElement("p");

          // PERUBAHAN 2: Menambahkan class khusus untuk target update nomor
          number.classList.add("auto-nomor");

          section1.appendChild(number);
          section1.appendChild(title);
          section1.appendChild(deskripsi);

          {
            window.addEventListener("scroll", () => {
              const rect = number.getBoundingClientRect();
              const windowHeight = window.innerHeight;

              if (rect.top < windowHeight && rect.bottom > 0) {
                const moveUp = (windowHeight - rect.top) * 0.06;
                number.style.transform = `translateY(-${moveUp}px)`;
              }
            });
          }
          {
            window.addEventListener("scroll", () => {
              const rect = title.getBoundingClientRect();
              const windowHeight = window.innerHeight;

              if (rect.top < windowHeight && rect.bottom > 0) {
                const moveUp = (windowHeight - rect.top) * 0.05;
                title.style.transform = `translateY(-${moveUp}px)`;
              }
            });
          }

          title.textContent = judulProject;
          deskripsi.textContent = deskripsiTeks;

          // style awal
          Object.assign(number.style, {
            fontWeight: "800",
            fontSize: "2em",
            color: "var(--main-font)",
            opacity: "0.3",
            display: "inline-block",
            transform: "translateY(40px)",
            transition: "transform 0.1s linear",
          });

          Object.assign(title.style, {
            color: "var(--main-font)",
            opacity: "0.5",
          });
          Object.assign(deskripsi.style, {
            color: "var(--main-font)",
            opacity: "0.8",
            fontWeight: "500",
          });
        }
        // section 2
        {
          const conTeknologi = document.createElement("section");
          Object.assign(section2.style, {
            width: "100%",
          });

          section2.appendChild(conTeknologi);

          Object.assign(conTeknologi.style, {
            display: "flex",
            width: "100%",
            gap: "0.5rem",
            padding: "0.4rem 1rem",
          });

          teknologi.forEach((el) => {
            const container = document.createElement("div");
            const teks = document.createElement("span");
            conTeknologi.appendChild(container);
            container.appendChild(teks);

            teks.textContent = el;
            Object.assign(container.style, {
              padding: "0.2rem 1rem",
              fontWeight: "700",
              border: "2px solid #ffffff78",
              color: "var(--blue)",
              fontSize: "0.8em",
            });
          });
        }
        // section 3
        {
          const conRepo = document.createElement("a");
          const teks = document.createElement("span");
          const icon = document.createElement("div");
          Object.assign(section3.style, {
            width: "100%",
            padding: "0.5rem 1rem",
          });

          conRepo.setAttribute("href", `${linkRepositori}`);
          conRepo.setAttribute("target", `_blanks`);

          icon.classList.add("material-icons");
          icon.textContent = "open_in_new";

          section3.appendChild(conRepo);
          conRepo.appendChild(teks);
          conRepo.appendChild(icon);

          teks.textContent = "VIEW PROJECT";

          Object.assign(conRepo.style, {
            display: "inline-flex",
            gap: "0.5rem",
            alignItems: "center",
          });

          Object.assign(teks.style, {
            color: "var(--main-font)",
            fontWeight: "900",
          });

          Object.assign(icon.style, {
            height: "1.5rem",
            aspectRatio: "1/1",
            color: "var(--main-font)",
          });
        }
      }
    }

    // class card project
    container.classList.add("hugsudy");

    const allCards = conTarget.querySelectorAll(".hugsudy");
    allCards.forEach((card, index) => {
      const numElement = card.querySelector(".auto-nomor");
      const konten = document.querySelector(".ndguaus");
      if (numElement) {
        let currentNum = index + 1;

        konten.style.flexDirection =
          currentNum % 2 === 0 ? "row" : "row-reverse";
        numElement.textContent =
          currentNum < 10 ? "0" + currentNum : currentNum;
      }
    });
  }
  // layar hp
  {
    const container = document.createElement("section");
    const conNumberHeader = document.createElement("section");
    const numberHeaderTeks = document.createElement("span");
    const header = document.createElement("header");

    conTarget.appendChild(container);
    container.appendChild(header);

    // berada di file  css/project-web/card.css
    container.classList.add("scuhas");

    Object.assign(container.style, {
      width: "80%",
      height: "5rem",
      // overflow: "hidden",
      transition: "height 0.5s ease-in-out",
      borderBottom: "1px solid var(--blue) !important",
    });

    {
      header.addEventListener("click", () => {
        // berada di file project-web/card.css
        container.classList.toggle("dsdedef");
      });
    }

    // header
    {
      const teksHeader = document.createElement("h2");
      header.appendChild(conNumberHeader);
      conNumberHeader.appendChild(numberHeaderTeks);

      numberHeaderTeks.textContent = "1";

      Object.assign(header.style, {
        position: "relative",
        height: "5rem",
        width: "100%",
        // backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        padding: "0 0.5rem",
        borderTop: "1px solid var(--blue)",
      });

      header.appendChild(teksHeader);

      teksHeader.textContent = judulProject;

      Object.assign(teksHeader.style, {
        color: "var(--main-font)",
        opacity: "0.7",
      });

      Object.assign(conNumberHeader.style, {
        position: "absolute",
        bottom: "110%",
        // backgroundColor: "red",
      });

      Object.assign(numberHeaderTeks.style, {
        fontWeight: "900",
        fontSize: "1.2em",
        color: "var(--main-font)",
      });
    }
  }
}

const containerCard = document.querySelector(".bsyusdj");

cardKanan(
  containerCard,
  "prj1/1.png",
  "Smartphone Recommendations",
  "Help you find your dream phone",
  ["HTML", "CSS", "JavaScript"],
  "https://github.com/dimaswidysap/rekomendasihp",
  "https://dimaswidysap.github.io/rekomendasihp/"
);
cardKanan(
  containerCard,
  "prj1/1.png",
  "Smartphone Recommendations",
  "Help you find your dream phone",
  ["HTML", "CSS", "JavaScript"],
  "https://github.com/dimaswidysap/rekomendasihp",
  "https://dimaswidysap.github.io/rekomendasihp/"
);
cardKanan(
  containerCard,
  "prj1/1.png",
  "Smartphone Recommendations",
  "Help you find your dream phone",
  ["HTML", "CSS", "JavaScript"],
  "https://github.com/dimaswidysap/rekomendasihp",
  "https://dimaswidysap.github.io/rekomendasihp/"
);
cardKanan(
  containerCard,
  "prj1/1.png",
  "Smartphone Recommendations",
  "Help you find your dream phone",
  ["HTML", "CSS", "JavaScript"],
  "https://github.com/dimaswidysap/rekomendasihp",
  "https://dimaswidysap.github.io/rekomendasihp/"
);
