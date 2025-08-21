import { createIconSosmed } from "./../icon-sosmed/icon-sosmed.mjs";

function sum(a, b) {
  return a + b;
}

function createNavFooter(targetContainer) {
  const container = document.createElement("section");
  //
  const containerSatu = document.createElement("section");
  const containerDua = document.createElement("section");
  //
  const containerTouchMe = document.createElement("section");
  const headerTouchMe = document.createElement("div");
  //
  const btnContackMe = document.createElement("button");
  const btnEmail = document.createElement("button");
  //
  const containerMenu = document.createElement("section");
  const menuHeader = document.createElement("header");
  const conIconSosmed = document.createElement("section");

  targetContainer.appendChild(container);
  container.appendChild(containerSatu);
  containerSatu.appendChild(containerTouchMe);
  containerTouchMe.appendChild(headerTouchMe);
  containerTouchMe.appendChild(btnContackMe);
  containerTouchMe.appendChild(btnEmail);
  containerSatu.appendChild(containerMenu);
  container.appendChild(containerDua);
  containerMenu.appendChild(menuHeader);

  for (let i = 0; i < 5; i++) {
    const aLink = document.createElement("a");
    aLink.classList.add("link-menu");
    containerMenu.appendChild(aLink);
    // Menggunakan switch case untuk mengatur textContent
    switch (i) {
      case 0:
        aLink.textContent = "Home";
        aLink.setAttribute("href", "index.html");
        break;
      case 1:
        aLink.textContent = "Illustrator";
        aLink.setAttribute("href", "illustrator.html");
        break;
      case 2:
        aLink.textContent = "Web Devoloper";
        aLink.setAttribute("href", "web-devoloper.html");
        break;
      case 3:
        aLink.textContent = "About";
        aLink.setAttribute("href", "about.html");
        break;
      case 4:
        aLink.textContent = "Contack";
        aLink.setAttribute("href", "contack.html");
        break;
      default:
        aLink.textContent = "Menu";
    }
    Object.assign(aLink.style, {
      color: "var(--main-font)",
      fontSize: "2em",
      fontWeight: "200",
    });
  }
  containerMenu.appendChild(conIconSosmed);

  headerTouchMe.textContent = "Let’s talk about your next project !";
  containerDua.textContent = "Dimas Widy Saputra©2025";
  btnContackMe.textContent = "CONTACK ME";
  btnEmail.textContent = "dimaswidysaputra41@gmail.com";

  menuHeader.textContent = "MENU";

  container.classList.add("con-nav-footer");

  Object.assign(container.style, {
    width: "100%",
    maxWidth: "80rem",
    backgroundColor: "var(--footer)",
    overflow: "hidden",
  });
  Object.assign(containerSatu.style, {
    width: "100%",
    // height: "20rem",
    display: "flex",
  });
  Object.assign(containerTouchMe.style, {
    height: "100%",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "cyan",
  });
  Object.assign(containerMenu.style, {
    width: "20rem",
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    padding: "2rem 0.5rem 0 0",
  });
  Object.assign(containerDua.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "1rem 0 1rem 0",
    color: "var(--main-font)",
    fontSize: "0.8em",
    fontWeight: "200",
  });
  Object.assign(headerTouchMe.style, {
    width: "100%",
    fontSize: "3em",
    fontWeight: "900",
    color: "var(--main-font",
    padding: "2rem 10rem 0.5rem 0.5rem",
    display: "flex",
  });
  [btnContackMe, btnEmail].forEach((el) => {
    Object.assign(el.style, {
      padding: "0.5rem 1rem",
      borderRadius: "10px",
      margin: "1rem",
      width: "max-content",
      outline: "1px solid var(--main-font)",
      // backgroundColor: "yellow",
      fontWeight: "600",
      color: "var(--main-font)",
      fontSize: "1.2em",
    });
  });

  Object.assign(menuHeader.style, {
    width: "100%",
    // backgroundColor: "yellow",
    color: "var(--main-font)",
    display: "flex",
    justifyContent: "end",
    fontWeight: "700",
    fontSize: "3em",
  });
  Object.assign(conIconSosmed.style, {
    width: "100%",
    display: "flex",
    gap: "0.5rem",
    justifyContent: "end",
    margin: "2rem 0 0 0",
    // backgroundColor: "green",
  });

  createIconSosmed(
    conIconSosmed,
    "40px",
    "github.svg",
    "https://github.com/DimasWdS"
  );
  createIconSosmed(
    conIconSosmed,
    "40px",
    "inkedin.svg",
    "https://youtu.be/xvFZjo5PgG0?si=NqyMXNXCUnGqJIAV"
  );
  createIconSosmed(
    conIconSosmed,
    "40px",
    "instagram.svg",
    "https://www.instagram.com/dimaswidysaputraa/"
  );
  createIconSosmed(
    conIconSosmed,
    "40px",
    "tiktok.svg",
    "https://www.tiktok.com/@segogotol"
  );
}

export { createNavFooter, sum };
