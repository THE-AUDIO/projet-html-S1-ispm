
const tapageDeText = document.querySelector('.container_h2');// VARIABLE POUR L ID
const text = tapageDeText.querySelector('h2').textContent;//variale pour la valeur de text dans l ID
tapageDeText.querySelector('h2').textContent = '';//vider le text

let i = 0;
function type() {
  if (i < text.length) {
    tapageDeText.querySelector('h2').textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
window.addEventListener('load', function() {
  type();
});