import { createNavFooter, sum, headerNav } from "./../../module/module.mjs";
//
const mainHome = document.createElement("main");
document.body.appendChild(mainHome);
Object.assign(mainHome.style, {
  backgroundColor: "var(--background-color)",
});
//

// konten halaman awal
{
  const container = document.createElement("section");
  mainHome.appendChild(container);
  Object.assign(container.style, {
    width: "100%",
    maxWidth: "80rem",
    margin: "auto",
    height: "100dvh",
    backgroundColor: "green",
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
