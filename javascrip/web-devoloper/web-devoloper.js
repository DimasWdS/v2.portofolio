import {
  createNavFooter,
  sum,
  headerNav,
  createCarProjectWeb,
} from "../../module/module.mjs";

const mainDevoloper = document.createElement("main");
document.body.appendChild(mainDevoloper);

Object.assign(mainDevoloper.style, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "var(--background-color)",
});

//NAV
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

// HOME
// {
//   const container = document.createElement("section");
//   mainDevoloper.appendChild(container);
//   Object.assign(container.style, {
//     width: "100%",
//     height: "100dvh",
//     backgroundColor: "var(--background-color)",
//   });
// }

//
{
  const container = document.createElement("section");

  mainDevoloper.appendChild(container);

  Object.assign(container.style, {
    width: "100%",
    maxWidth: "80rem",
    // height: "100vh",
    padding: "4rem 0 4rem 0",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "3rem",
  });

  for (let i = 0; i < 5; i++) {
    createCarProjectWeb(container, "TODO LIST");
  }
}

// FOTTER
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
