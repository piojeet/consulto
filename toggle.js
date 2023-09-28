
const clickBtns = document.querySelectorAll("#Section-8 .center-container button");
const toggleWidth = document.querySelectorAll("#Section-8 .toggle-btn");

clickBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        toggleWidth.forEach((element, i) => {
            if (i === index) {
                element.classList.toggle("active");
            } else {
                element.classList.remove("active");
            }
        });
    });
});
















//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 20);
})




//Scroll to top button
const scrollTopBtn = document.querySelector("#scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 200);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})




//Navigation menu items active on page scroll
window.addEventListener("scroll", ()=> {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
      let sectionHeight = current.offsetHeight;
      let sectionTop = current.offsetTop - 0;
      let id = current.getAttribute("id");

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
      }
      else {
          document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
      }
  });
});