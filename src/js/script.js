
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


jQuery('.contacts__button').click( function() {
    var form = jQuery(this).closest('form');
    
    if ( form.valid() ) {
        form.css('opacity','.5');
        var actUrl = form.attr('action');

        jQuery.ajax({
            url: actUrl,
            type: 'post',
            dataType: 'html',
            data: form.serialize(),
            success: function(data) {
                form.html(data);
                form.css('opacity','1');
                form.find('.status').html('done');
                //$('#myModal').modal('show') // для бутстрапа
            },
            error:	 function() {
                 form.find('.status').html('server error');
            }
        });
    }
});

