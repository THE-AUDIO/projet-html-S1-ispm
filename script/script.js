
const typingText = document.querySelector('.typing-text');
const text = typingText.querySelector('h1').textContent;
typingText.querySelector('h1').textContent = '';

let i = 0;
function type() {
  if (i < text.length) {
    typingText.querySelector('h1').textContent += text.charAt(i);
    i++;
    setTimeout(type, 150);
  }
}
window.addEventListener('load', function() {
  type();
});
