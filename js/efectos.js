$(document).ready(function(){

        //efecto menu
    $('.menu a').each(function(index, elemtento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });
    ///efecto del titulo
    if( $(window).width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    ///efecto del scroll

    var acercaDe = $('#acerca-de').offset().top,
        menu= $('#platillos').offset().top,
        galeria= $('#galeria').offset().top,
        ubicacion= $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({

            scrollTop: 450
        })
    });
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({

            scrollTop: menu
        })
    });
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({

            scrollTop: galeria
        })
    });
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({

            scrollTop: ubicacion
        })
    });



    
});