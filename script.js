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

// Change Colors of Products
colorBoxes.forEach(e => {
    e.addEventListener("click", () => {
        colorBoxes.forEach(box => box.innerHTML = "");
        let whiteClass = e.classList.contains("white");
        let blackClass = e.classList.contains("black");
        let redClass = e.classList.contains("red");
        let blueClass = e.classList.contains("blue");
        let orangeClass = e.classList.contains("orange");
        let greenClass = e.classList.contains("green");
        let tick = '<i class="fa-solid fa-check"></i>';
        
        if (whiteClass) {
            customizePic.src = "assets/customizabale/MenTshirtWhite.png";
            e.innerHTML = tick;
        }
        else if (blackClass) {
            customizePic.src = "assets/customizabale/MenTshirtBlack.png";
            e.innerHTML = tick;
        }
        else if (redClass) {
            customizePic.src = "assets/customizabale/MenTshirtRed.png";
            e.innerHTML = tick;
        }
        else if (blueClass) {
            customizePic.src = "assets/customizabale/MenTshirtBlue.png";
            e.innerHTML = tick;
        }
        else if (orangeClass) {
            customizePic.src = "assets/customizabale/MenTshirtOrange.png";
            e.innerHTML = tick;
        }
        else if (greenClass) {
            customizePic.src = "assets/customizabale/MenTshirtGreen.png";
            e.innerHTML = tick;
        }
        else {
            console.log(`GG`);
        }
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
