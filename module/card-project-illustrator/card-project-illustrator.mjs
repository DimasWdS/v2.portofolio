function cardIllustrator(conTarget, imgKonten, toolsImg) {
  const container = document.createElement("section");
  const firstContainer = document.createElement("section");
  const conImg = document.createElement("section");
  const img = document.createElement("img");
  const conSosmed = document.createElement("div");
  const conTolls = document.createElement("div");
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
  function createIconSosmed(conTarget, logoIcon) {
    const container = document.createElement("div");
    const a = document.createElement("a");

    conTarget.appendChild(container);
    container.appendChild(a);

    Object.assign(container.style, {
      width: "2.5rem",
      aspectRatio: "1/1",
      backgroundColor: "var(--second-background)",
      borderRadius: "50%",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      overflow: "hidden",
      outline: "2px solid var(--main-font)",
    });

    Object.assign(a.style, {
      width: "100%",
      height: "100%",
      display: "inline-flex",
      backgroundSize: "70%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(asset/icon/${logoIcon})`,
    });
  }
  function createIconTolls(conTarget, logoIcon) {
    const container = document.createElement("div");
    const conImg = document.createElement("div");
    const img = document.createElement("img");

    conTarget.appendChild(container);
    container.appendChild(conImg);
    conImg.appendChild(img);

    logoIcon = `${toolsImg}`;

    img.setAttribute("alt", "logo");
    img.setAttribute("src", `asset/icon/${logoIcon}`);

    Object.assign(container.style, {
      width: "2.5rem",
      aspectRatio: "1/1",
      backgroundColor: "var(--second-background)",
      borderRadius: "50%",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      overflow: "hidden",
      outline: "2px solid var(--accen-color)",
      // backgroundColor: "green",
      display: "flex",
      justifyContent: "center",
    });
    Object.assign(conImg.style, {
      width: "100%",
      aspectRatio: "1/1",
    });
  }

  conTarget.appendChild(container);
  container.appendChild(firstContainer);
  firstContainer.appendChild(conImg);
  conImg.appendChild(img);
  firstContainer.appendChild(conSosmed);
  firstContainer.appendChild(conTolls);

  container.classList.add("con-card-illustrator");
  img.setAttribute("alt", "illustrator");
  img.setAttribute("src", `asset/page-illustrator/project/${imgKonten}`);
  img.setAttribute("loading", "lazy");

  const conCard = document.querySelectorAll(".con-card-illustrator");

  //   console.log(conCard);

  Object.assign(container.style, {
    width: "30rem",
    aspectRatio: "1/1",
    backgroundColor: "var(--second-background)",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  });

  Object.assign(firstContainer.style, {
    position: "relative",
    width: "100%",
    height: "100%",
    // backgroundColor: "yellow",
    overflow: "hidden",
    borderRadius: "10px",
    transition: "all 0.3s ease",
  });
  Object.assign(conImg.style, {
    width: "100%",
    height: "100%",
    transition: "all 0.3s ease",
  });
  Object.assign(conSosmed.style, {
    display: "flex",
    gap: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    backgroundColor: "var(--background-color)",
    position: "absolute",
    bottom: "0",
    right: "0",
    margin: "0 0.5rem 0.5rem 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    transform: "translateY(120%)",
    transition: "all 0.5s ease",
  });
  createIconSosmed(conSosmed, "instagram-color.svg");
  createIconSosmed(conSosmed, "whatsapp-color.svg");
  Object.assign(conTolls.style, {
    display: "flex",
    gap: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    backgroundColor: "var(--background-color)",
    position: "absolute",
    top: "0",
    left: "0",
    margin: "0.5rem 0 0 0.5rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    transform: "translateY(-120%)",
    transition: "all 0.5s ease",
  });
  createIconTolls(conTolls);

  container.addEventListener("mouseenter", () => {
    conImg.style.opacity = "0.5";
    conImg.style.scale = "1.2";
    conImg.style.transform = "rotate(15deg)";
    conSosmed.style.transform = "translateY(0)";
    conTolls.style.transform = "translateY(0)";
  });
  container.addEventListener("mouseleave", () => {
    conImg.style.opacity = "1";
    conImg.style.scale = "1";
    conImg.style.transform = "rotate(0)";
    conSosmed.style.transform = "translateY(120%)";
    conTolls.style.transform = "translateY(-120%)";
  });
}

export { cardIllustrator };
