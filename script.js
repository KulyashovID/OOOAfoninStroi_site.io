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
        const cardNumber = button.dataset.card;
        document.getElementById("modal-title").textContent =
        cards[cardNumber].title;
        document.getElementById("modal-text").textContent =
        cards[cardNumber].text;
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

// =======================================
// Тексты для карточек
// =======================================

const cards = {

    1:{
        title:"О компании",
        text:"Информация о компании АфонинСтрой."
    },

    2:{
        title:"Строительство",
        text:"Описание строительных работ."
    },

    3:{
        title:"Инженерные решения",
        text:"Описание инженерных решений."
    },

    4:{
        title:"Контакты",
        text:"Дополнительная информация."
    }

};