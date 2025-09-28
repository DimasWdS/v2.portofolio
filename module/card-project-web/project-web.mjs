function createCarProjectWeb(
  conTarget,
  namaWebsite,
  linkWebsite,
  fotoWeb,
  deskripsiWeb,
  posisiJob,
  teknologiWeb,
  background
) {
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
    border: "2px solid #848484ff",
    borderRadius: "5px",
  });

  // background (foto pemandangan)
  {
    const img = document.createElement("img");

    bg.appendChild(img);

    img.setAttribute("alt", "background");
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", `asset/page-web/${background}`);

    Object.assign(bg.style, {
      position: "absolute",
      inset: "0",
      height: "100%",
      width: "100%",
      // backgroundColor: "yellow",
    });

    Object.assign(img.style, {
      opacity: "0.4",
    });
  }
  //con preview web (tampilan website kecil di kanan tengah)
  {
    const lookWeb = document.createElement("div");
    const img = document.createElement("img");

    img.setAttribute("alt", "background");
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", `asset/page-web/${fotoWeb}`);

    conPrevWeb.appendChild(lookWeb);
    lookWeb.appendChild(img);

    lookWeb.classList.add("displayNone");

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
    const conViewWeb = document.createElement("div");
    const conTech = document.createElement("section");
    const conMoreInfo = document.createElement("button");
    const conDeskripsi = document.createElement("section");

    conTeks.appendChild(header);
    header.appendChild(name);
    header.appendChild(conViewWeb);
    conTeks.appendChild(conTech);
    conTeks.appendChild(conMoreInfo);
    conTeks.appendChild(conDeskripsi);

    name.textContent = namaWebsite;

    conMoreInfo.classList.add("displayMobileNone");

    Object.assign(conTeks.style, {
      height: "100%",
      width: "100%",
      position: "absolute",
      inset: "0",
      // backgroundColor: "green",
    });

    Object.assign(header.style, {
      width: "100%",
      // backgroundColor: "green",
      // height: "max-content",
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      flexWrap: "wrap",
      // flexWrap: "wrap",
      padding: "2rem 1rem 0 1rem",
    });
    Object.assign(name.style, {
      fontSize: "clamp(0.8rem, calc(3vw + 1rem), 2.5rem)",
      fontWeight: "900",
      color: "var(--main-font)",
    });
    //
    {
      const wrapper = document.createElement("a");
      const p = document.createElement("p");
      const conImg = document.createElement("div");
      const img = document.createElement("img");

      wrapper.setAttribute("href", `${linkWebsite}`);
      wrapper.setAttribute("target", "_blank");

      p.textContent = "View Web";

      img.setAttribute("alt", "icon");
      img.setAttribute("loading", "lazy");
      img.setAttribute("src", "asset/icon/arrowoutward.svg");

      conViewWeb.appendChild(wrapper);
      wrapper.appendChild(p);
      wrapper.appendChild(conImg);
      conImg.appendChild(img);

      Object.assign(wrapper.style, {
        height: "3rem",
        width: "10rem",
        backgroundColor: "var(--footer)",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        borderRadius: "2px",
        cursor: "pointer",
      });

      Object.assign(p.style, {
        color: "var(--main-font)",
        fontWeight: "900",
        fontFamily: `"Google Sans Code", monospace !important`,
      });

      Object.assign(conImg.style, {
        height: "2rem",
        aspectRatio: "1/1",
        // backgroundColor: "green",
        transition: "all 0.2s ease",
      });

      wrapper.addEventListener("mouseenter", () => {
        conImg.style.transform = "rotate(45deg)";
      });
      wrapper.addEventListener("mouseleave", () => {
        conImg.style.transform = "rotate(0deg)";
      });
    }

    // deskripsi (penjelasan web singkat)
    {
      Object.assign(conDeskripsi.style, {
        padding: "1rem 2rem 1rem 1rem",
        // backgroundColor: "yellow",
      });

      const wrapper = document.createElement("section");
      const teks = document.createElement("p");

      conDeskripsi.appendChild(wrapper);
      wrapper.appendChild(teks);

      wrapper.classList.add("width-full", "overflow-scroll");

      teks.textContent = deskripsiWeb;

      Object.assign(conDeskripsi.style, {
        height: "100%",
        width: "100%",
        // backgroundColor: "green",
      });

      Object.assign(wrapper.style, {
        height: "100%",
        width: "40%",
        // backgroundColor: "green",
        // opacity: "0.3",
        // margin: "1rem 0.5rem 1rem 1rem",
      });

      Object.assign(teks.style, {
        width: "100%",
        // backgroundColor: "gray",
        // height: "40rem",

        whiteSpace: "normal",
        wordWrap: "break-word", // lama tapi masih banyak dipakai
        overflowWrap: "break-word", // modern
        color: "var(--main-font)",
        fontFamily: `"Google Sans Code", monospace`,
        fontWeight: "800",
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
          p2.textContent = posisiJob;

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

          // function cardTech() {
          //   const con = document.createElement("section");
          //   const conIcon = document.createElement("section");
          //   const imgIcon = document.createElement("img");
          //   const teks = document.createElement("p");

          //   conTech.appendChild(con);
          //   con.appendChild(conIcon);
          //   conIcon.appendChild(imgIcon);
          //   con.appendChild(teks);

          //   imgIcon.setAttribute("alt", "icon");
          //   imgIcon.setAttribute("loading", "lazy");
          //   imgIcon.setAttribute("src", "asset/icon/javascript.svg");

          //   teks.textContent = "Java Scrip";

          //   Object.assign(con.style, {
          //     display: "flex",
          //     width: "max-content",
          //     alignItems: "center",
          //     gap: "0.3rem",
          //     flexShrink: "0",
          //   });

          //   Object.assign(conIcon.style, {
          //     height: "2rem",
          //     aspectRatio: "1/1",
          //     // backgroundColor: "green",
          //   });
          //   Object.assign(teks.style, {
          //     fontFamily: `"Google Sans Code", monospace`,
          //     color: "var(--main-font)",
          //     fontSize: "0.8em",
          //   });
          // }

          // const techData = [
          //   ["html.svg", "HTML"],
          //   ["css.svg", "CSS"],
          //   ["javascript.svg", "JavaScript"],
          // ];

          const techData = teknologiWeb;

          function cardTech(iconSrc, title) {
            const con = document.createElement("section");
            const conIcon = document.createElement("section");
            const imgIcon = document.createElement("img");
            const teks = document.createElement("p");

            conTech.appendChild(con);
            con.appendChild(conIcon);
            conIcon.appendChild(imgIcon);
            con.appendChild(teks);

            // isi data dari parameter
            imgIcon.setAttribute("alt", title + " icon");
            imgIcon.setAttribute("loading", "lazy");
            imgIcon.setAttribute("src", "asset/icon/" + iconSrc);

            teks.textContent = title;

            // styling
            Object.assign(con.style, {
              display: "flex",
              width: "max-content",
              alignItems: "center",
              gap: "0.3rem",
              flexShrink: "0",
            });

            Object.assign(conIcon.style, {
              height: "2rem",
              aspectRatio: "1/1",
            });

            Object.assign(teks.style, {
              fontFamily: `"Google Sans Code", monospace`,
              color: "var(--main-font)",
              fontSize: "0.8em",
            });
          }

          // looping semua data
          techData.forEach(([icon, title]) => {
            cardTech(icon, title);
          });

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
        }
      }
    }
    //style more info
    {
      const teks = document.createElement("p");
      const logoInfo = document.createElement("div");

      conMoreInfo.appendChild(teks);
      conMoreInfo.appendChild(logoInfo);

      teks.textContent = "MORE INFO";

      Object.assign(conMoreInfo.style, {
        backgroundColor: "var(--footer)",
        position: "absolute",
        bottom: "0",
        margin: "0 0 2% 0",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        padding: "0.3rem 1rem 0.3rem 1.5rem",
        borderRadius: "2px",
        cursor: "pointer",
      });

      // teks
      {
        Object.assign(teks.style, {
          fontFamily: `"Google Sans Code", monospace`,
          color: "var(--main-font)",
          fontWeight: "600",
          fontSize: "1.4em",
        });
      }
      // icon
      {
        Object.assign(logoInfo.style, {
          height: "2rem",
          aspectRatio: "1/1",
          // backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "0.2rem",
        });

        const circle = document.createElement("span");
        const line = document.createElement("span");

        logoInfo.appendChild(circle);
        logoInfo.appendChild(line);

        [circle, line].forEach((el) => {
          Object.assign(el.style, {
            display: "inline-block",
            backgroundColor: "var(--accen-color)",
            flexShrink: "0",
            transition: "all 0.2s ease",
          });

          Object.assign(circle.style, {
            height: "0.3rem",
            aspectRatio: "1/1",
            borderRadius: "50%",
          });

          Object.assign(line.style, {
            width: "0.3rem",
            // aspectRatio: "9/16",
            height: "1rem",
            borderRadius: "5px",
          });
        });

        // hover
        conMoreInfo.addEventListener("mouseenter", () => {
          Object.assign(circle.style, {
            transform: "translateY(0.2rem)",
          });
          Object.assign(line.style, {
            transform: "translateY(-0.2rem)",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
          });
        });
        conMoreInfo.addEventListener("mouseleave", () => {
          Object.assign(circle.style, {
            transform: "translateY(0)",
          });
          Object.assign(line.style, {
            transform: "translateY(0)",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          });
        });
      }
    }
  }
}

export { createCarProjectWeb };
