function pintar(element, color = 'green') {
  element.style.backgroundColor = color;
}

element = document.getElementById("ele1");
element.addEventListener("click", function() {
  pintar(element, 'yellow');
});