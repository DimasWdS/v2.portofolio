function createCarProjectWeb(conTarget) {
  const container = document.createElement("section");
  const secContainer = document.createElement("section");

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

  container.classList.add("card-project-web");

  conTarget.appendChild(container);
  container.appendChild(secContainer);

  Object.assign(container.style, {
    position: "relative",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    // backgroundColor: "red",
  });
  Object.assign(secContainer.style, {
    position: "relative",
    zIndex: "2",
    width: "30rem",
    aspectRatio: "3/4",
    backgroundColor: "var(--background-color)",
    borderRadius: "10px",
    border: "3px solid var(--accen-color)",
  });
}

export { createCarProjectWeb };
