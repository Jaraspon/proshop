var uuid = require("uuid");
var key = uuid.v4()
console.log(key);

export const JWT = {
    exp: 60 * 60 * 24 * 7,
    key: "3e9d6cdb-60ea-4e74-8769-6c281c84d3f8"
}

export const DATABASE = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proshop',

}

