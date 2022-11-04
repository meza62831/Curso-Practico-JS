// h1 { color: red }
// p { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Patito <br> Feo";   
h1.innerText = "Patito <br> Feo";   //Se ejecuta la última linea redactada.

console.log(h1.getAttribute("class"));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.add('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "456";

console.log(document.createElement('img'));
const img = document.createElement('img');
img.setAttribute('src', 'https://www.regnumchristi.org/es/wp-content/uploads/2020/02/logo-rc-solo-768x480.jpg');

// pid.appendChild(img);    // Agrega el elemento después del contenido.
pid.replaceWith(img);       // Remplaza el contenido por el especificado.