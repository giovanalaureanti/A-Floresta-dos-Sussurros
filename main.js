const avanca = document.querySelectorAll('.btn-proximo')
console.log(avanca)

avanca.forEach{buttin =>{
   button.addEventListener('click', funcion(){
       const atual =document.querySelector('.ativo')
       const proximoPasso = 'passo-' + getAttribute('data-proximo')
    
       atual.classList.remove('ativo')
       document.getElementById(proximoPasso).classList.add('ativo')
    }) 
})