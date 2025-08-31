function createCardKarir(conTarget, workDate, work) {
  const container = document.createElement("section");
  const indikator = document.createElement("div");
  const workDuration = document.createElement("p");
  const header = document.createElement("header");

  for (let i = 0; i < workDate.length; i++) {
    const span = document.createElement("span");
    workDuration.appendChild(span);
    span.textContent = workDate[i];

    Object.assign(span.style, {
      color: "var(--main-font)",
      fontWeight: "600",
    });
  }
  for (let i = 0; i < work.length; i++) {
    const span = document.createElement("span");
    header.appendChild(span);
    span.textContent = work[i];

    if (i === 0) {
      Object.assign(span.style, {
        position: "absolute",
        top: "-40%",
        fontSize: "clamp(2rem, calc(3vw + 1rem), 10px)",
      });
    } else if (i === 1) {
      Object.assign(span.style, {
        position: "absolute",
        top: "70%",
        color: "var(--main-font)",
        fontSize: "clamp(0.9rem, calc(3vw + 1rem), 1rem)",
      });
    }
  }

  conTarget.appendChild(container);
  container.appendChild(indikator);
  indikator.appendChild(workDuration);
  container.appendChild(header);

  //   workDuration.textContent = workDate;

  Object.assign(container.style, {
    width: "100%",
    // height: "5rem",
    // backgroundColor: "red",
    position: "relative",
  });
  Object.assign(indikator.style, {
    position: "absolute",
    height: "1rem",
    aspectRatio: "1/1",
    backgroundColor: "var(--accen-color)",
    transform: "translateX(-52%)",
    borderRadius: "50%",
    outline: "2px solid var(--line)",
    // top: "10%",
  });
  Object.assign(workDuration.style, {
    position: "absolute",
    height: "7rem",
    width: "7rem",
    bottom: "50%",
    transform: "translateX(-100%) translateY(50%)",
    // backgroundColor: "yellow",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });
  Object.assign(header.style, {
    height: "2rem",
    width: "100%",
    // backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    padding: "0 0 0 3rem",
    fontWeight: "700",
    color: "var(--blue)",
  });
}

export { createCardKarir };
