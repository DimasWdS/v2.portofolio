import { createNavFooter, sum, headerNav } from "../../module/module.mjs";

const mainContack = document.createElement("main");
document.body.appendChild(mainContack);
Object.assign(mainContack.style, {
  backgroundColor: "var(--background-color)",
});

// container contack

const containerContack = document.createElement("section");
mainContack.appendChild(containerContack);
Object.assign(containerContack.style, {
  position: "relative",
  width: "100%",
  height: "50rem",
});

// nav header
{
  const containerHeaderNavContack = document.createElement("section");
  mainContack.appendChild(containerHeaderNavContack);

  Object.assign(containerHeaderNavContack.style, {
    width: "100%",
    // height: "5rem",
    // backgroundColor: "green",
  });
  headerNav(containerHeaderNavContack);
}

// konten
{
  const container = document.createElement("section");
  const header = document.createElement("header");
  const h1 = document.createElement("p");
  const conContack = document.createElement("section");
  const imgBendera = document.createElement("section");
  //
  const konten = document.createElement("section");
  const conFormNamaEmail = document.createElement("section");
  const conSubject = document.createElement("section");
  const conSend = document.createElement("section");
  // form nama
  {
    const divNama = document.createElement("div");
    const labelNama = document.createElement("label");
    const inputNama = document.createElement("input");

    conFormNamaEmail.appendChild(divNama);
    divNama.appendChild(labelNama);
    divNama.appendChild(inputNama);

    labelNama.textContent = "What’s your name ?*";
    labelNama.innerHTML = `What’s your <span style="color: #1C6EA4;">name</span> ?<span style="color:red">*</span>`;
    inputNama.setAttribute("placeholder", "Jhon doe");
    inputNama.setAttribute("id", "input-nama");
    labelNama.setAttribute("for", "input-nama");

    divNama.classList.add("form-nama");

    Object.assign(divNama.style, {
      display: "flex",
      flexDirection: "column",
      width: "40%",
      maxWidth: "75rem",
    });
    Object.assign(labelNama.style, {
      cursor: "pointer",
    });
  }
  //form email
  {
    const divEmail = document.createElement("div");
    const labelEmail = document.createElement("label");
    const inputEmail = document.createElement("input");

    conFormNamaEmail.appendChild(divEmail);
    divEmail.appendChild(labelEmail);
    divEmail.appendChild(inputEmail);

    labelEmail.textContent = "What’s your name ?*";
    labelEmail.innerHTML = `What’s your <span style="color: #1C6EA4;">email</span> ?<span style="color:red">*</span>`;

    inputEmail.setAttribute("placeholder", "Jhon.doe@mail.com");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "input-email");
    labelEmail.setAttribute("for", "input-email");

    divEmail.classList.add("form-email");

    Object.assign(divEmail.style, {
      display: "flex",
      flexDirection: "column",
      width: "40%",
      maxWidth: "75rem",
    });
    Object.assign(labelEmail.style, {
      cursor: "pointer",
    });
  }
  // form subject
  {
    const divSubject = document.createElement("div");
    const labelSubject = document.createElement("label");
    const inputSubject = document.createElement("input");

    conSubject.appendChild(divSubject);
    divSubject.appendChild(labelSubject);
    divSubject.appendChild(inputSubject);

    labelSubject.textContent = "What’s your message ?*";
    labelSubject.innerHTML = `What’s your <span style="color: #1C6EA4;">messege</span> ?<span style="color:red">*</span>`;
    inputSubject.setAttribute(
      "placeholder",
      "I would like to discuss a project with you..."
    );
    inputSubject.setAttribute("id", "input-subject");
    labelSubject.setAttribute("for", "input-subject");

    divSubject.classList.add("form-subject");

    Object.assign(divSubject.style, {
      display: "flex",
      flexDirection: "column",
    });
    Object.assign(labelSubject.style, {
      cursor: "pointer",
    });
  }
  // con bt send
  {
    const btnSend = document.createElement("button");
    conSend.appendChild(btnSend);
    btnSend.textContent = "SEND";
    Object.assign(btnSend.style, {
      fontSize: "2em",
      fontWeight: "800",
      color: "var(--main-font)",
      cursor: "pointer",
      padding: "0.5rem 6rem",
      borderRadius: "30px",
      border: "3px solid var(--background-color)",
    });
  }

  containerContack.appendChild(container);
  container.appendChild(header);
  header.appendChild(h1);
  container.appendChild(conContack);
  conContack.appendChild(imgBendera);
  conContack.appendChild(konten);
  konten.appendChild(conFormNamaEmail);
  konten.appendChild(conSubject);
  konten.appendChild(conSend);

  h1.textContent = "Get in touch";

  conFormNamaEmail.classList.add("container-nama-email");
  konten.classList.add("container-form");

  conContack.classList.add("container-contack");

  Object.assign(container.style, {
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // backgroundColor: "green",
  });
  Object.assign(header.style, {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 0 0 0",
    margin: "3rem 0 0 0",
  });
  Object.assign(h1.style, {
    fontSize: "3rem",
    fontWeight: "700",
    color: "var(--main-font)",
  });
  Object.assign(conContack.style, {
    position: "relative",
    width: "100%",
    height: "25rem",
    backgroundColor: "var(--second-background)",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  });
  Object.assign(imgBendera.style, {
    position: "absolute",
    right: "-5rem",
    height: "100%",
    aspectRatio: "16/10",
    backgroundImage: "url(../asset/page-contack/bendera.svg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "90%",
    animation: "floatIrregularDetailed 20s ease-in-out infinite alternate",
    opacity: "30%",
  });
  Object.assign(konten.style, {
    position: "absolute",
    width: "100%",
    maxWidth: "80rem",
    height: "100%",
    padding: "1rem 4rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    // backgroundColor: "yellow",
  });
  Object.assign(conFormNamaEmail.style, {
    width: "100%",
    // backgroundColor: "green",
    display: "flex",
    justifyContent: "space-between",
  });
  Object.assign(conSubject.style, {
    width: "100%",
  });
  Object.assign(conSend.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  });
}

// background
{
  const conBackground = document.createElement("section");
  containerContack.appendChild(conBackground);

  Object.assign(conBackground.style, {
    width: "100%",
    height: "100%",
  });
}

// nav footer
{
  const containerNavFooterContack = document.createElement("section");
  mainContack.appendChild(containerNavFooterContack);
  Object.assign(containerNavFooterContack.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",

    backgroundColor: "var(--footer)",
    // height: "20rem",
  });

  createNavFooter(containerNavFooterContack);
}
