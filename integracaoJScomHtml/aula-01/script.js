const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let fomrEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const descricaoDeposito = document.getElementById('descricao');
    const mensagemSucesso = `Depósito realizado com Sucesso! - Valor depositado R$  <b> ${valorDeposito.value}</b> em nome de <b>${nomeBeneficiario.value}</b> número da conta - <b>${numeroContaBeneficiario.value}</b> - `;

    fomrEValido = validaNome(nomeBeneficiario.value);
    if (fomrEValido) {
        const containerMensasgemSucesso = document.querySelector('.menssage-sucess');
        containerMensasgemSucesso.innerHTML = mensagemSucesso;
        containerMensasgemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        alert('O nome não está completo');

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    }
});
