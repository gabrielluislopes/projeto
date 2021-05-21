const MongoClient = require('mongodb').MongoClient;

module.exports = class Users{
  static async find(usuario, senha){
    const conn = await MongoClient.connect('mongodb://localhost:27017/projeto3');
    const db = conn.db();
    let verif = await db.collection('users').find({ usuario, senha}).toArray();
    if (verif.length != 0) {
      return verif;
    }
  }
}
