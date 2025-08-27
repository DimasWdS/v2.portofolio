function createBtnNav(conTarget, teksKonten, nameClass, hiddenClass) {
  const conBtn = document.createElement("button");
  const span = document.createElement("span");
  const btnHidden = document.createElement("button");

  span.textContent = teksKonten;

  span.classList.add("font-vscode");

  conTarget.appendChild(conBtn);
  conBtn.appendChild(span);
  conBtn.appendChild(btnHidden);

  conBtn.classList.add("button");
  conBtn.classList.add(`${nameClass}`);
  conBtn.classList.add("btn-container");
  btnHidden.classList.add("btn");
  btnHidden.classList.add(`${hiddenClass}`);
  btnHidden.classList.add("close-btn");

  Object.assign(conBtn.style, {
    display: "inline-flex",
    height: "100%",
    backgroundColor: "var(--footer)",
    color: "var(--main-font)",
    padding: "0 0.8rem 0 0.8rem",
    gap: "0.5rem",
    alignItems: "center",
    fontWeight: "400",
    cursor: "pointer",
  });
  Object.assign(btnHidden.style, {
    height: "60%",
    aspectRatio: "1/1",
    backgroundImage: "url(../../asset/icon/x-white.svg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeate: "no-repeate",
    cursor: "pointer",
    borderRadius: "5px",
  });
}

// {
//   const conBtn = document.createElement("button");
//   const span = document.createElement("span");
//   const btnHidden = document.createElement("button");

//   span.textContent = "welcome";

//   span.classList.add("font-vscode");

//   conNavAtas.appendChild(conBtn);
//   conBtn.appendChild(span);
//   conBtn.appendChild(btnHidden);

//   btnHidden.classList.add("btn");

//   Object.assign(conBtn.style, {
//     display: "inline-flex",
//     height: "100%",
//     backgroundColor: "var(--konten)",
//     color: "var(--main-font)",
//     padding: "0 0.5rem 0 0.5rem",
//     gap: "0.5rem",
//     alignItems: "center",
//     fontWeight: "400",
//     cursor: "pointer",
//   });
//   Object.assign(btnHidden.style, {
//     height: "60%",
//     aspectRatio: "1/1",
//     backgroundImage: "url(asset/icon/x-white.svg)",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     backgroundRepeate: "no-repeate",
//     cursor: "pointer",
//     borderRadius: "5px",
//   });
// }

export { createBtnNav };
