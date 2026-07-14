// =======================================
// Получение элементов страницы
// =======================================

const buttons = document.querySelectorAll(".btn");
const modal = document.getElementById("modal");
const close = document.querySelector(".close");


// =======================================
// Открытие модального окна
// =======================================

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        modal.style.display = "flex";
    });
});


// =======================================
// Закрытие по крестику
// =======================================

close.addEventListener("click", function(){
    modal.style.display = "none";
});


// =======================================
// Закрытие при клике вне окна
// =======================================

window.addEventListener("click", function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
});