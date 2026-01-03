function cardKanan(
  conTarget,
  posisi,
  displayWeb,
  nomorProject,
  judulProject,
  deskripsiTeks,
  teknologi,
  linkRepositori,
  linkWebsite
) {
  const container = document.createElement("section");
  const bg = document.createElement("section");
  const konten = document.createElement("section");

  conTarget.appendChild(container);
  container.appendChild(bg);
  container.appendChild(konten);

  Object.assign(container.style, {
    position: "relative",
    width: "90%",
    height: "25rem",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    marginBottom: "20px", // Tambahan agar ada jarak antar card
  });

  // background
  {
    Object.assign(bg.style, {
      width: "100%",
      height: "100%",
      backgroundColor: "var(--second-background, #ccc)", // Fallback color
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
      flexDirection: posisi % 2 === 0 ? "row" : "row-reverse",
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
        // backgroundColor: "green",
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
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      });

      // section 1
      {
        Object.assign(section1.style, {
          // backgroundColor: "red",
          width: "100%",
          padding: "0.5rem 1rem",
        });

        const number = document.createElement("span");
        const title = document.createElement("h3");
        const deskripsi = document.createElement("p");

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

        number.textContent = nomorProject;
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
            // backgroundColor: "red",
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
          // backgroundColor: "red",
        });
      }
    }
  }
}

const containerCard = document.querySelector(".bsyusdj");

for (let i = 0; i < 5; i++) {
  cardKanan(
    containerCard,
    0,
    "prj1/1.png",
    "01",
    "Rekomendasi Smartphone",
    "Help you find your dream phone",
    ["HTML", "CSS", "JavaScript"],
    "https://dimaswidysap.github.io/rekomendasihp/",
    "https://dimaswidysap.github.io/rekomendasihp/"
  ); // Row
  cardKanan(
    containerCard,
    1,
    "prj1/1.png",
    "02",
    "Rekomendasi Smartphone",
    "Help you find your dream phone",
    ["HTML", "CSS", "JavaScript"],
    "https://dimaswidysap.github.io/rekomendasihp/",
    "https://dimaswidysap.github.io/rekomendasihp/"
  ); // Row-Reverse
}
