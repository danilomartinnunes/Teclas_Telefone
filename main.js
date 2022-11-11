const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (indice = 0; indice < listaDeTeclas.length; indice++) {

  const tecla = listaDeTeclas[indice];

  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }
}

const lista =document.querySelectorAll('input[type=button]');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = lista [contador];

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter"){
            tecla.classList.add ("ativa");
        }
} 
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}