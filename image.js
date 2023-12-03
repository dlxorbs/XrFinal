const rockbtn = document.querySelectorAll(".rockbtn");

// 돌 이미지
rockbtn.forEach((element, index) => {
  console.log(element);
  const number = index + 1;
  element.style.backgroundImage = `url(./Img/rock${number}.png)`;
});
