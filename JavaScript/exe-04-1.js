$(function () {
    var $txt_cep = $('#txt_cep');

    $txt_cep.mask("99999-999")

    $('#txt_cep').bind('keydown', function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            if (($txt_cep.val().length != 9)) {
                alert("cep precisa ter 8 caracteres");
                $txt_cep.val("");
                return false;
            }

            $txt_cep.next('span').removeClass('hide');

            var $option = {
                "url": "https://viacep.com.br/ws/" + $txt_cep.val().replace("-","") + "/json/"
            };
            $.ajax($option).done(function ($data) {
               // console.log($data);
               // console.log($txt_cep.val().replace("-",""));
                $('#txt_logradouro').val($data.logradouro);
                $('#txt_bairro').val($data.bairro);
                $('#txt_localidade').val($data.localidade);
                $('#txt_uf').val($data.uf);
            }).always(function () {
                $txt_cep.next('span').addClass('hide');
            });
        }
    });
});