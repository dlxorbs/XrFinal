const rockbtn = document.querySelectorAll(".rockbtn");
const coralbtn = document.querySelectorAll(".coralbtn");
const woodbtn = document.querySelectorAll(".woodbtn");
const seaweedbtn = document.querySelectorAll(".seaweedbtn");
const fishbtn = document.querySelectorAll(".fishbtn");
const closebtn = document.querySelector(".close");
const modal = document.querySelector(".modalcontainer");

const fish01 = document.querySelector("#fish01");
const fish02 = document.querySelector("#fish02");
const fish03 = document.querySelector("#fish03");
const fish04 = document.querySelector("#fish04");
const fish05 = document.querySelector("#fish05");

const fishinfo = [
  {
    name: "아시아 아로와나 금용",
    info: "성격은 온순하며 단독사육을 권장하지만 여러마리 사육하고자 할 때는 2마리보다 3마리 그 이상을 합사하는 것이 좋습니다. 주의하실 점으로 수조의 물을 가득 채우면 안구하락이 심해질 수 있고 점프를 하기에 수조의 천장을 제거하면 좋습니다.",
    thumb: "fish1",
  },
  {
    name: "블루탱",
    info: "대표적인 해수어로 성격은 온순한 편이라 소형 어종과의 합사도 무난하여 산호수조에서 많이 키우는 종입니다. 주의하실 점으로수질관리가 제대로 되어있지 않으면 백점병에 걸리기 쉬우니 수질관리를 잘 해주어야 합니다.",
    thumb: "fish2",
  },
  {
    name: "세일핀탱",
    info: "성격은 온순하며 상자같은 몸으로 뒤뚱뒤뚱 움직이는 귀엽고 느린 관상어입니다. 주의하실 점으로 공기를 지속적으로 먹게되면 부레에 공기가 차 중심을 잡지 못해 죽을 수 있습니다.",
    thumb: "fish3",
  },
  {
    name: "롱 혼 카우피쉬 ",
    info: "특징 : 성격은 온순하며 단독사육을 권장하지만 여러마리 사육하고자 할 때는 2마리보다 3마리 그 이상을 합사하는 것이 좋습니다. 주의하실 점으로 수조의 물을 가득 채우면 안구하락이 심해질 수 있고 점프를 하기에 수조의 천장을 제거하면 좋습니다.",
    thumb: "fish4",
  },
  {
    name: "아시아 아로와나 홍용",
    info: "평균 15년 이상의 수명을 가지고 있는 사이테스 1급의의 멸종위기종입니다. 더욱 선명한 붉은 빛을 위해 태닝을 진행한다면 스트레스를 받지 않도록 주의하셔야합니다.  ",
    thumb: "fish5",
  },
];

function closeModal() {
  $(modal).addClass("hidden");
}

function openModal(element, index) {
  $(modal).removeClass("hidden");
  console.log(element, index);

  const fishname = document.querySelector(".name");
  const fishdetail = document.querySelector(".fishdetail");
  const fishthumb = document.querySelector(".fishthumb");

  fishname.innerHTML = fishinfo[index].name;

  fishdetail.innerHTML = fishinfo[index].info;

  fishthumb.style.backgroundImage = `url(./Img/fish/${fishinfo[index].thumb}.png)`;

  const add = document.querySelector(".add");

  let a = index;

  add.addEventListener("click", function () {
    console.log(element, index);

    if (index == 0) {
      fish01.setAttribute("visible", true);
      fish02.setAttribute("visible", false);
      fish03.setAttribute("visible", false);
      fish04.setAttribute("visible", false);
      fish05.setAttribute("visible", false);
    } else if (index == 1) {
      fish02.setAttribute("visible", true);
      fish01.setAttribute("visible", false);
      fish03.setAttribute("visible", false);
      fish04.setAttribute("visible", false);
      fish05.setAttribute("visible", false);
    } else if (index == 2) {
      fish03.setAttribute("visible", true);
      fish01.setAttribute("visible", false);
      fish02.setAttribute("visible", false);
      fish04.setAttribute("visible", false);
      fish05.setAttribute("visible", false);
    } else if (index == 3) {
      fish04.setAttribute("visible", true);
      fish01.setAttribute("visible", false);
      fish02.setAttribute("visible", false);
      fish03.setAttribute("visible", false);
      fish05.setAttribute("visible", false);
    } else if (index == 4) {
      fish05.setAttribute("visible", true);
      fish01.setAttribute("visible", false);
      fish02.setAttribute("visible", false);
      fish03.setAttribute("visible", false);
      fish04.setAttribute("visible", false);
    }
  });
}

// 돌 이미지
rockbtn.forEach((element, index) => {
  // console.log(element);
  const number = index + 1;
  element.style.backgroundImage = `url(./Img/rock/rock${number}.png)`;
});

coralbtn.forEach((element, index) => {
  // console.log(element);S
  const number = index + 1;
  element.style.backgroundImage = `url(./Img/coral/coral${number}.png)`;
});

woodbtn.forEach((element, index) => {
  // console.log(element);
  const number = index + 1;
  element.style.backgroundImage = `url(./Img/wood/wood${number}.png)`;
});

seaweedbtn.forEach((element, index) => {
  // console.log(element);
  const number = index + 1;
  element.style.backgroundImage = `url(./Img/seaweed/seaweed${number}.png)`;
});

fishbtn.forEach((element, index) => {
  // console.log(element);
  const number = index + 1;
  element.style.backgroundImage = `url(./Img/fish/fish${number}.png)`;

  element.addEventListener("click", (e) => {
    openModal(element, index);
  });
});

closebtn.addEventListener("click", function () {
  closeModal();
});
