$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '00 00000-0000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Digite apenas números'
    })

    $('#cep').mask('00000-000', {
        placeholder: 'Digite apenas números'
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
            cpf: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor insira seu nome',
            telefone: 'Por favor insira seu telefone',
            email: 'Por favor insira seu e-mail',
            cpf: 'Por favor insira seu CPF'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let numeroCamposIncorretos = validador.numberOfInvalids();
            if (numeroCamposIncorretos == 1) {
                alert(`Existem ${numeroCamposIncorretos} campo incorreto`)
            } else if (numeroCamposIncorretos > 1) {
                alert(`Existem ${numeroCamposIncorretos} campos incorretos`)
            }
        }
    })
});