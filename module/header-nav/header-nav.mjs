function headerNav(containerTarget) {
  const container = document.createElement("section");
  const conMenu = document.createElement("div");

  containerTarget.appendChild(container);
  container.appendChild(conMenu);

  container.classList.add("displayMobileNone");

  Object.assign(container.style, {
    position: "absolute",
    zIndex: "997",
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

  // container btn nav muncul ketika discroll
  {
    const containerHamBtn = document.createElement("section");
    const btn = document.createElement("button");
    for (let i = 0; i < 3; i++) {
      const span = document.createElement("div");
      btn.appendChild(span);
      Object.assign(span.style, {
        width: "100%",
        height: "4px",
        backgroundColor: "black",
        borderRadius: "10px",
        transition: "all 0.2s ease",
      });
    }

    containerTarget.appendChild(containerHamBtn);
    containerHamBtn.appendChild(btn);

    btn.classList.add("ham-btn");
    const hamBtn = document.querySelector(".ham-btn");

    Object.assign(containerHamBtn.style, {
      position: "fixed",
      zIndex: "999",
      height: "70px",
      aspectRatio: "1/1",
      right: "0",
      top: "0",
      margin: "2rem 2rem 0 0",
      backgroundColor: "var(--main-font)",
      transform: "scale(0)",
      borderRadius: "50%",
      transition: "all 0.2s ease",
      display: "grid",
      placeItems: "center",
      border: "2px solid var(--background-color)",
    });
    Object.assign(btn.style, {
      display: "inline-flex",
      flexDirection: "column",
      width: "50%",
      height: "65%",
      // backgroundColor: "yellow",
      justifyContent: "space-evenly",
      transition: "all 0.2s ease",
      cursor: "pointer",
    });
    hamBtn.addEventListener("click", () => {
      const hamBtn = document.querySelector(".ham-btn");
      hamBtn.classList.toggle("hamburger-active");
    });

    // memunculkan hamburger btn ketika discroll
    {
      const scrollDistance = 10 * 16;

      window.addEventListener("scroll", () => {
        if (window.scrollY >= scrollDistance) {
          containerHamBtn.classList.add("ham-active");
        } else {
          containerHamBtn.classList.remove("ham-active");
          // menonaktifkan hamburger
          const hamBtn = document.querySelector(".ham-btn");
          hamBtn.classList.remove("hamburger-active");
          //
          const conNavHidden = document.querySelector(".conNavHidden");
          conNavHidden.classList.remove("navDown-hidden");
        }
      });
    }
  }

  // container nav dari atas
  {
    const conNavDown = document.createElement("section");

    containerTarget.appendChild(conNavDown);

    conNavDown.classList.add("conNavHidden", "conNavDown");
    Object.assign(conNavDown.style, {
      position: "fixed",
      top: "0",
      height: "100vh",
      width: "100%",
      zIndex: "998",
      backgroundColor: "var(--footer)",
      transform: "translateY(-120%)",
      transition: "all 0.8s ease",
    });

    const hamBtn = document.querySelector(".ham-btn");
    hamBtn.addEventListener("click", () => {
      conNavDown.classList.toggle("navDown-hidden");
    });
  }
}

export { headerNav };
