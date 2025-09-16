function createCarProjectWeb(conTarget) {
  const container = document.createElement("section");
  const bg = document.createElement("section");
  const conPrevWeb = document.createElement("section");
  const conTeks = document.createElement("section");

  conTarget.appendChild(container);
  container.appendChild(bg);
  container.appendChild(conPrevWeb);
  container.appendChild(conTeks);

  container.classList.add("con-card-web");

  Object.assign(container.style, {
    width: "90%",
    aspectRatio: "16/10",
    backgroundColor: "var(--footer)",
    position: "relative",
    overflow: "hidden",
    border: "2px solid var(--accen-color)",
    borderRadius: "5px",
  });

  // background (foto pemandangan)
  {
    const img = document.createElement("img");

    bg.appendChild(img);

    img.setAttribute("alt", "background");
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", "asset/page-web/prj1/big-city.jpg");

    Object.assign(bg.style, {
      position: "absolute",
      inset: "0",
      height: "100%",
      width: "100%",
      // backgroundColor: "yellow",
    });

    Object.assign(img.style, {
      opacity: "0.5",
    });
  }
  //con preview web (tampilan website kecil di kanan tengah)
  {
    const lookWeb = document.createElement("div");
    const img = document.createElement("img");

    img.setAttribute("alt", "background");
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", "asset/page-web/prj1/bg.png");

    conPrevWeb.appendChild(lookWeb);
    lookWeb.appendChild(img);

    Object.assign(conPrevWeb.style, {
      height: "100%",
      width: "100%",
      position: "absolute",
      inset: "0",
      // backgroundColor: "green",
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
    });
    Object.assign(lookWeb.style, {
      width: "60%",
      aspectRatio: "16/9",
      // backgroundColor: "green",
      margin: "0 0.5rem 0 0",
    });

    Object.assign(img.style, {
      objectFit: "cover",
    });
  }
  // const konten (layer atas sendiri)
  {
    const header = document.createElement("header");
    const name = document.createElement("p");
    const btnLinkWeb = document.createElement("div");
    const a = document.createElement("a");
    const conTech = document.createElement("section");
    const conMoreInfo = document.createElement("button");

    conTeks.appendChild(header);
    header.appendChild(name);
    header.appendChild(btnLinkWeb);
    btnLinkWeb.appendChild(a);
    conTeks.appendChild(conTech);
    conTeks.appendChild(conMoreInfo);

    name.textContent = "NAME WEBSITE";

    Object.assign(conTeks.style, {
      height: "100%",
      width: "100%",
      position: "absolute",
      inset: "0",
      // backgroundColor: "green",
    });

    Object.assign(header.style, {
      width: "100%",
      // height: "2rem",
      // backgroundColor: "green",
      display: "flex",
      alignItems: "center",
      gap: "2rem",
    });
    Object.assign(name.style, {
      fontSize: "2em",
      fontWeight: "700",
      padding: "2rem 0 2rem 1rem",
      color: "var(--main-font)",
    });
    Object.assign(btnLinkWeb.style, {
      height: "4rem",
      aspectRatio: "1/1",
      // backgroundColor: "green",
      borderRadius: "50%",
      border: "2px solid var(--footer)",
      overflow: "hidden",
      backgroundColor: "transparent",
      transition: "all 0.2s ease",
      // opacity: "0.6",
    });
    Object.assign(a.style, {
      display: "inline-flex",
      height: "100%",
      width: "100%",
      // backgroundColor: "green",
      backgroundImage: "url(asset/icon/arrowoutward.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "70%",
      cursor: "pointer",
      transition: "all 0.2s ease",
    });
    // link website hover
    {
      a.addEventListener("mouseenter", () => {
        a.style.rotate = "45deg";
        btnLinkWeb.style.backgroundColor = "var(--footer)";
        btnLinkWeb.style.border = "2px solid var(--line)";
      });
      a.addEventListener("mouseleave", () => {
        a.style.rotate = "0deg";
        btnLinkWeb.style.backgroundColor = "transparent";
        btnLinkWeb.style.border = "2px solid var(--footer)";
      });
    }
    // con tech
    {
      const container = document.createElement("section");
      const bgDesign = document.createElement("section");
      const konten = document.createElement("section");

      conTech.appendChild(container);
      container.appendChild(bgDesign);
      container.appendChild(konten);

      conMoreInfo.addEventListener("click", () => {
        conMoreInfo.style.opacity = "0";

        conTech.classList.add("gogok");
        container.classList.add("gogok");
      });

      Object.assign(conTech.style, {
        height: "100%",
        width: "100%",
        // backgroundColor: "green",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        inset: "0",
        backdropFilter: "blur(5px)",
        background: "rgba(0, 0, 0, 0.63)",
        transform: "translateY(100%)",
        transition: "all 1s ease",
      });

      Object.assign(container.style, {
        height: "70%",
        width: "70%",
        position: "relative",
        transform: "translateY(50%)",
        transition: "all 1.3s ease",
      });
      // background
      {
        Object.assign(bgDesign.style, {
          height: "100%",
          width: "100%",
          borderRadius: "10px",
          position: "relative",
        });
        for (let i = 0; i < 4; i++) {
          const section = document.createElement("section");
          bgDesign.appendChild(section);

          Object.assign(section.style, {
            height: "40%",
            aspectRatio: "1/1",
            backgroundColor: "var(--accen-color)",
            position: "absolute",
            borderRadius: "15px",
          });

          // console.log(section);

          switch (i) {
            case 0:
              Object.assign(section.style, {
                left: "0",
                top: "0",
                transform: "translate(-5px, -5px)",
              });
              break;
            case 1:
              Object.assign(section.style, {
                right: "0",
                top: "0",
                transform: "translate(5px, -5px)",
              });
              break;
            case 2:
              Object.assign(section.style, {
                left: "0",
                bottom: "0",
                transform: "translate(-5px, 5px)",
              });
              break;
            case 3:
              Object.assign(section.style, {
                right: "0",
                bottom: "0",
                transform: "translate(5px, 5px)",
              });
              break;
          }
        }
      }
      // konten
      {
        Object.assign(konten.style, {
          position: "absolute",
          inset: "0",
          height: "100%",
          width: "100%",
          borderRadius: "10px",
          backgroundColor: "var(--background-color)",
        });

        // close btn
        {
          const conBtn = document.createElement("section");
          const btn = document.createElement("btn");

          btn.addEventListener("click", () => {
            conTech.classList.remove("gogok");
            container.classList.remove("gogok");
            conMoreInfo.style.opacity = "1";
          });

          konten.appendChild(conBtn);
          conBtn.appendChild(btn);

          Object.assign(conBtn.style, {
            height: "2rem",
            aspectRatio: "1/1",
            backgroundColor: "var(--footer)",
            position: "absolute",
            right: "0",
            margin: "2%",
            borderRadius: "50%",
            overflow: "hidden",
          });

          Object.assign(btn.style, {
            height: "100%",
            width: "100%",
            // backgroundColor: "yellow",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            position: "relative",
            borderRadius: "50%",
            // transform: "translate(-0.5px)",
          });

          for (let i = 0; i < 2; i++) {
            const div = document.createElement("section");
            btn.appendChild(div);

            Object.assign(div.style, {
              height: "2.5px",
              width: "70%",
              backgroundColor: "var(--main-font)",
              position: "absolute",
              borderRadius: "5px",
              transition: "all 0.2s ease",
            });

            switch (i) {
              case 0:
                Object.assign(div.style, {
                  transform: "rotate(45deg)",
                  // backgroundColor: "green",
                });
                break;
              case 1:
                Object.assign(div.style, {
                  transform: "rotate(-45deg)",
                  // backgroundColor: "green",
                });
                break;
            }

            btn.addEventListener("mouseenter", () => {
              div.style.backgroundColor = "var(--accen-color)";
            });
            btn.addEventListener("mouseleave", () => {
              div.style.backgroundColor = "var(--main-font)";
            });
          }
        }

        // bagian pembuatan web
        {
          const container = document.createElement("section");
          const p1 = document.createElement("p");
          const p2 = document.createElement("p");
          konten.appendChild(container);
          container.appendChild(p1);
          container.appendChild(p2);

          p1.textContent = "RESPONSIBILITIES";
          p2.textContent = "FrontEnd Dev";

          Object.assign(container.style, {
            // height: "3rem",
            width: "100%",
            // backgroundColor: "yellow",
            margin: "1rem 0 1rem 0",
            padding: "0 1rem",
            color: "var(--main-font)",
          });
          [p1, p2].forEach((el, dex) => {
            Object.assign(el.style, {
              fontFamily: `"Google Sans Code", monospace`,
              // color: dex == 1 ? "white" : "yellow",
              fontWeight: dex == 0 ? "600" : " 200",
              fontSize: dex === 0 ? "1em" : "0.8em",
            });
          });
        }

        // bagian teknologi
        {
          const container = document.createElement("section");
          const p1 = document.createElement("p");
          const conTech = document.createElement("section");
          function cardTech() {
            const con = document.createElement("section");
            const conIcon = document.createElement("section");
            const imgIcon = document.createElement("img");
            const teks = document.createElement("p");

            conTech.appendChild(con);
            con.appendChild(conIcon);
            conIcon.appendChild(imgIcon);
            con.appendChild(teks);

            imgIcon.setAttribute("alt", "icon");
            imgIcon.setAttribute("loading", "lazy");
            imgIcon.setAttribute("src", "asset/icon/javascript.svg");

            teks.textContent = "Java Scrip";

            Object.assign(con.style, {
              // width: "2rem",
              // aspectRatio: "16/9",
              // backgroundColor: "green",
              display: "flex",
              width: "max-content",
              alignItems: "center",
              gap: "0.3rem",
              flexShrink: "0",
            });

            Object.assign(conIcon.style, {
              height: "2.5rem",
              aspectRatio: "1/1",
              // backgroundColor: "green",
            });
            Object.assign(teks.style, {
              fontFamily: `"Google Sans Code", monospace`,
              color: "var(--main-font)",
            });
          }

          konten.appendChild(container);
          container.appendChild(p1);
          container.appendChild(conTech);

          p1.textContent = "TECH STACK";

          Object.assign(container.style, {
            width: "100%",
            // height: "2rem",
            // backgroundColor: "yellow",
            margin: "1rem 0",
            padding: "0 1rem",
          });

          Object.assign(p1.style, {
            fontFamily: `"Google Sans Code", monospace`,
            // color: dex == 1 ? "white" : "yellow",
            fontWeight: "600",
            fontSize: "1em",
            color: "var(--main-font)",
          });

          Object.assign(conTech.style, {
            width: "100%",
            // height: "3rem",
            // backgroundColor: "yellow",
            margin: "1rem 0",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          });

          cardTech();
          cardTech();
          cardTech();
        }
      }
    }
    //style more info
    {
      conMoreInfo.textContent = "MORE INFO";

      Object.assign(conMoreInfo.style, {
        backgroundColor: "var(--footer)",
        position: "absolute",
        bottom: "0",
        margin: "0 0 2% 0",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "1px",
        padding: "0.5rem 2.2rem",
        color: "var(--main-font)",
        fontFamily: `"Google Sans Code", monospace`,
        fontWeight: "800",
        cursor: "pointer",
        fontSize: "1.2em",
        borderRadius: "5px",
      });
    }
  }
}

export { createCarProjectWeb };
