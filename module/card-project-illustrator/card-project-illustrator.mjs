function cardIllustrator(conTarget, imgKonten) {
  const container = document.createElement("section");
  const firstContainer = document.createElement("section");
  const conImg = document.createElement("section");
  for (let i = 0; i < 2; i++) {
    const span = document.createElement("span");
    container.appendChild(span);

    Object.assign(span.style, {
      position: "absolute",
      display: "inline-flex",
      height: "60%",
      aspectRatio: "1/1",
      backgroundColor: "var(--accen-color)",
      zIndex: "-1",
      inset: "1",
      transform: "translateY(-0.5rem) translateX(-0.5rem)",
      borderRadius: "15px",
    });
    if (i === 1) {
      Object.assign(span.style, {
        bottom: "0",
        right: "0",
        transform: "translateY(0.5rem) translateX(0.5rem)",
      });
    }
  }

  conTarget.appendChild(container);
  container.appendChild(firstContainer);
  firstContainer.appendChild(conImg);

  container.classList.add("con-card-illustrator");

  const conCard = document.querySelectorAll(".con-card-illustrator");

  //   console.log(conCard);

  Object.assign(container.style, {
    width: "30rem",
    aspectRatio: "1/1",
    backgroundColor: "var(--card-color)",
    borderRadius: "10px",
  });

  Object.assign(firstContainer.style, {
    width: "100%",
    height: "100%",
    // backgroundColor: "yellow",
    overflow: "hidden",
    borderRadius: "10px",
  });
  Object.assign(conImg.style, {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeate: "no-repeate",
    backgroundPosition: "center",
    backgroundImage: `url(asset/page-illustrator/project/${imgKonten}`,
    // backgroundImage: `url(asset/icon/csp.svg`,
  });
}

export { cardIllustrator };
