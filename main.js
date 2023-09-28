const numberElement = document.getElementById('number-1');
let count = 200;
let intervalId;

function updateNumber() {
  count++;
  numberElement.textContent = count;

  if (count === 700) {
    clearInterval(intervalId);
  }
}

// Update the number every 100 milliseconds
intervalId = setInterval(updateNumber, 5);



const number2Element = document.getElementById('number-2');
let count2 = 200;
let intervalId2;

function updateNumber2() {
  count2++;
  number2Element.textContent = count2;

  if (count2 === 900) {
    clearInterval(intervalId2);
  }
}

// Update the number every 5 milliseconds
intervalId2 = setInterval(updateNumber2, 5);




const number3Element = document.getElementById('number-3');
let count3 = 200;
let intervalId3;

function updateNumber3() {
  count3++;
  number3Element.textContent = count3;

  if (count3 === 980) {
    clearInterval(intervalId3);
  }
}

// Update the number every 5 milliseconds
intervalId3 = setInterval(updateNumber3, 5);



















// click to scroll left and right card
let scrollContainer = document.querySelector(".logos");
        let backBtn = document.getElementById("backBtn");
        let nextBtn = document.getElementById("nextBtn");
        let imgBoxWidth; // Width of each image box
        let scrollInterval;
      
        function setImgBoxWidth() {
          imgBoxWidth = document.querySelector(".flex").offsetWidth + 27;
        }
      
        function stopAutoScroll() {
          clearInterval(scrollInterval);
        }
      
        function scrollGallery(direction) {
          stopAutoScroll();
          setImgBoxWidth();
          scrollContainer.style.scrollBehavior = "smooth";
          scrollContainer.scrollLeft += direction * imgBoxWidth;
          startAutoScroll();
        }
      
        nextBtn.addEventListener("click", () => {
          scrollGallery(1);
        });
      
        backBtn.addEventListener("click", () => {
          scrollGallery(-1);
        });
      
      
        // Start auto-scroll initially
        setImgBoxWidth();













// click to scroll left and right card
        document.addEventListener('DOMContentLoaded', () => {
          let scrollContainer2 = document.querySelector(".scroll-box");
          let backBtn2 = document.getElementById("backBtn2");
          let nextBtn2 = document.getElementById("nextBtn2");
          let imgBoxWidth2; // Width of each image box
          let scrollInterval2;

          function setImgBoxWidth() {
              imgBoxWidth2 = document.querySelector(".boxes").offsetWidth;
          }

          function stopAutoScroll() {
              clearInterval(scrollInterval2);
          }

          function scrollGallery(direction) {
              stopAutoScroll();
              setImgBoxWidth();
              scrollContainer2.style.scrollBehavior = "smooth";
              scrollContainer2.scrollLeft += direction * imgBoxWidth2;
          }


          nextBtn2.addEventListener("click", () => {
              scrollGallery(+1);
          });

          backBtn2.addEventListener("click", () => {
              scrollGallery(-1);
          });

          // Start auto-scroll initially
          setImgBoxWidth();
          // startAutoScroll();
      });











      
