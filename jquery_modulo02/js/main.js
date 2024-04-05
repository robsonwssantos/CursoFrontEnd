$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '00 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculoInteresse: {
                required:false
            },
            menssagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira seu nome',
            telefone: 'Por favor insira seu telefone',
            email: 'Por favor insira seu e-mail',
            menssagem: 'Por favor digite uma menssagem'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let numeroCamposIncorretos = validador.numberOfInvalids();
            if (numeroCamposIncorretos) {
                alert(`Existem ${numeroCamposIncorretos} campos incorretos`);
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        let destino = $('#contato');

        const nomeVeiculo = ($(this).parent().find('h3').text());

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});