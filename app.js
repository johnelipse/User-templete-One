//targeting the header links from htm and indicating the active links by showing a border bottom on it once clicked
const home = document.querySelector(".Home");
const pages = document.querySelector(".Pages");
const about = document.querySelector(".About");
const blog = document.querySelector(".Blog");
// console.log(home,pages,about,blog);
home.style.borderBottom = "1px solid black";
pages.addEventListener("click", function () {
  home.style.borderBottom = "none";
  pages.style.borderBottom = "1px solid black";
  about.style.borderBottom = "none";
  blog.style.borderBottom = "none";
});
about.addEventListener("click", function () {
  home.style.borderBottom = "none";
  pages.style.borderBottom = "none";
  about.style.borderBottom = "1px solid black";
  blog.style.borderBottom = "none";
});
blog.addEventListener("click", function () {
  home.style.borderBottom = "none";
  pages.style.borderBottom = "none";
  about.style.borderBottom = "none";
  blog.style.borderBottom = "1px solid black";
});
home.addEventListener("click", function () {
  home.style.borderBottom = "1px solid black";
  pages.style.borderBottom = "none";
  about.style.borderBottom = "none";
  blog.style.borderBottom = "none";
});

//targeting and giving function to the menu icon
const menuBtn=document.querySelector("#menuBtn");
const generalLinks=document.querySelector(".general-links")
menuBtn.addEventListener("click",function(){
    generalLinks.classList.toggle("general-linksActive")
})


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});




