const container = document.querySelector(".about-mystory");

const layerAtas = document.createElement("section");
const layerbawah = document.createElement("section");

container.appendChild(layerbawah);
container.appendChild(layerAtas);

{
  const lengkunganAtas = document.createElement("div");
  const lengkunganBawah = document.createElement("div");
  const header = document.createElement("header");
  const headerbawah = document.createElement("header");

  layerAtas.appendChild(lengkunganAtas);
  layerAtas.appendChild(lengkunganBawah);
  lengkunganAtas.appendChild(header);
  lengkunganBawah.appendChild(headerbawah);

  header.textContent = "MY STORY";
  headerbawah.textContent = "I hope you don't get bored";

  header.classList.add("teks-title");
  headerbawah.classList.add("teks-title");

  Object.assign(layerAtas.style, {
    position: "absolute",
    zIndex: "2",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    //   backgroundColor: "yellow",
    overflow: "hidden",
  });

  [lengkunganAtas, lengkunganBawah].forEach((el, dex) => {
    Object.assign(el.style, {
      width: "100%",
      height: "15rem",
      backgroundColor: "var(--background-color)",
      scale: "1.1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      willChange: "transform",
    });

    if (dex === 0) {
      Object.assign(el.style, {
        borderRadius: "0 0 100% 100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 20px 25px -15px rgba(0, 0, 0, 0.74)",
      });
    } else {
      Object.assign(el.style, {
        boxShadow: "0px -20px 25px -15px rgba(0, 0, 0, 0.74)",
        borderRadius: "100% 100% 0 0",
      });
    }
  });

  Object.assign(headerbawah.style, {
    padding: "0 4rem",
    // backgroundColor: "green",
  });
}

{
  function createCardFoto(conTarget, foto) {
    const container = document.createElement("section");
    const img = document.createElement("img");

    conTarget.appendChild(container);
    container.appendChild(img);

    img.setAttribute("alt", "foto");
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", `./asset/page-about/my-story/img/${foto}`);

    Object.assign(container.style, {
      width: "100%",
      aspectRatio: "1/1",
      // backgroundColor: "yellow",
      flexShrink: "0",
      borderRadius: "15px",
      overflow: "hidden",
    });

    Object.assign(img.style, {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    });
  }

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  layerbawah.appendChild(div1);
  layerbawah.appendChild(div2);
  layerbawah.appendChild(div3);

  Object.assign(layerbawah.style, {
    height: "100%",
    width: "100%",
    backgroundColor: "var(--second-background)",
    display: "flex",
    justifyContent: "center",
    gap: "0.8rem",
  });

  [div1, div2, div3].forEach((el, dex) => {
    Object.assign(el.style, {
      width: "33.3%",
      height: "100%",
      // backgroundColor: "green",
      display: "flex",
      overflow: "hidden",
      flexDirection: "column",
    });

    if (dex === 0) {
      // class berada di file css/page-about about-mystory.css line 1
      el.classList.add("asxsd");
      Object.assign(el.style, {
        flexDirection: "column-reverse",
      });
    } else if (dex === 2) {
      // class berada di file css/page-about about-mystory.css line 1
      el.classList.add("asxsd");
      Object.assign(el.style, {
        flexDirection: "column-reverse",
      });
    } else {
      el.classList.add("sdsefc");
    }
  });

  //   div tengah
  {
    const containerImg = document.createElement("div");

    containerImg.classList.add("key-goUp");

    div2.appendChild(containerImg);

    Object.assign(containerImg.style, {
      display: "flex",
      width: "100%",
      flexWrap: "wrap",
      gap: "1rem",
      margin: "0 0 1rem 0",
      // backgroundColor: "red",
    });

    createCardFoto(containerImg, "2.jpg");
    createCardFoto(containerImg, "3.jpg");
    createCardFoto(containerImg, "4.jpg");
    createCardFoto(containerImg, "3.jpg");

    const containerImgClone = containerImg.cloneNode(true);

    div2.appendChild(containerImgClone);
  }
  // Div kanan
  {
    const containerImg = document.createElement("div");

    containerImg.classList.add("key-goDown");

    div3.appendChild(containerImg);

    Object.assign(containerImg.style, {
      display: "flex",
      width: "100%",
      flexWrap: "wrap",
      gap: "1rem",
      margin: "0 0 1rem 0",
      //   backgroundColor: "red",
    });

    createCardFoto(containerImg, "2.jpg");
    createCardFoto(containerImg, "3.jpg");
    createCardFoto(containerImg, "4.jpg");
    createCardFoto(containerImg, "3.jpg");

    const containerImgClone = containerImg.cloneNode(true);

    div3.appendChild(containerImgClone);
  }
  //div kiri
  {
    const containerImg = document.createElement("div");

    containerImg.classList.add("key-goDown");

    div1.appendChild(containerImg);

    Object.assign(containerImg.style, {
      display: "flex",
      width: "100%",
      flexWrap: "wrap",
      gap: "1rem",
      margin: "0 0 1rem 0",
      //   backgroundColor: "red",
    });

    createCardFoto(containerImg, "2.jpg");
    createCardFoto(containerImg, "3.jpg");
    createCardFoto(containerImg, "4.jpg");
    createCardFoto(containerImg, "3.jpg");

    const containerImgClone = containerImg.cloneNode(true);

    div1.appendChild(containerImgClone);
  }
}

// story
{
  const containerStroy = document.querySelector(".dlkuo");
  const teks = document.createElement("span");

  containerStroy.appendChild(teks);

  Object.assign(teks.style, {
    color: "var(--main-font)",
    // fontWeight: "bold",
    fontFamily: "Inter",
  });

  teks.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      consectetur nam officiis magni adipisci quidem aliquid odio, quo quia,
      aspernatur libero ad aliquam cupiditate quae repudiandae maiores nisi
      nulla est optio repellendus amet dignissimos. Sequi, excepturi eos! Eos
      labore dolorem quos pariatur perferendis expedita, perspiciatis enim
      reprehenderit, itaque molestias, consectetur numquam tempore ipsum maxime
      accusamus voluptate fuga cumque delectus? Quis, fugit iste sed inventore
      facere repellendus nobis et exercitationem quae, quam aut voluptas
      perferendis ipsa laboriosam. Fugit, porro earum! Laborum placeat iste
      doloremque nobis saepe. Hic, saepe maxime aut nisi recusandae eveniet id
      sit reprehenderit. Aperiam facilis, rem reiciendis nobis quibusdam
      voluptatum est quae impedit nemo earum suscipit sed in facere laborum
      libero vel recusandae quaerat quo optio veritatis? Ipsum quos nihil
      eveniet assumenda suscipit reiciendis sit. Illo a autem mollitia quidem
      atque eligendi labore amet voluptatibus nemo officia, ducimus illum non
      debitis commodi unde et doloribus exercitationem asperiores deserunt
      maxime sequi ipsa! Molestias, nihil quos. Sit sequi molestias ut neque?
      Cumque, voluptate recusandae. Eius ipsa asperiores expedita. Consequuntur
      libero doloribus qui sed repellat consequatur et recusandae deleniti,
      ducimus illum iste. Molestiae quibusdam optio iusto ab aut, natus a! Minus
      rem, architecto minima quod ipsum eum sapiente inventore quia perferendis!`;
}
