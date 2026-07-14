const buttons = document.querySelectorAll(".btn");
const modal = document.getElementById("modal");
const close = document.querySelector(".close");

// Открыть окно
buttons.forEach(function(button){
    button.addEventListener("click", function(){
        modal.style.display = "flex";
    });
});

// Закрыть по крестику
close.addEventListener("click", function () {
    modal.style.display = "none";
});

// Закрыть при клике вне окна
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});