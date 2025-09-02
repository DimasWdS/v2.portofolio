function createCarProjectWeb(conTarget, headerTeks) {
  const container = document.createElement("section");
  const secContainer = document.createElement("section");
  const header = document.createElement("header");
  const conBtn = document.createElement("section");
  const btnLink = document.createElement("a");
  const btnImg = document.createElement("img");

  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    container.appendChild(div);

    Object.assign(div.style, {
      position: "absolute",
      width: "80%",
      aspectRatio: "1/1",
      backgroundColor: "var(--line",
      transform: "translate(-5px, -5px)",
      borderRadius: "15px",
    });
    if (i === 1) {
      Object.assign(div.style, {
        bottom: "0",
        right: "0",
        transform: "translate(5px, 5px)",
      });
    }
  }

  conTarget.appendChild(container);
  container.appendChild(secContainer);
  secContainer.appendChild(header);
  secContainer.appendChild(conBtn);
  conBtn.appendChild(btnLink);
  btnLink.appendChild(btnImg);

  btnImg.setAttribute("loading", "lazy");
  btnImg.setAttribute("src", "asset/icon/arrowoutward.svg");

  header.textContent = headerTeks;

  container.classList.add("card-project-web");
  conBtn.classList.add("container-btn-project");

  Object.assign(container.style, {
    position: "relative",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: "10px",
    // backgroundColor: "red",
  });
  Object.assign(secContainer.style, {
    position: "relative",
    zIndex: "2",
    width: "30rem",
    aspectRatio: "3/4",
    backgroundColor: "var(--second-background)",
    borderRadius: "10px",
    border: "2px solid var(--accen-color)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  });

  Object.assign(header.style, {
    width: "100%",
    height: "4rem",
    // backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "clamp(1rem, calc(3vw + 1rem), 3rem)",
    fontWeight: "500",
    color: "var(--line)",
  });

  Object.assign(conBtn.style, {
    position: "absolute",
    height: "100%",
    width: "100%",
    // backgroundColor: "green",
    // borderRadius: "10px",
    // transform: "scale(0)",
    opacity: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
  });

  Object.assign(btnLink.style, {
    display: "inline-flex",
    height: "5rem",
    aspectRatio: "1/1",
    outline: "2px solid var(--accen-color)",
    borderRadius: "50%",
  });

  secContainer.addEventListener("mouseenter", () => {
    // conBtn.style.transform = "scale(1)";
    conBtn.style.opacity = "1";
  });
  secContainer.addEventListener("mouseleave", () => {
    // conBtn.style.transform = "scale(0)";
    conBtn.style.opacity = "0";
  });
}

export { createCarProjectWeb };
