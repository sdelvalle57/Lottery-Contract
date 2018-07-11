'use strict';

var routes = require('next-routes')();

routes.add('/lotteries/new/', '/index').add('/lotteries/new/:factoryAddress', '/lotteries/new').add('/lotteries/:lotteryAddress', '/lotteries/lottery');

module.exports = routes;