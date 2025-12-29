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
    // backgroundColor: "red",
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

  {
    function createBtnSlide(conTarget, content, idButton, jarak) {
      const container = document.createElement("section");
      const button = document.createElement("button");
      conTarget.appendChild(container);
      container.appendChild(button);

      button.setAttribute("id", `${idButton}`);

      button.textContent = `${content}`;

      Object.assign(container.style, {
        position: "absolute",
        width: "10rem",
        height: "3rem",
        backgroundColor: "red",
        right: "100%",
        top: `${jarak}rem`,
      });

      Object.assign(button.style, {
        display: "inline-flex",
        height: "100%",
        width: "100%",
        // background: 'color:"green',
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2em",
        fontWeight: "800",
      });
    }

    const container = document.createElement("section");
    const conFrontEnd = document.createElement("section");
    const conBackEnd = document.createElement("section");
    const tools = document.createElement("section");

    console.log(container);
    Object.assign(teknologi.style, {
      width: "100%",
      height: "100%",
      // backgroundColor: "red",
      display: "flex",
      justifyContent: "end",
    });
    teknologi.appendChild(container);
    container.appendChild(conFrontEnd);
    container.appendChild(conBackEnd);
    container.appendChild(tools);

    Object.assign(container.style, {
      position: "relative",
      width: "50%",
      height: "100%",
      overflow: "hidden",
      // backgroundColor: "cyan",
    });

    [conFrontEnd, conBackEnd, tools].forEach((el, dex) => {
      Object.assign(el.style, {
        position: "absolute",
        inset: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "yellow",
        // transform: "translateX(100%)",
      });
      // class berada di file web-devoloper.css
      el.classList.add("go-right");

      switch (true) {
        case dex === 0:
          createBtnSlide(el, "Front End", "btn-frontend", "0");
          break;
        case dex === 1:
          createBtnSlide(el, "Back End", "btn-backend", "4");
          break;
        case dex === 2:
          createBtnSlide(el, "Tools", "btn-tools", "8");
          break;
      }
    });
  }
}
