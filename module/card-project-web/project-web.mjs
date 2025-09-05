function createCarProjectWeb(
  conTarget,
  background,
  bgPictures,
  owner,
  startCreate,
  tekonogiUse
) {
  const conCard = document.createElement("section");
  const bg = document.createElement("div");
  const conBgWebPreview = document.createElement("div");
  const imgPreview = document.createElement("img");
  const konten = document.createElement("section");
  const header = document.createElement("header");
  const conLinkOutward = document.createElement("div");
  const aOutward = document.createElement("a");
  const conTeknologi = document.createElement("section");

  conTarget.appendChild(conCard);
  conCard.appendChild(bg);
  conCard.appendChild(conBgWebPreview);
  conBgWebPreview.appendChild(imgPreview);
  conCard.appendChild(konten);
  konten.appendChild(header);
  header.appendChild(conLinkOutward);
  conLinkOutward.appendChild(aOutward);
  conCard.appendChild(conTeknologi);

  imgPreview.setAttribute("src", `asset/page-web/${background}`);
  imgPreview.setAttribute("loading", "lazy");
  imgPreview.setAttribute("alt", "background");

  conCard.classList.add("con-card-web");
  konten.classList.add("con-konten");
  conBgWebPreview.classList.add("con-bg-web-preview");

  Object.assign(conCard.style, {
    position: "relative",
    width: "90%",
    height: "40rem",
    // backgroundColor: "green",
    borderRadius: "5px",
    overflow: "hidden",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  });

  Object.assign(bg.style, {
    height: "100%",
    width: "100%",
    position: "absolute",
    // inset: "0",
    // backgroundColor: "green",
    backgroundImage: `url(asset/page-web/${bgPictures})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: "0.2",
  });
  Object.assign(conBgWebPreview.style, {
    position: "absolute",
    width: "60%",
    aspectRatio: "16/9",
    right: "0",
    top: "50%",
    right: "1rem",
    transform: "translateY(-50%)",
    // backgroundColor: "yellow",
    border: "2px solid var(--line)",
    borderRadius: "5px",
    overflow: "hidden",
  });
  Object.assign(imgPreview.style, {
    objectFit: "cover",
  });
  Object.assign(konten.style, {
    height: "100%",
    width: "50%",
    position: "absolute",
    // inset: "0",
    // backgroundColor: "yellow",
    zIndex: "2",
  });
  Object.assign(header.style, {
    position: "relative",
    width: "100%",
    // backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "2rem 0 2rem 2rem",
  });
  for (let i = 0; i < 2; i++) {
    const span = document.createElement("p");
    header.appendChild(span);
    Object.assign(span.style, {
      color: "var(--line)",
      fontWeight: "700",
      fontSize: "1.5rem",
    });
    if (i === 0) {
      span.textContent = owner;
    } else {
      Object.assign(span.style, {
        fontSize: "0.9rem",
      });
      span.textContent = startCreate;
    }
  }
  Object.assign(conLinkOutward.style, {
    position: "absolute",
    height: "4rem",
    aspectRatio: "1/1",
    // backgroundColor: "yellow",
    right: "0",
    cursor: "pointer",
  });
  Object.assign(aOutward.style, {
    display: "inline-flex",
    height: "100%",
    width: "100%",
    backgroundImage: "url(asset/icon/arrowoutward.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "70%",
    transition: "all 0.3s ease",
  });
  conLinkOutward.addEventListener("mouseenter", () => {
    aOutward.style.transform = "rotate(45deg)";
  });
  conLinkOutward.addEventListener("mouseleave", () => {
    aOutward.style.transform = "rotate(0)";
  });
  Object.assign(conTeknologi.style, {
    position: "absolute",
    height: "3rem",
    width: "100%",
    // backgroundColor: "green",
    bottom: "0",
    margin: "0 0 2rem 0",
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    padding: "0 1rem 0 1rem",
    // flexWrap: "wrap",
    // overflow: "scroll",
    overflowX: "auto",
    overflowY: "hidden",
  });
  for (let i = 0; i < tekonogiUse.length; i++) {
    const span = document.createElement("span");
    conTeknologi.appendChild(span);
    span.textContent = tekonogiUse[i];
    Object.assign(span.style, {
      color: "var(--line)",
      fontWeight: "600",
      backgroundColor: "var(--footer)",
      padding: "0.2rem 1rem",
      borderRadius: "5px",
    });
  }
}

export { createCarProjectWeb };
