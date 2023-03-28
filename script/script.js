
const tapageDeText = document.querySelector('.introduction');// VARIABLE POUR L ID
const text = tapageDeText.querySelector('h1').textContent;//variale pour la valeur de text dans l ID
tapageDeText.querySelector('h1').textContent = '';//vider le text

let i = 0;
function type() {
  if (i < text.length) {
    tapageDeText.querySelector('h1').textContent += text.charAt(i);
    i++;
    setTimeout(type, 150);
  }
}
window.addEventListener('load', function() {
  type();
});

