
function logar() {

  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;

  console.log(usuario+senha);

axios.post('./login/', { usuario: usuario , senha: senha})
  .then(function (response) {
    if (response.status == 200) {
      token = response.data.token;
      sessionStorage.setItem('token', token);
      console.log(response);
      window.location.href = "/";
    }
  })
  .catch(function (error){
      alert("Usuário ou senha inválidos!");
      console.log(error);
  });


}
