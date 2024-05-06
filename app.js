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

//swiper...//
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

//targeting and function for the pricing cards
// const pricingCardsOne=document.querySelector(".pricing-Cards-1");
// const pricingCardsTwo=document.querySelector(".pricing-Cards-2");
const priceOne=document.querySelector(".priceOne")
const priceTwo=document.querySelector(".priceTwo")
const priceThree=document.querySelector(".priceThree")
const monthBtn=document.querySelector(".monthBtn")
const anualBtn=document.querySelector(".anualBtn")
// console.log(priceOne,priceTwo,priceThree,monthBtn,anualBtn);
monthBtn.style.borderBottom='1px solid black';
anualBtn.addEventListener("click",function(){
  anualBtn.style.borderBottom='1px solid black';
  monthBtn.style.borderBottom='none';
  priceOne.innerText="$19/";
  priceTwo.innerText="$49/";
  priceThree.innerText="$89/";
})
monthBtn.addEventListener("click",function(){
  console.log("clicked");
  monthBtn.style.borderBottom='1px solid black';
  anualBtn.style.borderBottom='none';
  priceOne.innerText="$22/";
  priceTwo.innerText="$50/";
  priceThree.innerText="$99/";
})





