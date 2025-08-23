function createIconSosmed(conTarget, ukuran, logo, link) {
  const con = document.createElement("section");
  const conIcon = document.createElement("div");
  const aLink = document.createElement("a");

  aLink.setAttribute("href", `${link}`);
  aLink.setAttribute("target", "_blanks");

  conTarget.appendChild(con);
  con.appendChild(conIcon);
  conIcon.appendChild(aLink);

  Object.assign(con.style, {
    display: "flex",
  });

  Object.assign(conIcon.style, {
    height: `${ukuran}`,
    aspectRatio: "1/1",
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "var(--background-color)",
    transition: "all 0.3s ease",
  });
  Object.assign(aLink.style, {
    display: "inline-flex",
    width: "100%",
    height: "100%",
    backgroundImage: `url(../asset/icon/${logo})`,
    backgroundPosition: "center",
    backgroundSize: "70%",
    backgroundRepeat: "no-repeat",
  });
  conIcon.addEventListener("mouseenter", () => {
    conIcon.style.backgroundColor = "var(--main-font)";
  });
  conIcon.addEventListener("mouseleave", () => {
    conIcon.style.backgroundColor = "var(--background-color)";
  });
}

export { createIconSosmed };
