
async function init() {
  getUser();
}

init();
async function getUser() {

  const fechaObjetivo = new Date('2024-10-26T00:00:00');

  const contador = document.getElementById('title1');
  const imagen = document.getElementById('imagen');
  function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const tiempoRestante = fechaObjetivo - ahora;
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    contador.innerHTML = `${dias}`;
    if (dias > 1) {
      console.log("imagen", imagen)
      imagen.src = 'img/img1.jpg';
    } else if (dias <= 1) {
      console.log("imagen", imagen)
      imagen.src = 'img/img2.jpg';
    }
    if (tiempoRestante < 0) {
      clearInterval(intervalo);
      contador.innerHTML = "¡Tiempo finalizado!";
    }
  }
  const intervalo = setInterval(actualizarCuentaRegresiva, 100);
}