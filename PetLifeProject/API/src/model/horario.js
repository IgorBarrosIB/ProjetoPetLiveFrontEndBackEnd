class Horario {
  constructor(horario){
    this.id = horario.id;
    this.hora = horario.hora;
    this.diaSemana = horario.dia_semana;
    this.dispensadoDia = horario.dispensado_dia;
  }
}

exports.getAll = function () {
  return new Promise(resolve => {
    const horarios = [];
    let sql = "SELECT * FROM horario";
    let i = 0;
    global.conn.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      result.forEach(element => {
        horarios[i] = new Horario(result[i]);
        i++;
      });
      resolve(horarios);
    });
  });
};

exports.findById = function (id) {
  return new Promise(resolve => {
    let sql = "SELECT * FROM horario WHERE id = " + id;
    global.conn.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      let horario = new Horario(result[0]);
      resolve(horario);
    });
  });
};

exports.create = function (horario) {
  return new Promise(resolve => {
    let sql = "INSERT INTO horario VALUES (null,'" + horario.hora + "','" + horario.diaSemana + "', false)" ;
    global.conn.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      resolve(result);
    });
  });
};

exports.remove = function (id) {
  return new Promise(resolve => {
    let sql = "DELETE FROM horario WHERE id = " + id ;
    global.conn.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      resolve(result);
    });
  });
};

exports.update = function (horario) {
  return new Promise(resolve => {
    let sql = "UPDATE horario SET hora = '" + horario.hora + "', dia_semana = '" + horario.diaSemana + "', dispensado_dia = false WHERE id = " + horario.id ;
    global.conn.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      resolve(result);
    });
  });
};