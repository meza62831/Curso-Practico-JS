const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// Usar el útlimo botón dentro de un forms para realizar las acciones buscadas.
// *****
// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event){
//     // console.log({event});
//     event.preventDefault();
//     const Res_Suma = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Resultado = " + Res_Suma;
// }
// *****

// Usar el botón indicado en la programación para realizar las acciones buscadas.
// Esto e logra cambiando la asignación en type al btn, para que el forms no lo asigne.
btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    // console.log({event});
    // event.preventDefault();
    const Res_Suma = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado = " + Res_Suma;
}

