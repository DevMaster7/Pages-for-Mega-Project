let bubbleCon = document.querySelector(".left")
let showPass = document.querySelectorAll(".eye")
// console.log(showPass)

function createBubble() {
    let bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${Math.random() * 100}%`;
    let size = 50 + Math.random() * 20;
    bubble.style.width = bubble.style.height = `${size}px`;
    bubble.style.animationDuration = `${10 + Math.random() * 6}s`;
    bubbleCon.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

setInterval(createBubble, 1400);


showPass.forEach((e)=>{
    e.addEventListener("click", () => {
        let passCon = e.previousElementSibling;
        if (passCon.type === "password") {
            passCon.type = "text"
            e.classList.remove("fa-eye")
            e.classList.add("fa-eye-slash")
        }
        else {
            passCon.type = "password"
            e.classList.remove("fa-eye-slash")
            e.classList.add("fa-eye")
        }
    })
})

$(document).ready(function() {
    $('#citySelect').select2({
      placeholder: "Search or select a city",
    });
  });