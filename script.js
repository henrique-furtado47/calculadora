function numero(num) {
  var numero = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = numero + num;
}
function operador(op) {
  var numero = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = numero + op;
}
function limpar() {
  document.getElementById("tela").innerHTML = "";
}
function backspace() {
  var numero = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = numero.substring(
    0,
    numero.length - 1
  );
}
function calcular() {
  var resultado = document.getElementById("tela").innerHTML;
  if (resultado) {
    document.getElementById("tela").innerHTML = eval(resultado);
  } else {
    document.getElementById("tela").innerHTML = "Erro";
  }
}
function toggleDarkMode() {
  if (document.body.classList.contains("dark-mode")) {
    document.getElementById("btn").innerHTML = "Dark Mode";
    document.body.classList.remove("dark-mode");
  } else {
    document.getElementById("btn").innerHTML = "Light Mode";
    document.body.classList.add("dark-mode");
  }
}
