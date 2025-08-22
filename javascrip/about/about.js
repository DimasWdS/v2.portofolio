import { createNavFooter, sum, headerNav } from "../../module/module.mjs";

const mainAbout = document.createElement("main");
document.body.appendChild(mainAbout);

//
{
  const containerHeaderNavAbout = document.createElement("section");
  mainAbout.appendChild(containerHeaderNavAbout);

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
  mainAbout.appendChild(container);
  Object.assign(container.style, {
    width: "100%",
    height: "100dvh",
    backgroundColor: "gray",
  });
}

{
  const containerNavFooterAbout = document.createElement("section");
  mainAbout.appendChild(containerNavFooterAbout);
  Object.assign(containerNavFooterAbout.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "var(--footer)",
    // height: "20rem",
  });

  createNavFooter(containerNavFooterAbout);
}
