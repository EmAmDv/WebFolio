const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


const images = document.querySelectorAll(".project-card img");

let imgIndex;
let imgSrc;

images.forEach((img, i) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src.slice(0, -4) + 'fs.jpg';
        imgTxt = e.target.alt;
        imgModal(imgSrc, imgTxt);
        imgIndex = i;
    });
});

let imgModal = (src, txt) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".projects").parentNode.append(modal);
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    const newText = document.createElement("div");
    newText.innerHTML = txt;
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "closeBtn");
    closeBtn.innerHTML = "X";
    closeBtn.onclick = () => {
      modal.remove();
    };
    modal.append(newImage, newText, closeBtn);
};