const MongoClient = require('mongodb').MongoClient;

module.exports = class Users{
  static async find(usuario, senha){
    const conn = await MongoClient.connect('mongodb+srv://gabriellopes:senhadesegurança@cluster0.cp148.mongodb.net/Projetofinal3?retryWrites=true&w=majority');
    const db = conn.db();
    let verif = await db.collection('users').find({ usuario, senha}).toArray();
    if (verif.length != 0) {
      return verif;
    }
  }
}
