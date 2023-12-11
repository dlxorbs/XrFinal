const ground = document.querySelector("#ground");
const gbtn = document.querySelectorAll(".ground");
const ground1 = document.querySelector("#groundMap1");
const ground2 = document.querySelector("#groundMap2");
const ground3 = document.querySelector("#groundMap3");

// 클릭시 시작하기

$(".startpage .button").click(function () {
  $(".startpage").addClass("hidden");
  $(".secondpage").removeClass("hidden");
});

$(".secondpage .button").click(function () {
  $(".startpage").addClass("hidden");
  $(".secondpage").addClass("hidden");
  $(".btn-container").removeClass("hidden");
});

const Leftbtn = document.querySelector(".text:first-child");
const Rightbtn = document.querySelector(".text:last-child");

Leftbtn.addEventListener("click", (evt) => {
  const objectWrapper = document.querySelector(
    ".object-container:not(.hidden)"
  );
  const currentScroll = objectWrapper.scrollLeft;
  console.log(objectWrapper);
  // 왼쪽 끝으로 이동
  console.log(currentScroll);

  objectWrapper.scrollTo({ left: 0, behavior: "smooth" });
});

Rightbtn.addEventListener("click", (evt) => {
  const objectWrapper = document.querySelector(
    ".object-container:not(.hidden)"
  );
  const currentScroll = objectWrapper.scrollLeft;
  const containerWidth = objectWrapper.clientWidth;
  const containerScrollWidth = objectWrapper.scrollWidth;

  // 오른쪽 끝으로 이동
  objectWrapper.scrollBy({
    left: containerScrollWidth - currentScroll - containerWidth,
    behavior: "smooth",
  });
});

gbtn.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    console.log(index);
    if (index == 0) {
      ground1.setAttribute("visible", true);
      ground2.setAttribute("visible", false);
      ground3.setAttribute("visible", false);
    } else if (index == 1) {
      ground1.setAttribute("visible", false);
      ground2.setAttribute("visible", true);
      ground3.setAttribute("visible", false);
    } else if (index == 2) {
      ground1.setAttribute("visible", false);
      ground2.setAttribute("visible", false);
      ground3.setAttribute("visible", true);
    }
  });
});

// 여기서의 data는 컴포넌트의 이름 뒤에 붙는 기본적인 것들을 정의한다.
let positionMap = document.querySelector("#positionMap");

let intersection;
let targetModel = "#rock1";
let roty = 0;

let rockname = document.getElementsByClassName("rockbtn");

const rbtn = document.querySelectorAll(".rockbtn");
console.log(rbtn);

rbtn.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    console.log(index);

    targetModel = `#rock${index + 1}`;
  });
});

const cbtn = document.querySelectorAll(".coralbtn");

cbtn.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    console.log(index);

    targetModel = `#coral${index + 1}`;
  });
});

const wbtn = document.querySelectorAll(".woodbtn");
wbtn.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    console.log(index);

    targetModel = `#wood${index + 1}`;
  });
});

const sbtn = document.querySelectorAll(".seaweedbtn");

sbtn.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    console.log(index);

    targetModel = `#seaweed${index + 1}`;
  });
});
let intersect = true;
//커서 리스너 통해서 박스 생성
AFRAME.registerComponent("cursor-listener", {
  init: function () {
    this.el.addEventListener("raycaster-intersected", (evt) => {
      intersect = true;
    });
    if (intersect) {
      this.el.addEventListener("click", (evt) => {
        const clickPoint = document.createElement(`a-entity`);
        const clickbox = document.createElement(`a-box`);

        clickPoint.setAttribute("gltf-model", targetModel);

        evt.detail.intersection.point.x = Math.round(
          evt.detail.intersection.point.x
        );
        evt.detail.intersection.point.y = 0;
        if (evt.detail.intersection.point.z <= -2) {
          evt.detail.intersection.point.z = -2;
        } else {
          evt.detail.intersection.point.z = Math.round(
            evt.detail.intersection.point.z
          );
        }

        // console.log(this.el);
        clickPoint.setAttribute("animation-mixer", "clip:default");
        clickPoint.setAttribute("position", evt.detail.intersection.point);
        clickPoint.setAttribute("rotation", "0 0 0");
        clickbox.setAttribute("rotating-this", "");
        clickbox.setAttribute("visible", "false");
        clickPoint.appendChild(clickbox);
        positionMap.appendChild(clickPoint);
      });
    }
    this.el.addEventListener("raycaster-intersected-cleared", (evt) => {
      intersect = false;
    });
  },
});

AFRAME.registerComponent("rotating-this", {
  update: function () {
    this.el.addEventListener("click", function () {
      roty = -90 + roty;

      this.parentNode.setAttribute(
        "animation",
        `property : rotation; to :0 ${roty} 0; dur: 600`
      );
    });
    roty = 0;
  },
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  positionMap.innerHTML = "";
});

const next = document.querySelector(".next");

next.addEventListener("click", function () {
  $(".tabbtn-container").addClass("hidden");
  $(".object-container").addClass("hidden");
  $(".fish").removeClass("hidden");
  $(".reset").addClass("hidden");
  $(".next").addClass("hidden");
  $(".end").removeClass("hidden");
});

const end = document.querySelector(".end");
const player = document.querySelector("#player");
end.addEventListener("click", function () {
  $(".object-wrapper").addClass("hidden");
  const ocean = document.querySelector("a-ocean");
  const glass = document.querySelector("#glass");
  const glassend = document.querySelector("#glass-end");

  glass.setAttribute("visible", "flase");
  glassend.setAttribute("visible", "true");
  ocean.setAttribute("visible", "true");
  glassend.setAttribute("position", "0 0 0 ");
  player.setAttribute(
    "animation",
    `property : position; to :0 10 -11; dur: 1600; easing :easeInCubic;`
  );

  setTimeout(() => {
    let x = 0;
    const rotate = document.querySelector(".rotate");

    x = x + 360;

    rotate.setAttribute(
      "animation",
      `property :rotation; to :0 ${x} 0; dur: 3000;`
    );
  }, 1600);

  setTimeout(() => {
    player.setAttribute(
      "animation",
      `property : position; to :0 3 -8; dur: 1600; easing :easeInCubic;`
    );

    player.setAttribute(
      "animation__2",
      `property : rotation; to :-25 180 0; dur: 1600; easing :easeInCubic;`
    );
  }, 4600);
});
