import { createNavFooter, sum, headerNav } from "./../../module/module.mjs";
//
const mainHome = document.createElement("main");
document.body.appendChild(mainHome);
mainHome.setAttribute("id", "scroller-container");
Object.assign(mainHome.style, {
  backgroundColor: "var(--background-color)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
//

// background home
{
  const container = document.createElement("section");
  mainHome.appendChild(container);
  Object.assign(container.style, {
    height: "100dvh",
    width: "100%",
    // backgroundColor: "yellow",
  });
}
// konten halaman awal

{
  const container = document.createElement("section");
  const conNama = document.createElement("section");
  const experinceSkill = document.createElement("section");

  mainHome.appendChild(container);
  container.appendChild(conNama);
  container.appendChild(experinceSkill);

  conNama.textContent = "HI IM WIDY";
  experinceSkill.textContent =
    "EXPERIENCED ILLUSTRATOR AND FRONTEND WEB DEVELOPER";

  container.setAttribute("id", "content");
  Object.assign(container.style, {
    position: "absolute",
    top: "0",
    width: "100%",
    maxWidth: "80rem",
    height: "100dvh",
    // backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  });
  Object.assign(conNama.style, {
    width: "100%",
    // height: "5rem",
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "3.5rem",
    color: "var(--main-font)",
  });
  Object.assign(experinceSkill.style, {
    color: "var(--main-font)",
    fontSize: "0.7em",
    fontWeight: "600",
  });
}

{
  const containerHeaderNavHome = document.createElement("section");
  mainHome.appendChild(containerHeaderNavHome);

  Object.assign(containerHeaderNavHome.style, {
    width: "100%",
    // height: "5rem",
    // backgroundColor: "green",
  });
  headerNav(containerHeaderNavHome);
}

{
  const containerNavFooterHome = document.createElement("section");
  mainHome.appendChild(containerNavFooterHome);
  Object.assign(containerNavFooterHome.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",

    backgroundColor: "var(--footer)",
    // height: "20rem",
  });

  createNavFooter(containerNavFooterHome);
}
