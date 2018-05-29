const routes = require('next-routes')();

routes
    .add('/lotteries/new/', '/index')
    .add('/lotteries/new/:factoryAddress', '/lotteries/new')
    .add('/lotteries/:address', '/lotteries/lottery')
    

module.exports = routes;