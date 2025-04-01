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
let customizePic = document.querySelector(".preview-pic")
let picBoxes = document.querySelectorAll(".img-box")
let colorBoxes = document.querySelectorAll(".color-box")
let faq_btn = document.querySelectorAll(".faq-topic")
let down = document.querySelectorAll(".extender")


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
function toggleTheme() {
    const btn = document.querySelector(".theme__icon");
    btn.classList.toggle("clicked");
}

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

// Change Products
picBoxes.forEach((e) => {
    e.addEventListener("click", () => {
        picBoxes.forEach((x) => {
            x.style.boxShadow = "0px 0px 2px #000000cf";
        });
        e.style.boxShadow = "#000000d9 3px 3px 5px";

        let imgWithsrc = e.innerHTML;
        let result = imgWithsrc.split('src="')[1].split('"')[0];
        customizePic.src = result;

        colorBoxes.forEach((y) => {
            y.style.boxShadow = "unset";
        });

        let whiteBox = document.querySelector(".color-box.white");
        if (whiteBox) {
            whiteBox.style.boxShadow = "2px 2px 2px #000000d9";
        }
    });
});

// Change Colors of Products
colorBoxes.forEach((element) => {
    element.addEventListener("click", () => {
        let whiteClass = element.classList.contains("white");
        let blackClass = element.classList.contains("black");
        let redClass = element.classList.contains("red");
        let blueClass = element.classList.contains("blue");
        let orangeClass = element.classList.contains("orange");
        let greenClass = element.classList.contains("green");
        let firstpreview = document.querySelector(".preview-pic");
        // TODO: Change Split when Website post on URL
        let imgSRC = firstpreview.src.split("customizabale/")[1];
        console.log(whiteClass, blackClass, redClass, blueClass, orangeClass, greenClass);
        console.log(imgSRC);
        colorBoxes.forEach((y) => {
            y.style.boxShadow = "unset";
        });
        element.style.boxShadow = "2px 2px 2px #000000d9";
    });
});

// Logo on TShirts
document.getElementById("fileInput").addEventListener("change", function () {
    let file = this.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let img = document.getElementById("preview");
            img.src = e.target.result;
            img.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

// FAQs Opener and Closer
faq_btn.forEach(e => {
    e.addEventListener("click", () => {
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
