const presentBtn = $('.present__btn');
const modalClose = $('.modal-order__close');
const modalOrder = $('.modal-order');

presentBtn.click(function() {
    modalOrder.show(300);
});

modalClose.click(function() {
    modalOrder.hide(300);
});

modalOrder.click(function({target}) {
    if(target === modalOrder[0]){
        modalOrder.hide(300);
    }
});

const foo = function() {
    $(this).slideUp(300);
}

$('.what-building__text').on('click', foo);

const div = $(`
    <div class = "hello-world">
        <h1 class = "title">ПРИВЕТ ВСЕМ</h1>
    </div>
    `);

$('body').append(div);

const modalForm = $('.modal-order__form');
const modalTitle = $('.modal-order__title');

modalForm.submit(function(event) {
    event.preventDefault();
    // $.post('https://jsonplaceholder.typicode.com/todos', $(this).serialize(), function(data, status) {
    //  console.log(data,status);   
    // })
    // .then(
    //     function(data,status){
    //         console.log(data,status);
    //         return data;
    //     }
    // )
    // .catch(
    //     function(err) {
    //         console.log(err.status);
    //     }
    // );
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
            modalTitle.text(`Ваша заявка номер ${data.id} принята`);
            modalForm.slideUp(300);
        },
        error() {
            modalTitle.text('Что-то не так');
        }
    })
})

const menuBurger = $('.header__burger');

menuBurger.on('click', function () {
    $('.navigation').animate({
        left: 0,
    },500,
    function() {
        $('.navigation__close').animate({
            opacity: 1,
        },400)
        });
    });

$('.navigation__close').on('click', function() {
    $('.navigation').animate({
        left: -400,
    },500)
});
const navigation = $('.navigation');

$('body').click(function({target}) {
    if(target.closest('.present__container')){
        navigation.animate({
            left: -400,
        },500)
    }
})