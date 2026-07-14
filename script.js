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
        document.getElementById("modal-text").innerHTML =
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
        text:"."
    },

    2:{
        title:"Понимаю... не всё сразу",
        text:"Да, Илья, не душный он... Он мало проветриваемый, он слабо вентилируемый, но не душный он."
    },

    3: {
    title: "Инженерные решения",
    text: `*даня делает организацию строительства*<br>
Даня: давай найдём хороший шаблон и начнём делать<br>
*ищет шаблон и не находит*<br>
Даня: давай найдём пример хотя бы адекватный в правильном порядке<br>
*находит какой-то хуня пример*<br>
Даня: Давай переведём его из PDF в Word и я буду в нём работать<br>
*ничего не получается адекватно оформить*<br>
Даня: А я же могу просто спиздить ПОС со своего спиженного диплома?<br>
*прошло время*<br>
Даня: Я всё же попрошу просто готовый ППР`
},

    4:{
        title:"Контакты",
        text:"Я же вчера сказал: «завтра»! Я не отказываюсь от своих слов. Завтра будет!"
    }

};