$(function () {
    //var $txt = document.getElementById('txt_nome');
    //var txt = $('#txt_nome');

    //txt.val('novo valor do campo')

    /*setInterval(function(){
      if(txt.is(':visible')){
txt.hide('slow')
        }else{
txt.show('slow');
        } 
     txt.toggle(); 
    },2000);*/
    var $div_produtos = $('#produtos');
    var $div_frm_cadastro = $('#div_frm_cadastro');
    var $txt_nome_produto = $div_frm_cadastro.find('#txt_nome');
    var $txt_preco_produto = $div_frm_cadastro.find('#txt_preco');
    var $div_msg_sucesso = $('.msg-sucesso');

    var $ar_produtos = [
        { "nome": "produto 01", "valor": 10.5 },
        { "nome": "produto 02", "valor": 19.5 },
        { "nome": "produto 03", "valor": 21.5 }
    ];

    function renderizaProdutos() {

        $div_produtos.empty();

        $.each($ar_produtos, function(key, obj) {
            //console.log(obj.nome);
            var $div= $("<div>");
            var $h1= $("<h1>");
            var $p= $("<p>")

            //$div.html(obj.nome);
            $h1.html(obj.nome);
            $p.html(obj.valor);
            $div.append($h1);
            $div.append($p);
            $div_produtos.append($div);
        });
    }

    $div_frm_cadastro.find('.js_frm_cadastro').submit(function(e){
        e.preventDefault();
        
        $ar_produtos.push({
            "nome" : $txt_nome_produto.val(),
            "valor" : $txt_preco_produto.val()
        });

        renderizaProdutos();
        $(this)[0].reset(); // limpa todo formulario
        $div_msg_sucesso.removeClass('hide');

        setTimeout(function(){
            $div_msg_sucesso.addClass('hide')
        },5000);

       location.href="#txt_preco";
    });
    renderizaProdutos();
});