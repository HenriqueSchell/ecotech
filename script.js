let botao = document.querySelector('.btn-menu')
let menu = document.querySelector('.menu')

botao.addEventListener('click', () => {
    menu.classList.toggle('ativo')
})