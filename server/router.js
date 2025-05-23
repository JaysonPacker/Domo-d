const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/getDomos', mid.requiresLogin, controllers.Domo.getDomos);
  app.get(
    '/getPublicDomos',
    mid.requiresLogin,
    controllers.Domo.getPublicDomos,
  );
  app.get('/public', mid.requiresLogin, controllers.Domo.publicPage);
  app.get(
    '/login',
    mid.requiresSecure,
    mid.requiresLogout,
    controllers.Account.loginPage,
  );
  app.post(
    '/login',
    mid.requiresSecure,
    mid.requiresLogout,
    controllers.Account.login,
  );

  app.post(
    '/signup',
    mid.requiresSecure,
    mid.requiresLogout,
    controllers.Account.signup,
  );

  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  app.get('/maker', mid.requiresLogin, controllers.Domo.makerPage);
  app.post('/maker', mid.requiresLogin, controllers.Domo.makeDomo); // Handle Domo creation

  app.get(
    '/',
    mid.requiresSecure,
    mid.requiresLogout,
    controllers.Account.loginPage,
  ); // Redirect to login page on startup
};

module.exports = router;
