const clickBtn = document.querySelector(".menu-toggler-btn");
const navItems = document.querySelector(".nav-list ul");
let firstSpan = document.querySelector("#first");
let secondSpan = document.querySelector("#second");
let thirdSpan = document.querySelector("#third");

clickBtn.addEventListener("click", function() {
    navItems.classList.toggle("actives");
    firstSpan.classList.toggle("actives");
    secondSpan.classList.toggle("actives");
    thirdSpan.classList.toggle("actives");
    
});



let navList = document.querySelector(".home-flex");
let navitembox =document.querySelector(".list-items");

navList.addEventListener("click", function() {
    navitembox.classList.toggle("active");
})

