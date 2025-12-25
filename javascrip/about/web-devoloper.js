const container = document.querySelector(".mnhlkju");

Object.assign(container.style, {
  position: "relative",
});

// background
{
  const conBg = document.createElement("section");
  container.appendChild(conBg);

  Object.assign(conBg.style, {
    position: "relative",
    height: "100%",
    width: "100%",
  });
}

//konten
{
  const conKonten = document.createElement("section");
  const header = document.createElement("header");
  const teknologi = document.createElement("section");

  container.appendChild(conKonten);
  conKonten.appendChild(header);
  conKonten.appendChild(teknologi);

  Object.assign(conKonten.style, {
    height: "100%",
    width: "100%",
    position: "absolute",
    inset: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    padding: "1rem",
    // backgroundColor: "green",
  });

  // berada di file web-devoloper.css
  conKonten.classList.add("jbsuia");

  //style header
  {
    const headerTeks = document.createElement("h1");

    header.appendChild(headerTeks);

    headerTeks.textContent = "AND I CAN MAKE WEBSITE FOR YOU.";

    headerTeks.classList.add("teks-title");

    Object.assign(header.style, {
      // height: "20rem",
      width: "100%",
      // padding: "1rem",
    });
  }

  //teknologi
  {
    const header = document.createElement("header");
    const conKonten = document.createElement("section");

    teknologi.appendChild(header);
    teknologi.appendChild(conKonten);

    Object.assign(teknologi.style, {
      height: "100%",
      width: "90%",
      maxWidth: "25rem",
      backgroundColor: "var(--background-color",
      outline: "2px solid var(--main-font)",
      borderRadius: "10px",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      overflow: "hidden",
    });

    function createIcon(conTarget, icon) {
      const container = document.createElement("section");
      const img = document.createElement("img");

      conTarget.appendChild(container);
      container.appendChild(img);

      img.setAttribute("alt", "icon");
      img.setAttribute("loading", "lazy");
      img.setAttribute("src", `asset/icon/tecnology/${icon}`);

      container.classList.add("jbasuag");

      Object.assign(container.style, {
        width: "4rem",
        height: "4rem",
        // backgroundColor: "green",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: "0",
      });
    }

    // header style
    {
      Object.assign(header.style, {
        width: "100%",
        height: "5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
        borderBottom: "2px solid var(--main-font)",
      });

      for (let i = 0; i < 1; i++) {
        const button = document.createElement("button");

        header.appendChild(button);

        Object.assign(button.style, {
          fontWeight: "900",
          color: "var(--main-font)",
          fontSize: "1.5em",
        });

        switch (true) {
          case i === 0:
            button.textContent = "Technology";
            break;
        }
      }
    }
    // container konten
    {
      const conTeknologi = document.createElement("section");

      Object.assign(conKonten.style, {
        position: "relative",
        height: "100%",
        width: "100%",
        // backgroundColor: "green",
      });

      conKonten.appendChild(conTeknologi);

      [conTeknologi].forEach((el, dex) => {
        Object.assign(el.style, {
          position: "relative",
          height: "100%",
          width: "100%",
        });
      });
      // //teknologi web programing
      {
        const bg = document.createElement("section");
        const konten = document.createElement("section");

        conTeknologi.appendChild(bg);
        conTeknologi.appendChild(konten);

        [bg, konten].forEach((el) => {
          Object.assign(el.style, {
            position: "absolute",
            height: "100%",
            width: "100%",
            // backgroundColor: "red",
            overflow: "hidden",
            inset: "0",
          });
        });
        // bg
        {
          const teks = document.createElement("span");

          bg.appendChild(teks);
          teks.textContent = "FRONTEND";

          Object.assign(teks.style, {
            fontWeight: "900",
            fontSize: "10em",
            color: "var(--main-font)",
            transform: "rotate(70deg)",
            opacity: "0.7",
          });

          Object.assign(bg.style, {
            // backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          });
        }
        //konten
        {
          Object.assign(konten.style, {
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start",
            justifyContent: "center",
            padding: "1rem",
            // backgroundColor: "red",
          });

          konten.classList.add("hdyiis");

          createIcon(konten, "html.svg");
          createIcon(konten, "css.svg");
          createIcon(konten, "javascript.svg");
          createIcon(konten, "tailwindcss.svg");
        }
      }
    }
  }
}
