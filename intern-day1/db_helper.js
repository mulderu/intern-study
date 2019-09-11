var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "mulder",
  password: "1111",
  database: "mysql"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("conn success, connected as id " + connection.threadId);
  connection.query("SELECT 1 + 1 AS solution", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
  });
});

var helper = {
  insertQuery: function(vo, cb) {
    connection.query(
      "insert into demo01 values (?, ?)",
      [vo.name, vo.age],
      function(error, results, fields) {
        if (error) throw error;
        console.log(results);
        cb();
      }
    );
  },

  deleteQuery: function(name, cb) {
    connection.query("delete from demo01 where name = ?", [name], function(
      error,
      results,
      fields
    ) {
      if (error) throw error;
      console.log(results);
      cb();
    });
  }
};

module.exports = {
  insertData: function(vo, cb) {
    helper.insertQuery(vo, function(err) {
      cb("OK");
    });
  },
  deleteByName: function(name, cb) {
    helper.deleteQuery(name, function(err) {
      cb("OK");
    });
  }
};
