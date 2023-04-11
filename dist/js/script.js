
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');

});

const counters = document.querySelectorAll('.skills__ratings-procent'),
      lines = document.querySelectorAll('.skills__ratings-devider span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});




$(document).ready(function(){
    $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
        e.preventDefault();
        var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
            type: 'POST', //Метод отправки
            url: 'send.php', //путь до php фаила отправителя
            data: form_data,
                    success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                    alert('все ок'); // пoкaжeм eё тeкст
                    }
            });
    });
});    