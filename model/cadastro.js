const MongoClient = require('mongodb').MongoClient;

module.exports = class NewUser{
  static async insert (usuario, senha){
    const conn = await MongoClient.connect('mongodb+srv://gabriellopes:senhadesegurança@cluster0.cp148.mongodb.net/Projetofinal3?retryWrites=true&w=majority');
    const db = conn.db();
    //let vetorUsuarios = await db.collection('users').find({ usuario }).toArray();
    //console.log(vetorUsuarios);
    //if (vetorUsuarios.length === 0) {
      await db.collection('users').insertOne({ usuario: usuario, senha: senha});
      conn.close();
    //}
  }
  static async find(usuario){
    const conn = await MongoClient.connect('mongodb+srv://gabriellopes:senhadesegurança@cluster0.cp148.mongodb.net/Projetofinal3?retryWrites=true&w=majority');
    const db = conn.db();
    let verif = await db.collection('users').find({ usuario }).toArray();
    if (verif.length != 0) {
      return verif;
    }
  }
}
