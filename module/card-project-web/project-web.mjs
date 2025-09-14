function createCarProjectWeb(conTarget) {
  const container = document.createElement("section");
  const bg = document.createElement("section");
  const conPrevWeb = document.createElement("section");
  const conTeks = document.createElement("section");

  conTarget.appendChild(container);
  container.appendChild(bg);
  container.appendChild(conPrevWeb);
  container.appendChild(conTeks);

  container.classList.add("con-card-web");

  Object.assign(container.style, {
    width: "90%",
    aspectRatio: "16/10",
    backgroundColor: "var(--footer)",
    position: "relative",
    overflow: "hidden",
  });

  // background
  {
    const img = document.createElement("img");

    bg.appendChild(img);

    img.setAttribute("alt", "background");
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", "asset/page-web/prj1/big-city.jpg");

    Object.assign(bg.style, {
      position: "absolute",
      inset: "0",
      height: "100%",
      width: "100%",
      // backgroundColor: "yellow",
    });

    Object.assign(img.style, {
      opacity: "0.5",
    });
  }
  //con preview web
  {
    const lookWeb = document.createElement("div");
    const img = document.createElement("img");

    img.setAttribute("alt", "background");
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", "asset/page-web/prj1/bg.png");

    conPrevWeb.appendChild(lookWeb);
    lookWeb.appendChild(img);

    Object.assign(conPrevWeb.style, {
      height: "100%",
      width: "100%",
      position: "absolute",
      inset: "0",
      // backgroundColor: "green",
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
    });
    Object.assign(lookWeb.style, {
      width: "60%",
      aspectRatio: "16/9",
      // backgroundColor: "green",
      margin: "0 0.5rem 0 0",
    });

    Object.assign(img.style, {
      objectFit: "cover",
    });
  }
  // const teks
  {
    const header = document.createElement("header");
    const name = document.createElement("p");
    const btnLinkWeb = document.createElement("div");
    const a = document.createElement("a");

    conTeks.appendChild(header);
    header.appendChild(name);
    header.appendChild(btnLinkWeb);
    btnLinkWeb.appendChild(a);

    name.textContent = "NAME WEBSITE";

    Object.assign(conTeks.style, {
      height: "100%",
      width: "100%",
      position: "absolute",
      inset: "0",
      // backgroundColor: "green",
    });

    Object.assign(header.style, {
      width: "100%",
      // height: "2rem",
      // backgroundColor: "green",
      display: "flex",
      alignItems: "center",
      gap: "2rem",
    });
    Object.assign(name.style, {
      fontSize: "2em",
      fontWeight: "700",
      padding: "2rem 0 2rem 1rem",
      color: "var(--main-font)",
    });
    Object.assign(btnLinkWeb.style, {
      height: "4rem",
      aspectRatio: "1/1",
      // backgroundColor: "green",
      borderRadius: "50%",
      outline: "2px solid var(--footer)",
      overflow: "hidden",
      backgroundColor: "transparent",
      // opacity: "0.6",
    });
    Object.assign(a.style, {
      display: "inline-flex",
      height: "100%",
      width: "100%",
      // backgroundColor: "green",
      backgroundImage: "url(asset/icon/arrowoutward.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "70%",
      cursor: "pointer",
      transition: "all 0.2s ease",
    });
    // link website hover
    {
      a.addEventListener("mouseenter", () => {
        a.style.rotate = "45deg";
        btnLinkWeb.style.backgroundColor = "var(--footer)";
        btnLinkWeb.style.outline = "2px solid var(--line)";
      });
      a.addEventListener("mouseleave", () => {
        a.style.rotate = "0deg";
        btnLinkWeb.style.backgroundColor = "transparent";
        btnLinkWeb.style.outline = "2px solid var(--footer)";
      });
    }
  }
}

export { createCarProjectWeb };
