function sayHi() {
  alert("你好呀 👋");
}

/* 自動輪播 - firePage row1 */
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex <= 0) { slideIndex = slides.length }
  slides[slideIndex-1].style.display = "block";  
//   setTimeout(showSlides, 4000); // 每 4 秒換一張
}

function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}

console.log("這是一個 JavaScript 檔案");