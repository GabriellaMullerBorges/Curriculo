const frases = document.querySelectorAll('.frase');
let index = 0;

function typeNextFrase() {
  const fraseAtual = frases[index];
  const textoFrase = fraseAtual.textContent;
  let count = 0;

  fraseAtual.textContent = '';
  ocultarFrases(); 
  fraseAtual.style.display = 'flex';

  function type() {
    if (count < textoFrase.length) {
      fraseAtual.textContent += textoFrase.charAt(count);
      count++;
      setTimeout(type, 50); 
    } else {
      index++;
      if (index < frases.length) {
        setTimeout(typeNextFrase, 1000); 
      } else {
        index = 0;
        setTimeout(typeNextFrase, 5000); 
      }
    }
  }

  type();
}

function ocultarFrases() {
  frases.forEach((frase) => {
    frase.style.display = 'none';
  });
}

typeNextFrase();
