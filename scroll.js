// var screen = document.querySelectorAll("section")[0];
// var screen2 = document.querySelectorAll("section")[1];
// var screen3 = document.querySelectorAll("section")[2];
// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
// });
// if (window.innerWidth <= 600) {
//   var textA = document.querySelector(".texta");
//   var textB = document.querySelector(".textb");

//   var textA2 = document.querySelector(".texta2");
//   var textB2 = document.querySelector(".textb2");

//   var textA3 = document.querySelector(".texta3");
//   var textB3 = document.querySelector(".textb3");

//   window.addEventListener("scroll", function () {
//     if (this.window.scrollY < 130) {
//       textA.style.transform = "translateX(-22200px)";
//       textB.style.transform = "translateX(3000px)";
//     } else if (this.window.scrollY >= 130) {
//       textA.style.transform = "translateX(0px)";
//       textB.style.transform = "translateX(65px)";
//     }
//     if (this.window.scrollY < 900) {
//       textA2.style.transform = "translateX(-22200px)";
//       textB2.style.transform = "translateX(3000px)";
//     } else if (this.window.scrollY >= 900) {
//       textA2.style.transform = "translateX(0px)";
//       textB2.style.transform = "translateX(50px)";
//     }
//     if (this.window.scrollY < 1500) {
//       textA3.style.transform = "translateX(-22200px)";
//       textB3.style.transform = "translateX(3000px)";
//     } else if (this.window.scrollY >= 1500) {
//       textA3.style.transform = "translateX(0px)";
//       textB3.style.transform = "translateX(60px)";
//     }
//   });
// } else if (window.innerWidth > 500) {
//   window.addEventListener("scroll", function () {
//     let scrollPosition = window.scrollY;
//     var opacityValue = 1 - scrollPosition / 1000;
//     var opacityValue2 = (scrollPosition - 1) / 1200;
//     var opacityValue3 = (scrollPosition - 1000) / 1000; // screen3에 대한 투명도 계산

//     // 투명도 값을 0과 1 사이로 유지
//     opacityValue = Math.max(0, Math.min(1, opacityValue));
//     opacityValue2 = Math.max(0, Math.min(1, opacityValue2));
//     opacityValue3 = Math.max(0, Math.min(1, opacityValue3)); // screen3에 대한 투명도 값

//     // 계산된 투명도 적용
//     screen.style.opacity = opacityValue;
//     screen2.style.opacity = opacityValue2;
//     screen3.style.opacity = opacityValue3; // screen3에 대한 투명도 적용
//   });
//   // about글씨효과

//   var textA = document.querySelector(".texta");
//   var textB = document.querySelector(".textb");

//   var textA2 = document.querySelector(".texta2");
//   var textB2 = document.querySelector(".textb2");

//   var textA3 = document.querySelector(".texta3");
//   var textB3 = document.querySelector(".textb3");

//   window.addEventListener("scroll", function () {
//     if (this.window.scrollY < 700) {
//       textA.style.transform = "translateX(-22200px)";
//       textB.style.transform = "translateX(3000px)";
//     } else if (this.window.scrollY >= 700) {
//       textA.style.transform = "translateX(0px)";
//       textB.style.transform = "translateX(100px)";
//     }
//     if (this.window.scrollY < 1700) {
//       textA2.style.transform = "translateX(-22200px)";
//       textB2.style.transform = "translateX(3000px)";
//     } else if (this.window.scrollY >= 1700) {
//       textA2.style.transform = "translateX(0px)";
//       textB2.style.transform = "translateX(80px)";
//     }
//     if (this.window.scrollY < 2700) {
//       textA3.style.transform = "translateX(-22200px)";
//       textB3.style.transform = "translateX(3000px)";
//     } else if (this.window.scrollY >= 2700) {
//       textA3.style.transform = "translateX(0px)";
//       textB3.style.transform = "translateX(90px)";
//     }
//   });
// }
// // //-------------------------------------------------------
var screen = document.querySelectorAll("section")[0];
var screen2 = document.querySelectorAll("section")[1];
var screen3 = document.querySelectorAll("section")[2];
var textA = document.querySelector(".texta");
var textB = document.querySelector(".textb");
var textA2 = document.querySelector(".texta2");
var textB2 = document.querySelector(".textb2");
var textA3 = document.querySelector(".texta3");
var textB3 = document.querySelector(".textb3");
if (window.innerWidth < 600) {
  var newTexta = document.querySelector(".texta");
  var newTextb = document.querySelector(".textb");
  newTexta.innerHTML = "";
  newTextb.innerHTML = "ABOUT";
  var newTexta2 = document.querySelector(".texta2");
  var newTextb2 = document.querySelector(".textb2");
  newTexta2.innerHTML = "";
  newTextb2.innerHTML = "SKILL";
  var newTexta3 = document.querySelector(".texta3");
  var newTextb3 = document.querySelector(".textb3");
  newTexta3.innerHTML = "";
  newTextb3.innerHTML = "PROJECT";

  newTextb.style.fontSize = "80px";
  newTextb2.style.fontSize = "80px";
  newTextb3.style.fontSize = "80px";
}

function updateScroll() {
  let scrollPosition = window.scrollY;
  if (window.innerWidth > 600) {
    // Animation logic for larger screens
    var opacityValue = 1 - scrollPosition / 1000;
    var opacityValue2 = (scrollPosition - 1) / 1200;
    var opacityValue3 = (scrollPosition - 1000) / 1000;

    opacityValue = Math.max(0, Math.min(1, opacityValue));
    opacityValue2 = Math.max(0, Math.min(1, opacityValue2));
    opacityValue3 = Math.max(0, Math.min(1, opacityValue3));

    screen.style.opacity = opacityValue;
    screen2.style.opacity = opacityValue2;
    screen3.style.opacity = opacityValue3;

    // Handle text animations
    if (scrollPosition < 700) {
      textA.style.transform = "translateX(-22200px)";
      textB.style.transform = "translateX(3000px)";
    } else if (scrollPosition >= 700) {
      textA.style.transform = "translateX(0px)";
      textB.style.transform = "translateX(100px)";
    }
    if (scrollPosition < 1700) {
      textA2.style.transform = "translateX(-22200px)";
      textB2.style.transform = "translateX(3000px)";
    } else if (scrollPosition >= 1700) {
      textA2.style.transform = "translateX(0px)";
      textB2.style.transform = "translateX(80px)";
    }
    if (scrollPosition < 2700) {
      textA3.style.transform = "translateX(-22200px)";
      textB3.style.transform = "translateX(3000px)";
    } else if (scrollPosition >= 2700) {
      textA3.style.transform = "translateX(0px)";
      textB3.style.transform = "translateX(90px)";
    }
  }
}

// Add a single scroll event listener

// Initial call to updateScroll to set initial state
updateScroll();

window.addEventListener("scroll", function () {
  requestAnimationFrame(updateScroll);
});
