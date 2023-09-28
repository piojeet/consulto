let cookieModal = document.querySelector(".cookie-consent-modal");
let cancelCookieBtn = document.querySelector(".btn.cancel");
let acceptCookieBtn = document.querySelector(".btn.accept");

cancelCookieBtn.addEventListener("click", function () {
    cookieModal.classList.remove("active");
    localStorage.setItem("cookieAccepted", "cancelled");
});

acceptCookieBtn.addEventListener("click", function () {
    cookieModal.classList.remove("active");
    localStorage.setItem("cookieAccepted", "yes");
});

setTimeout(function () {
    let cookieAccepted = localStorage.getItem("cookieAccepted");
    if (cookieAccepted !== "yes" && cookieAccepted !== "cancelled") {
        cookieModal.classList.add("active");
    }
}, 2000);
