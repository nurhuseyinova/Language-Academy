let headerTop = document.querySelector(".headerTop");
let goTop = document.querySelector(".goTop");
let showMenu = document.querySelector(".headerBottum");
let menu = document.querySelector(".fa-bars");
menu.addEventListener("click", function () {
  showMenu.classList.toggle("show");
});
window.addEventListener("scroll", function () {
if (document.body.scrollTop > 30 || document.documentElement.scrollTop >30) {
    headerTop.style.background = 'rgba(6, 8, 32, 0.521)';
} else {
    headerTop.style.background = '';

}
});
goTop.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    goTop.style. scrollBehavior= "smooth";
})
