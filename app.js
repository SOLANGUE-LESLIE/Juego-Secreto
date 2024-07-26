let numeroSecreto = 0;
let intentos =0;
let numeromaximodenuevojuego=10;
let listaNumeroSorteados = [];

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

 function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    
   if(numeroDeUsuario === numeroSecreto){
      asignarTextoElemento('p',`Acertastes el numero en ${intentos} ${(intentos ===1) ? 'vez':'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');

   }else{
    if(numeroDeUsuario >numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
    }else{
        asignarTextoElemento('p','El numero secreto es mayor');
    }
   }
    
   intentos++;
   limpiarcaja();
}

function limpiarcaja(){
   let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value='';
}
function condicionesIniciales(){
   asignarTextoElemento('h1','Juego del numero secreto ');
   asignarTextoElemento('p',`Indica un numero del 1 al 10 `);
   numeroSecreto = generarNumeroSecreto();
   intentos =1;
}

function reiniciarJuego(){
   //Limpiar Caja
   limpiarcaja();
   //Indicar mensaje de intervalo de numeros 
   //Generar el numero aleatorio
   //Inicializar el numero ointentos
   condicionesIniciales();
   //desabilitar el boton de nuevo Juego
   document.querySelector('#reiniciar').setAttribute('disabled','true');
  }

condicionesIniciales();

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeromaximodenuevojuego)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    if(listaNumeroSorteados.length == numeromaximodenuevojuego){
      asignarTextoElemento('p','ya se sortearon todos los numeros posibles');

   }else{

      if(listaNumeroSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();

      }else{
      listaNumeroSorteados.push(numeroGenerado);
      return numeroGenerado;
      }

   }
}


 
 asignarTextoElemento('h1','Juego del numero secreto ');
 asignarTextoElemento('p',`Indica un numero del 1 al ${numeromaximodenuevojuego} `);


  