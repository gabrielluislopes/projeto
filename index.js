let http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express(),
    session = require('express-session'),
    axios = require('axios'),
    jwt = require('jsonwebtoken'),
    Users = require('./model/login'),
    NewUser = require('./model/cadastro');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/buscar', (req, res) => {
  res.render('buscar');
});
app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

app.post('/login', async (req, res) => {
  const usuario = req.body.usuario;
  const senha = req.body.senha;
  const loginUser = await Users.find(usuario, senha);
  console.log(usuario, senha);
  console.log(loginUser);
  if (loginUser) {
    const token = jwt.sign({
      usuario: usuario
    }, 'segredo...');
    res.json({token: token});
    res.status(200).json({mensagem: 'Login realizado com sucesso'});
  }
  else {
    res.status(400).json({mensagem: 'usuário não encontrado'});
  }
});

app.post('/cadastro', async (req, res) => {
  const usuario = req.body.usuario;
  const senha = req.body.senha;
  const cadUser = await NewUser.find(usuario);
  console.log(usuario, senha);
  console.log(cadUser);
  if (cadUser) {
    res.status(400).json({mensagem: 'usuário inválido'});
  }
  else {
    await NewUser.insert(usuario, senha);
    res.status(200).json({mensagem: 'Cadastro realizado com sucesso'});
  }
});

http.createServer(app).listen(4000);
