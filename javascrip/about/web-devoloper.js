const container = document.querySelector(".mnhlkju");

Object.assign(container.style, {
  position: "relative",
});

// background
{
  const conBg = document.createElement("section");
  container.appendChild(conBg);

  Object.assign(conBg.style, {
    position: "relative",
    height: "100%",
    width: "100%",
  });
}

//konten
{
  const conKonten = document.createElement("section");
  const header = document.createElement("header");
  const teknologi = document.createElement("section");

  container.appendChild(conKonten);
  conKonten.appendChild(header);
  conKonten.appendChild(teknologi);

  Object.assign(conKonten.style, {
    height: "100%",
    width: "100%",
    position: "absolute",
    // backgroundColor: "green",
    inset: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
  });
  //style header
  {
    const headerTeks = document.createElement("h1");

    header.appendChild(headerTeks);

    headerTeks.textContent = "AND I CAN MAKE WEBSITE FOR YOU.";

    headerTeks.classList.add("teks-title");

    Object.assign(header.style, {
      // height: "20rem",
      width: "100%",
      padding: "1rem",
    });
  }

  //teknologi
  {
    const header = document.createElement("header");

    teknologi.appendChild(header);

    Object.assign(teknologi.style, {
      height: "100%",
      width: "90%",
      maxWidth: "25rem",
      // backgroundColor: "var(--second-background",
      outline: "2px solid var(--main-font)",
      borderRadius: "10px",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    });
    // header
    {
      Object.assign(header.style, {
        width: "100%",
        height: "5rem",
        // backgroundColor: "green",
      });
    }
  }
}
