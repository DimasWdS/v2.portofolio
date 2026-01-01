function createIconSosmed(conTarget, ukuran, logo, link) {
  const con = document.createElement("section");
  const conIcon = document.createElement("div");
  const aLink = document.createElement("a");
  const img = document.createElement("img");

  aLink.setAttribute("href", `${link}`);
  aLink.setAttribute("target", "_blanks");
  img.setAttribute("src", `${logo}`);

  conTarget.appendChild(con);
  con.appendChild(conIcon);
  conIcon.appendChild(aLink);
  aLink.appendChild(img);

  con.classList.add("jbasuag");

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
    // backgroundColor: "green",
  });

  Object.assign(aLink.style, {
    display: "inline-flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // padding: "0.2rem",
    // backgroundColor: "green",
  });

  Object.assign(img.style, {
    height: "70%",
    width: "70%",
    // backgroundColor: "red",
    // borderRadius: "50%",
  });

  // conIcon.addEventListener("mouseenter", () => {
  //   conIcon.style.backgroundColor = "var(--main-font)";
  // });
  // conIcon.addEventListener("mouseleave", () => {
  //   conIcon.style.backgroundColor = "var(--background-color)";
  // });
}

export { createIconSosmed };
