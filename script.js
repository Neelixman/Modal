$(document).ready(function () {
  const modal = $(".modal");
  const container = document.querySelector(".container");
  const printedStyles = { position: 0, width: 0, height: 0, top: 0, boundingClientTop: 0, left: 0, element: "" };
  // const boxHeight = document.querySelector(".box").offsetHeight;
  // console.log(boxHeight);

  const scalePercentage = (boxValue, modalValue) => {
    return ((boxValue / modalValue) * 100).toFixed(2).replace(".", "");
  };
  // const scrollBarWidth = container.parentNode.offsetWidth - container.offsetWidth;
  // console.log(scrollBarWidth);
  window.addEventListener("click", function (e) {
    // console.log(`pageYOffset: ${window.pageYOffset}, offsetTop: ${window.offsetTop}, pageY: ${window.pageY}, scrollY: ${window.scrollY}`);
    if (e.target.tagName === "BUTTON") {
      const scrollY = window.scrollY;
      printedStyles.position = scrollY;
      box = e.target.parentNode;
      printedStyles.element = box;
      printedStyles.boundingClientTop = box.getBoundingClientRect().top;
      const offset = $(box).offset();
      printedStyles.top = offset.top;
      printedStyles.left = offset.left;
      printedStyles.width = box.offsetWidth;
      printedStyles.height = box.offsetHeight;

      const { position, height, width, top, left } = printedStyles;

      const newBox = document.createElement("div");
      // const img = document.createElement("img");
      // img.setAttribute("src", "dora.jpg");
      // img.classList.add("modal-img");

      const $newBox = $(newBox);
      // $(newBox).append(img);
      // console.log(percent, boxWidth);
      $newBox.addClass("blue");
      $newBox.height("2000px");

      newBox.style.left = left;
      newBox.style.top = top - scrollY;

      const scaleValue = scalePercentage(printedStyles.width * 1.3, 970);
      console.log(scaleValue);
      $newBox.css({
        position: "absolute",
        transform: `scale(0.${parseInt(scaleValue)})`
      });

      $("body").addClass("fixed");
      $("body").css("top", `-${scrollY}px`);
      modal.addClass("show");
      // $("body").append($newBox);
      modal.append($newBox);

      if (modal.hasClass("show")) {
        let i = 0;
        timer = setTimeout(function (i) {
          $newBox.addClass("active");
        }, 10);
      }
    }
  });

  window.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
      // modal.removeClass("show");

      // const img = document.createElement("img");
      // img.classList.add("closing-img");
      // img.setAttribute("src", "dora.jpg");
      // modal.append(img);

      // setTimeout(function () {
      //   $(img).css({
      //     width: printedStyles.width,
      //     height: printedStyles.height,
      //     transform: `translate(${printStyles.top}px, ${printStyleds.left}px)`
      //   });
      // }, 50);

      // $(".img-fluid").css({ height: "100%" });
      $(".blue").removeClass("active");
      $(".blue").css({
        // width: `${parseInt(scalePercentage(boxWidth, 970) / 3)}px`,
        // "transform-origin": "bottom center",
        top: printedStyles.boundingClientTop,
        left: printedStyles.left,
        height: `${printedStyles.height}px`,
        width: "250px",

        transform: `scale(1)`
        // transition: "width 6s ease, height 6s ease, transform 6s ease"
      });

      $(".blue").find("img").css({ height: "100%" });

      // console.log(printedStyles);
      $("body").removeClass("fixed");
      $("body").css("top", "0");
      setTimeout(function () {
        $(".blue").remove();
        $(modal).removeClass("show");
      }, 1241231);

      window.scrollTo(0, printedStyles.position);
    }
  });
});
