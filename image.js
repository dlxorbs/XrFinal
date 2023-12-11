const rockbtn = document.querySelectorAll(".rockbtn");
const coralbtn = document.querySelectorAll(".coralbtn");
const woodbtn = document.querySelectorAll(".woodbtn");
const seaweedbtn = document.querySelectorAll(".seaweedbtn");
const fishbtn = document.querySelectorAll(".fishbtn");

function openModal(){
  
}
// 돌 이미지
rockbtn.forEach((element, index) => {
  // console.log(element);
  const number = index + 1;
  element.style.backgroundImage = `url(./Img/rock/rock${number}.png)`;
});

coralbtn.forEach((element, index) => {
  // console.log(element);
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
    openModal();
  });
});
