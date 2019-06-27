
//Задача 2
const http = require('http'); // подключение модуля
http.createServer((request, response) => { // вызов метода создания http сервера
console.log("HTTP works!");
response.writeHead(404, {'Content-Type':'text/html'});
response.write('<h1>Error</h1>');
response.end();
}).listen(8080);