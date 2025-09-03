const conLaptop = document.querySelector(".con-web-home section:nth-child(1)");
const firstCon = document.createElement("section");
const laptop = document.createElement("div");
const laptopImg = document.createElement("img");

conLaptop.appendChild(firstCon);
firstCon.appendChild(laptop);
laptop.appendChild(laptopImg);

laptopImg.setAttribute("src", "asset/page-web/laptop.png");

Object.assign(conLaptop.style, {
  position: "relative",
  overflow: "hidden",
});

Object.assign(firstCon.style, {
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
});

Object.assign(laptop.style, {
  height: "90%",
  aspectRatio: "16/9",
  //   backgroundColor: "green",
  transform: "translateX(-20%)",
  filter: "drop-shadow(5px 5px 10px rgba(0,0,0,0.5))",
});
