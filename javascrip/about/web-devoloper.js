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
  {
    const conParalax = document.createElement("section");
    const gambar = document.createElement("div");

    conBg.appendChild(conParalax);
    conParalax.appendChild(gambar);

    Object.assign(conParalax.style, {
      position: "relative",
      height: "100%",
      width: "100%",
      // backgroundColor: "red",
      overflow: "hidden",
    });

    Object.assign(gambar.style, {
      height: "100%",
      width: "100%",
      // backgroundColor: "green",
      position: "sticky",
      backgroundPosition: "center",
      backgroundSize: "cover",
      baclgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      // backgroundImage: "url(bgpesawat.jpg)",

      // inset: "0",
    });
  }
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

      // button.setAttribute("id", `${idButton}`);
      container.setAttribute("id", `${idButton}`);

      button.textContent = `${content}`;

      Object.assign(container.style, {
        position: "absolute",
        width: "10rem",
        height: "3rem",
        // backgroundColor: "red",
        right: "100%",
        top: `${jarak}rem`,
        transition: "all 0.5s ease-in-out",
        border: "2px solid var(--accen-color)",
        // backgroundColor: "white",
        backdropFilter: "blur(4px)",
      });

      Object.assign(button.style, {
        display: "inline-flex",
        height: "100%",
        width: "100%",
        color: "var(--main-font)",
        // background: 'color:"green',
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2em",
        fontWeight: "800",
      });
    }

    function createIcon(conTarget, link, width) {
      const container = document.createElement("section");
      const img = document.createElement("img");

      conTarget.appendChild(container);
      container.appendChild(img);

      container.classList.add("jbasuag");

      img.setAttribute("src", `${link}`);
      img.setAttribute("width", `${width}`);

      Object.assign(container.style, {
        height: "3.5rem",
        aspectRatio: "1/1",
        backgroundColor: "var(--footer)",
        padding: "0.8rem",
        borderRadius: "50%",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        transition: "all 0.2s ease-in-out",
      });

      Object.assign(img.style, {
        // backgroundColor: "red",
        // borderRadius: "50%",
      });
    }

    const container = document.createElement("section");
    const conFrontEnd = document.createElement("section");
    const conBackEnd = document.createElement("section");
    const tools = document.createElement("section");

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

    container.classList.add("displayMobileNone");

    Object.assign(container.style, {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      // backgroundColor: "cyan",
      padding: "0.5rem 0",
    });

    [conFrontEnd, conBackEnd, tools].forEach((el, dex) => {
      el.classList.add("hdyiis");
      Object.assign(el.style, {
        position: "absolute",
        // inset: "0",
        height: "100%",
        width: "50%",
        backgroundColor: "var(--second-background)",
        transition: "0.3s ease-in-out",
        right: "0",
        // borderRadius: "10px",
        padding: "1rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        alignContent: "flex-start",
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
    // fitur buka tutup
    {
      const frontEndBtn = document.getElementById("btn-frontend");
      const backendBtn = document.getElementById("btn-backend");
      const toolsBtn = document.getElementById("btn-tools");

      frontEndBtn.addEventListener("click", () => {
        conFrontEnd.classList.toggle("go-left");
        conFrontEnd.classList.toggle("zIndex");
        backendBtn.classList.toggle("go-right");
        backendBtn.classList.toggle("opacity");
        toolsBtn.classList.toggle("go-right");
        toolsBtn.classList.toggle("opacity");
      });
      backendBtn.addEventListener("click", () => {
        conBackEnd.classList.toggle("go-left");
        conBackEnd.classList.toggle("zIndex");
        //
        frontEndBtn.classList.toggle("go-right");
        frontEndBtn.classList.toggle("opacity");
        toolsBtn.classList.toggle("go-right");
        toolsBtn.classList.toggle("opacity");
      });
      toolsBtn.addEventListener("click", () => {
        tools.classList.toggle("go-left");
        tools.classList.toggle("zIndex");
        frontEndBtn.classList.toggle("go-right");
        frontEndBtn.classList.toggle("opacity");
        backendBtn.classList.toggle("go-right");
        backendBtn.classList.toggle("opacity");
      });
    }
    // icon front end
    {
      createIcon(conFrontEnd, "https://cdn.simpleicons.org/html5", "10");
      createIcon(conFrontEnd, "https://cdn.simpleicons.org/css", "10");
      createIcon(conFrontEnd, "https://cdn.simpleicons.org/javascript", "10");
      createIcon(conFrontEnd, "https://cdn.simpleicons.org/tailwindcss", "10");
      createIcon(conFrontEnd, "https://cdn.simpleicons.org/php", "10");
    }
    //icon back end
    {
      createIcon(conBackEnd, "https://cdn.simpleicons.org/mysql", "10");
    }
    // icon tools
    {
      createIcon(tools, "https://cdn.simpleicons.org/Git", "10");
      createIcon(tools, "https://cdn.simpleicons.org/GitHub/FFFF", "10");
    }
  }
}
