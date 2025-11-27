function createQuestion(conTarget, pertanyaan, jawaban) {
  const container = document.createElement("section");
  const header = document.createElement("header");
  const conBtn = document.createElement("div");
  const conAnswer = document.createElement("section");
  const headerBlok = document.createElement("section");

  conTarget.appendChild(container);
  container.appendChild(header);

  Object.assign(container.style, {
    // height: "5rem",
    width: "100%",
    maxWidth: "40rem",
    // backgroundColor: "cyan",
    borderTop: "2px solid var(--line)",
    borderBottom: "2px solid var(--line)",
    overflow: "hidden",
    // transition: "all 0.2s ease",
  });
  //header
  {
    const p = document.createElement("section");

    header.appendChild(p);
    header.appendChild(conBtn);

    p.textContent = pertanyaan;

    Object.assign(header.style, {
      width: "100%",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
    });
    Object.assign(p.style, {
      color: "var(--blue)",
      fontWeight: "800",
      fontSize: "clamp(0.5rem, calc(3vw + 1rem), 1.5rem)",
      whiteSpace: "normal",
      wordWrap: "break-word", // lama tapi masih banyak dipakai
      overflowWrap: "break-word", // modern
      width: "80%",
      transition: "all 0.2s ease",
      // backgroundColor: "yellow",
      position: "relative",
    });
    Object.assign(conBtn.style, {
      height: "1rem",
      aspectRatio: "1/1",
      // backgroundColor: "yellow",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "all 0.2s ease",
    });

    for (let i = 0; i < 2; i++) {
      const span = document.createElement("span");
      conBtn.appendChild(span);
      Object.assign(span.style, {
        display: "inline-flex",
        height: "3px",
        width: "100%",
        backgroundColor: "var(--line)",
        position: "absolute",
        // inset: "0",
        borderRadius: "5px",
      });
      if (i === 0) {
        Object.assign(span.style, {
          transform: "rotate(90deg)",
          backgroundColor: "var(--accen-color)",
        });
      }
    }
    // header hover
    {
      header.addEventListener("mouseenter", () => {
        conBtn.style.transform = "translateX(-50%)";
        p.style.transform = "translateX(2%)";
      });
      header.addEventListener("mouseleave", () => {
        conBtn.style.transform = "translateX(0)";
        p.style.transform = "translateX(0)";
      });
    }
  }
  // con jawaban
  {
    const p = document.createElement("p");
    const penutup = document.createElement("section");

    container.appendChild(conAnswer);
    conAnswer.appendChild(p);
    conAnswer.appendChild(penutup);

    penutup.classList.add("penutup");

    p.textContent = jawaban;

    Object.assign(conAnswer.style, {
      width: "100%",
      // height: "4rem",
      padding: "0 1.2rem",
      position: "relative",

      transition: "0.2s ease",
      //   backgroundColor: "green",
      margin: "0 0 1rem 0",

      display: "none",
    });

    Object.assign(p.style, {
      color: "var(--main-font)",
      fontSize: "0.9em",
      fontWeight: "300",
    });

    Object.assign(penutup.style, {
      height: "100%",
      width: "100%",
      backgroundColor: "var(--background-color)",
      inset: "0",
      position: "absolute",
      transition: "all 0.7s ease",
      // transition: "all 3s ease-in-out",
    });
    // header ketika di klik
    {
      header.addEventListener("click", () => {
        conAnswer.classList.toggle("counterNone");
        conBtn.classList.toggle("logoX");
        // penutup.style.transform = "translateY(100%)";
        setTimeout(() => {
          // console.log("Ini muncul setelah 2 detik");
          penutup.classList.toggle("penutupTurun");
        }, 500);
      });
    }
  }

  // header blok

  {
    header.appendChild(headerBlok);
    Object.assign(headerBlok.style, {
      position: "absolute",
      height: "100%",
      width: "100%",
      // backgroundColor: "green",
    });
  }
}

export { createQuestion };
