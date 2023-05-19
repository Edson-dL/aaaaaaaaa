var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: 'IngS0ftw4r3',
        server: '13.58.134.200',
        database: 'TESTDB'
    });

    return conn;
};

module.exports = connect;