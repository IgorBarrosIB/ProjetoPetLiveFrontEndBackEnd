function connect(){
  if(global.conn && global.connection.state !== 'disconnected')
      return global.conn;

  const mysql = require("mysql2");
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "petlifedb"
  });

  console.log("Conectou no MySQL!");
  global.conn = connection;
  return connection;
}

connect();

module.exports = {
  
}