const form = document.getElementById('form');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    let numeroA = document.getElementById('numero-01');
    let numeroB = document.getElementById('numero-02');
    let menssagemSucesso = `Parabéns formulário enviado com sucesso`;
    let menssagemErro = `O Input <b>B</b> precisa ser maior que o Input <b>A</b>`;
    let containerMenssagemSucesso = document.querySelector('.success-message');
    let containerMenssagemErro = document.querySelector('.error-message')

    if (numeroB.value > numeroA.value) {
        document.querySelector('.success-message').innerHTML = menssagemSucesso;
        containerMenssagemSucesso.style.display = 'block';
        containerMenssagemErro.style.display = 'none';
        numeroA.value = '';
        numeroB.value = '';
    } else {
        document.querySelector('.error-message').innerHTML = menssagemErro;
        containerMenssagemErro.style.display = 'block';
        containerMenssagemSucesso.style.display = 'none';
    }
})


