/*
var logado = false;

if(localStorage.getItem("acesso") == "true"){
  logado = true;
}

if(logado != true){
  alert("Você não está logado no site!");
  window.location.href="login.html"
}
*/
var link = document.getElementsByClassName('entrar');
function estalogado() {
  if (sessionStorage.getItem('token')) {
    alert("Você já está logado!");
  }else {
    window.location.href = "login"
  }
};
var link = document.getElementsByClassName('buscador');
function loginbuscar() {
  if (sessionStorage.getItem('token')) {
    window.location.href = "buscar"
  }else {
    window.location.href = "login"
  }
};
