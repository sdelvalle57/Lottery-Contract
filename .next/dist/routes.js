'use strict';

var routes = require('next-routes')();

routes.add('/lotteries/new', 'lotteries/new').add('/lotteries/:address', '/lotteries/lottery').add('index', '/').add('/:address', '/');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGtCQUMyQixBQUQzQixpQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFZ0MsQUFGaEMsc0JBR0ssQUFITCxJQUdTLEFBSFQsU0FHa0IsQUFIbEIsS0FJSyxBQUpMLElBSVMsQUFKVCxhQUlzQixBQUp0Qjs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkU6L0V0aGVyZXVtL1dvcmxkcGF5L2xvdHRlcnktY29udHJhY3QifQ==