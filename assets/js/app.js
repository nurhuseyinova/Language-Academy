let headerTop = document.querySelector(".headerTop");
let goTop = document.querySelector(".goTop");
let showMenu = document.querySelector(".headerBottum");
let counterContainer = document.querySelector(".counter");
let counterItem = document.querySelector(".counterItem");
let counterValue = document.querySelector(".counter-value");
let menu = document.querySelector(".fa-bars");
let activated = false;
let elements = document.querySelectorAll(".scroll-counter");
elements.forEach(function (item) {
  item.counterAlreadyFired = false;
  item.counterSpeed = item.getAttribute("data-counter-time") / 45;
  item.counterTarget = +item.innerText;
  item.counterCount = 0;
  item.counterStep = item.counterTarget / item.counterSpeed;
  item.updateCounter = function () {
    item.counterCount = item.counterCount + item.counterStep;
    item.innerText = Math.ceil(item.counterCount);
    if (item.counterCount < item.counterTarget) {
      setTimeout(item.updateCounter, item.counterSpeed);
    } else {
      item.innerText = item.counterTarget;
    }
  };
  let isElementVisible = function isElementVisible(el) {
    let scroll = window.scrollY || window.pageYOffset;
    let boundsTop = el.getBoundingClientRect().top + scroll;
    let viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    };
    let bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight,
    };
    return (
      (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    );
  };
  let handleScroll = function handleScroll() {
    elements.forEach(function (item, id) {
      if (true === item.counterAlreadyFired) return;
      if (!isElementVisible(item)) return;
      item.updateCounter();
      item.counterAlreadyFired = true;
    });
  };
  window.addEventListener("scroll", handleScroll);
});
menu.addEventListener("click", function () {
  showMenu.classList.toggle("show");
});

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    headerTop.style.background = "#ffb606";
  } else {
    headerTop.style.background = "";
  }
});

goTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  goTop.style.scrollBehavior = "smooth";
});



  