var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;


var userService = require('../Component/auth/userService');

passport.use(new LocalStrategy(
    async function(username, password, done) {
        const user = await userService.findByUsername(username);
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (!await userService.validPassword(password,user))
            return done(null, false, { message: 'Incorrect password.' });

            return done(null, user);

    },
));

passport.serializeUser(function(user, done) {
    done(null, {username : user.username, lastname:user.lastname,firstname : user.firstname, phone : user.mobilephone});
});

passport.deserializeUser(async function(user, done) {
    done(null, user);
});


module.exports = passport