function gilapEffect(conTarget, delay, delayStart) {
  const container = document.createElement("section");

  conTarget.appendChild(container);

  Object.assign(container.style, {
    position: "absolute",
    inset: "0",
    display: "flex",
    gap: "1.5rem",
    zIndex: "10",
    height: "100%",
    width: "100%",
    // backgroundColor: "yellow",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  });

  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");

    container.appendChild(div);

    Object.assign(div.style, {
      height: "200rem",
      width: "3rem",
      rotate: "-20deg",
      backgroundColor: "#bbbbbb69",
      // backgroundColor: "green",
      filter: "blur(10px)",
      transform: "translateX(-2000%)",
      animation: `gilapGerak ${delay}s ease-in-out infinite`,
      // animationDelay: `${delayStart}s`,
    });
  }
}

export { gilapEffect };
