function headerNav(containerTarget) {
  const container = document.createElement("section");
  const conMenu = document.createElement("div");

  containerTarget.appendChild(container);
  container.appendChild(conMenu);

  Object.assign(container.style, {
    position: "absolute",
    zIndex: "999",
    top: "0",
    width: "100%",
    // height: "5rem",
    // backgroundColor: "yellow",
    display: "flex",
    justifyContent: "center",
  });
  Object.assign(conMenu.style, {
    display: "flex",
    gap: "0.5rem",
    padding: "0.5rem 0 0.5rem 0",
  });

  for (let i = 0; i < 5; i++) {
    const aLink = document.createElement("a");
    conMenu.appendChild(aLink);

    Object.assign(aLink.style, {
      fontWeight: "600",
      //   backgroundColor: "var(--footer)",
      color: "var(--main-font)",
      padding: "0.5rem 1rem",
      // borderRadius: "10px",
      fontSize: "0.8em",
      // letterSpacing: "1.5px",
    });

    // aLink.classList.add("alink-nav-header-active");
    aLink.classList.add("alink-nav-header"); // ini bisa di luar switch, karena selalu dipakai

    switch (i) {
      case 0:
        aLink.textContent = "Home";
        aLink.setAttribute("href", "index.html");
        if (markPage === "HOME") {
          aLink.classList.add("alink-nav-header-active");
        }
        break;

      case 1:
        aLink.textContent = "Illustrator";
        aLink.setAttribute("href", "illustrator.html");
        if (markPage === "ILLUSTRATOR") {
          aLink.classList.add("alink-nav-header-active");
        }
        break;

      case 2:
        aLink.textContent = "Web Devoloper";
        aLink.setAttribute("href", "web-devoloper.html");
        if (markPage === "WEB-DEVOLOPER") {
          aLink.classList.add("alink-nav-header-active");
        }
        break;

      case 3:
        aLink.textContent = "About";
        aLink.setAttribute("href", "about.html");
        if (markPage === "ABOUT") {
          aLink.classList.add("alink-nav-header-active");
        }
        break;

      case 4:
        aLink.textContent = "Contack";
        aLink.setAttribute("href", "contack.html");
        if (markPage === "CONTACK") {
          aLink.classList.add("alink-nav-header-active");
        }
        break;

      default:
        aLink.textContent = "tes";
    }
  }
}

export { headerNav };
