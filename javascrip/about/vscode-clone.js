import { createBtnNav } from "../../module/module.mjs";

const containerKontenVscode = document.querySelector(
  ".container-konten-vscode"
);

Object.assign(containerKontenVscode.style, {
  position: "relative",
});
// welcome page
{
  const welcome = document.createElement("div");
  const div = document.createElement("div");

  containerKontenVscode.appendChild(welcome);
  welcome.appendChild(div);

  welcome.classList.add("con-welcome");

  Object.assign(welcome.style, {
    height: "100%",
    width: "100%",
    backgroundColor: "var(--konten)",
    display: "grid",
    placeItems: "center",
  });
  Object.assign(div.style, {
    height: "50%",
    aspectRatio: "1/1",
    backgroundImage: "url(asset/my-own-logo/LOGOSAYA.svg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeate: "no-repeate",
    opacity: "40%",
  });
}

const conNavAtas = document.querySelector(".container-nav-atas");

createBtnNav(conNavAtas, "welcome", "welcome-btn", "welcome-hidden");
createBtnNav(conNavAtas, "README.MD", "readme-btn", "readme-hidden");
createBtnNav(conNavAtas, "tess", "tes", "tes");

const btnWelcome = document.querySelector(".welcome-btn");
const btnReadme = document.querySelector(".readme-btn");

btnWelcome.classList.add("btn-nav-active");

const buttons = document.querySelectorAll(".button");

buttons.forEach((btn, dex) => {
  btn.addEventListener("click", (e) => {
    // kalau yang diklik close-btn jangan eksekusi "active"
    if (e.target.classList.contains("close-btn")) return;

    buttons.forEach((b) => b.classList.remove("btn-nav-active"));
    btn.classList.add("btn-nav-active");
  });
});
