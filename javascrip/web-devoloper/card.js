function cardKanan(conTarget) {
  const container = document.createElement("section");
  const bg = document.createElement("section");

  conTarget.appendChild(container);
  container.appendChild(bg);

  Object.assign(container.style, {
    position: "relative",
    width: "90%",
    height: "25rem",
    // backgroundColor: "red",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  });
  //
  {
    Object.assign(bg.style, {
      width: "100%",
      height: "100%",
      backgroundColor: "var(--second-background)",
      opacity: "0.6",
    });
  }
}

const containerCard = document.querySelector(".bsyusdj");

cardKanan(containerCard);
cardKanan(containerCard);
