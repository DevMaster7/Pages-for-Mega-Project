let nav_bar = document.querySelector(".nav-container")
let icon = document.querySelector(".icon-con")
let themeBtn = document.querySelector(".switch")
let mobileBars = document.querySelectorAll(".bars-cross-mobile")[0]
let mobileCross = document.querySelectorAll(".bars-cross-mobile")[1]
let mobileDrop = document.querySelector(".useless-dropdown-mobile")
let mobileDropCon = document.querySelector(".dropdown-con-mobile")
let landBars = document.querySelectorAll(".bars-cross-land")[0]
let landCross = document.querySelectorAll(".bars-cross-land")[1]
let landDrop = document.querySelector(".useless-dropdown-land")
let landDropCon = document.querySelector(".dropdown-con-land")
let faq_btn = document.querySelectorAll(".faq-topic")

// Logo Animation
icon.addEventListener("animationend", function () {
    icon.style.animation = "bounce .5s ease-in-out 2";
})

// Sticky Navigation Bar
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 10) {
        nav_bar.classList.add("sticky");
    } else {
        nav_bar.classList.remove("sticky");
    }
});

// Theme Changer
let a = 0
themeBtn.addEventListener("click", function () {
    let themePic = themeBtn.children[0].children[0]
    if (a == 0) {
        themePic.classList.replace("fa-sun", "fa-moon");
        themePic.style.color = "#023047"
        themeBtn.children[0].style.left = "unset"
        themeBtn.children[0].style.right = "1px"
        a = 1
    }
    else {
        themePic.classList.replace("fa-moon", "fa-sun");
        themePic.style.color = "rgb(255 154 39)"
        themeBtn.children[0].style.right = "unset"
        themeBtn.children[0].style.left = "1px"
        a = 0
    }
})

// Hamburger Menu
mobileBars.addEventListener("click", () => {
    mobileDropCon.style.display = "flex";
})
mobileDrop.addEventListener("click", () => {
    mobileDropCon.style.display = "none"
})
mobileCross.addEventListener("click", () => {
    mobileDropCon.style.display = "none"
})
landBars.addEventListener("click", () => {
    landDropCon.style.display = "flex";
    landCross.style.position = "fixed";
    landCross.style.top = "20px";
    landCross.style.left = "20px";
    landCross.style.zIndex = "11";
})
landDrop.addEventListener("click", () => {
    landDropCon.style.display = "none"
})
landCross.addEventListener("click", () => {
    landDropCon.style.display = "none"
})

// FAQs Opener and Closer
faq_btn.forEach(e => {
    e.addEventListener("click", () => {
        let down = document.querySelectorAll(".extender")
        let currentFaq = e.nextElementSibling;
        let i = e.lastElementChild
        document.querySelectorAll(".extender-con").forEach(faq => {
            if (faq !== currentFaq) {
                faq.style.display = "none";
                i.classList.remove("fa-chevron-down")
            }
        });
        down.forEach(icon => {
            if (icon.classList.contains("fa-chevron-up")) {
                icon.classList.remove("fa-chevron-up");
                icon.classList.add("fa-chevron-down");
            }
        });
        if (currentFaq.style.display === "flex") {
            currentFaq.style.display = "none";
            i.classList.remove("fa-chevron-up")
            i.classList.add("fa-chevron-down")
        } else {
            currentFaq.style.display = "flex";
            i.classList.remove("fa-chevron-down")
            i.classList.add("fa-chevron-up")
            currentFaq.style.borderTop = "2px solid #F8F9FA"
        }
    });
});
