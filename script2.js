const boxes = document.querySelector(".boxes");

const printStyles = { top: 0, left: 0, width: 0, height: 0, x: 0, y: 0 };

const appendElement = el => {
  el.innerHTML = `
    <div class="modalPage2">
      <img src="dora.jpg" alt="" class="page2-img"/>
    </div>
  `;
};

boxes.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "button") {
    const box = e.target.parentNode;
    const parameters = box.getBoundingClientRect();
    printStyles.boundingTop = parameters.top;
    printStyles.top = box.offsetTop;
    printStyles.left = parameters.left;
    printStyles.height = parameters.height;
    printStyles.width = parameters.width;
    printStyles.x = parameters.x;
    printStyles.y = parameters.y;
    printStyles.scrollY = window.scrollY;
    console.log("hi");

    const { boundingTop, top, left, width, height, x, y } = printStyles;
    console.log(top);

    const shadowDiv = document.createElement("div");
    shadowDiv.style.top = y;
    appendElement(shadowDiv);
    const modal = shadowDiv.querySelector(".modalPage2");
    $(modal).css({
      top: top,
      left: left,
      width: width,
      height: height
    });
    document.querySelector("body").appendChild(shadowDiv);
    shadowDiv.classList.add("blackBg");
    shadowDiv.style.top = `-${printStyles.scrollY}px`;
  }
});

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("blackBg")) {
    e.target.remove();
  }
});
