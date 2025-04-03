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
// Change When extra Images add in CustomizePic 
let customizeRight = document.querySelector(".cust-right")
let customizeBox = customizeRight.querySelector(".right")
let customizePic = document.querySelector(".preview-pic").getElementsByTagName("img")[1]
let positionSize = document.querySelector(".position-size")
let imgSelection = document.querySelector(".img-selection")
let colorSelection = document.querySelector(".color-selection")
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

        customizeRight.style.padding = "0px 0px 0px 50px"
        customizeBox.style.height = "400px"
        positionSize.style.display = "none"
        imgSelection.style.width = "unset"
        imgSelection.style.justifyContent = "center"
        colorSelection.style.gap = "10px"

        picBoxes.forEach((x) => {
            x.style.boxShadow = "0px 0px 2px #000000cf";
        });
        e.style.boxShadow = "#000000d9 3px 3px 5px";

        let imgSRC1 = e.innerHTML;
        let SRC1 = imgSRC1.split('src="')[1].split('"')[0];
        customizePic.src = SRC1;

        let SRC2 = SRC1.split("customizabale/")[1];
        if (SRC2.includes("MenTshirt") || SRC2.includes("Perfume")) {
            customizePic.style.height = "100%";
        }
        else if (SRC2.includes("FemTshirt")) {
            customizePic.style.height = "75%";
        }
        else if (SRC2.includes("Mug")) {
            customizePic.style.height = "85%";
        }

        let whiteBox = document.querySelector(".color-box.white");
        colorBoxes.forEach((y) => {
            y.style.boxShadow = "unset";
        });
        if (whiteBox) {
            whiteBox.style.boxShadow = "2px 2px 2px #000000d9";
        }
    });
});

// Change Colors of Products
colorBoxes.forEach((element) => {
    element.addEventListener("click", () => {
        let classText = element.className.slice(10)
        let imgSRC2 = customizePic.src;

        let startIndex = imgSRC2.indexOf("assets");
        let result = imgSRC2.substring(startIndex).substring(0, 30);

        let mainSRC = `${result}${classText}.png`
        customizePic.src = mainSRC;

        colorBoxes.forEach((y) => {
            y.style.boxShadow = "unset";
        });
        element.style.boxShadow = "2px 2px 2px #000000d9";
    });
});

// Logo on TShirts
document.getElementById("fileInput").addEventListener("change", function () {

    customizeRight.style.padding = "0px 50px"
    customizeBox.style.height = "420px"
    positionSize.style.display = "flex"
    imgSelection.style.width = "100%"
    imgSelection.style.justifyContent = "space-evenly"
    colorSelection.style.gap = "20px"

    // ImgSelection.style.display = "none"
    // let file = this.files[0];
    // if (file) {
    //     let reader = new FileReader();
    //     reader.onload = function (e) {
    //         let img = document.getElementById("preview");
    //         img.src = e.target.result;
    //         img.style.display = "block";
    //     };
    //     reader.readAsDataURL(file);
    // }
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
