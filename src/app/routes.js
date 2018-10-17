const routes = require('next-routes')();

routes
    .add('/lotteries/new/', '/index')
    .add('/lotteries/new/:factoryAddress', '/lotteries/new')
    .add('/lotteries/archive/:factoryAddress', '/lotteries/archive')
    .add('/lotteries/:lotteryAddress', '/lotteries/lottery')
    

module.exports = routes;