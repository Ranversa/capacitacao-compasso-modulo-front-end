$(function () {
    var $txt_pesquisar = document.getElementById('pesquisar');
    var $div_sugestoes = document.getElementById('sugestoes');
    var $div_box = document.getElementById('box');
    var $txt_mail = document.getElementById('txt_mail');

    //mostra e esconde os resultados da pesquisa
    $txt_pesquisar.onfocus = function () {
        console.log('foco no campo');
        $div_sugestoes.removeClass('hide');
    };

    $txt_pesquisar.onblur = function () {
        console.log('saiu do campo');
        $div_sugestoes.addClass('hide');
        $div_box.addClass('hide');
        $('#pesquisar').val('');
    };

    $('#pesquisar').bind('keydown', function (event) {
        console.log('digitou');
        $div_sugestoes.addClass('hide');
        $div_box.removeClass('hide');
    });

    //validar e-mail
    $('#txt_cep').bind('keydown', function (event) {
        event.preventDefault();
        if ($txt_mail.val().indexOf("@") >= 1) {
            alert('Email valido:' + $txt_mail.val);
            $('#txt_mail').val('');
        } else {
            alert('e-mail invalido');
        }
    });


    // plugin para rotação de slides
    $(document).ready(function () {
        $('.main-slides').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    });


});