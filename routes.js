const routes = require('next-routes')();

routes
    .add('/lotteries/new', 'lotteries/new')
    .add('/lotteries/:address', '/lotteries/lottery')

module.exports = routes;