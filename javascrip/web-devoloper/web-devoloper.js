import { createNavFooter, sum, headerNav } from "../../module/module.mjs";

const mainDevoloper = document.createElement("main");
document.body.appendChild(mainDevoloper);

//
{
  const containerHeaderNavAbout = document.createElement("section");
  mainDevoloper.appendChild(containerHeaderNavAbout);

  Object.assign(containerHeaderNavAbout.style, {
    width: "100%",
    // height: "5rem",
    // backgroundColor: "green",
  });
  headerNav(containerHeaderNavAbout);
}

// konten
{
  const container = document.createElement("section");
  mainDevoloper.appendChild(container);
  Object.assign(container.style, {
    width: "100%",
    height: "100dvh",
    backgroundColor: "var(--background-color)",
  });
}

{
  const containerNavFooterDevoloper = document.createElement("section");
  mainDevoloper.appendChild(containerNavFooterDevoloper);
  Object.assign(containerNavFooterDevoloper.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "var(--footer)",
    // height: "20rem",
  });

  createNavFooter(containerNavFooterDevoloper);
}
