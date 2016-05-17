const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false } );

module.exports = function(app) {
    app.post('/signup', Authentication.signup);
}