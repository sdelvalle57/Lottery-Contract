'use strict';

var routes = require('next-routes')();

routes.add('/lotteries/new/', '/index').add('/lotteries/new/:factoryAddress', '/lotteries/new').add('/lotteries/:lotteryAddress', '/lotteries/lottery');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULG1CQUM0QixBQUQ1QixVQUVLLEFBRkwsSUFFUyxBQUZULGtDQUUyQyxBQUYzQyxrQkFHSyxBQUhMLElBR1MsQUFIVCw4QkFHdUMsQUFIdkM7O0FBTUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJFOi9FdGhlcmV1bS9Xb3JsZHBheS9sb3R0ZXJ5LWNvbnRyYWN0In0=