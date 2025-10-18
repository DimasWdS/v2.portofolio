import { createIconSosmed } from "./../icon-sosmed/icon-sosmed.mjs";

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
    // backgroundColor: "green",
  });
  for (let i = 0; i < 5; i++) {
    const aLink = document.createElement("a");
    conMenu.appendChild(aLink);

    Object.assign(aLink.style, {
      fontWeight: "600",
      // backgroundColor: "var(--footer)",
      color: "var(--main-font)",
      padding: "0.5rem 1rem",
      // borderRadius: "10px",
      fontSize: "0.8em",
      // letterSpacing: "1.5px",
    });

    // aLink.classList.add("alink-nav-header-active");
    aLink.classList.add("alink-nav-header");

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
        aLink.textContent = "FrontEnd";
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
  // clone menu untuk nav down
  const menuClone = conMenu.cloneNode(true);

  //
  const containerHamBtn = document.createElement("section");
  // container btn nav muncul ketika discroll
  {
    const btn = document.createElement("button");
    for (let i = 0; i < 3; i++) {
      const span = document.createElement("div");
      btn.appendChild(span);
      Object.assign(span.style, {
        width: "100%",
        height: "4px",
        backgroundColor: "var(--main-font)",
        borderRadius: "10px",
        transition: "all 0.2s ease",
      });
    }

    containerTarget.appendChild(containerHamBtn);
    containerHamBtn.appendChild(btn);

    containerHamBtn.classList.add("positionHamMoble");

    btn.classList.add("ham-btn");
    const hamBtn = document.querySelector(".ham-btn");

    containerHamBtn.classList.add("ham-btn-mobile-active");

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
      border: "10px solid rgba(255,255,255, 0.5)",
      backgroundColor: "#211832",
      cursor: "pointer",
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
    containerHamBtn.addEventListener("click", () => {
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
    const container = document.createElement("section");
    const conMenuClone = document.createElement("section");
    const conSosmed = document.createElement("section");

    const hiasan = document.createElement("div");

    containerTarget.appendChild(conNavDown);
    conNavDown.appendChild(container);
    container.appendChild(conMenuClone);
    container.appendChild(conSosmed);
    conNavDown.appendChild(hiasan);

    {
      Object.assign(hiasan.style, {
        position: "absolute",
        top: "100%",
        transform: "translateY(-5%)",
        height: "20rem",
        width: "100%",
        backgroundColor: "var(--footer)",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
        transition: "all 1s ease-in-out",
      });
    }

    conNavDown.classList.add("conNavHidden", "conNavDown");
    Object.assign(conNavDown.style, {
      position: "fixed",
      top: "0",
      height: "100dvh",
      width: "100%",
      zIndex: "998",
      backgroundColor: "var(--footer)",
      transform: "translateY(-155%)",
      transition: "all 1.5s ease",
    });
    Object.assign(container.style, {
      width: "100%",
      maxWidth: "80rem",
      height: "100%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    });
    Object.assign(conMenuClone.style, {
      width: "20rem",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "green",
    });

    conMenuClone.appendChild(menuClone);
    menuClone.classList.add("menuClone");

    Object.assign(conSosmed.style, {
      width: "100%",
      // height: "4rem",
      display: "flex",
      justifyContent: "center",
      gap: "0.5rem",
      // backgroundColor: "yellow",
      padding: "1rem 0 2rem 0",
    });
    createIconSosmed(
      conSosmed,
      "40px",
      "github.svg",
      "https://github.com/DimasWdS"
    );
    createIconSosmed(
      conSosmed,
      "40px",
      "inkedin.svg",
      "https://youtu.be/xvFZjo5PgG0?si=NqyMXNXCUnGqJIAV"
    );
    createIconSosmed(
      conSosmed,
      "40px",
      "instagram.svg",
      "https://www.instagram.com/dimaswidysaputraa/"
    );
    createIconSosmed(
      conSosmed,
      "40px",
      "tiktok.svg",
      "https://www.tiktok.com/@segogotol"
    );

    // menghilangkan container nav ketika halaman kembali ke atas
    containerHamBtn.addEventListener("click", () => {
      conNavDown.classList.toggle("navDown-hidden");
      hiasan.classList.toggle("hiasan-active");
    });
  }
}

export { headerNav };
