const button = document.querySelector('button')
const inputEmail = document.querySelector('#email')
const inputPass = document.querySelector('#password')

button.addEventListener('click', () => {
    if (inputEmail.value === 'dragonball@test.com' && inputPass.value === '123456') {
    return Swal.fire(
        'Bem-vindo(a) ao jogo!',
        'Você está logado(a)!',
        'success'
      )
    }
    return Swal.fire({
        icon: 'error',
        title: 'Algo não está correto ):',
        text: 'Por favor insira um e-mail e senha válidos.',
    })
})