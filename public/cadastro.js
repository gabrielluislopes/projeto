function logar() {

  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;

  console.log(usuario+senha);

  if (senha.length <= 3) {
    alert('A senha deve conter mais que 3 caracteres!');
  }

  axios.post('./cadastro/', {usuario: usuario, senha: senha})
  .then(function (response) {
    if (response.status === 200) {
      console.log(response);
      window.location.href = "login";
    }
  })
  .catch(function (error){
    alert("Usuário inválido!");
    console.log(error);
  });


}
