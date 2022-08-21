const jsonServer = require('json-server');
const server = jsonServer.create();

const router = jsonServer.router('./db.json');
const rbacSetting = require('./routes.json');
const auth = require('json-server-auth')
const rule = auth.rewriter(rbacSetting);

const port = process.env.PORT || 5000;
server.db = router.db

server.use(jsonServer.defaults());
server.use(rule);
server.use(auth);
server.use(router);
console.log(port);
server.listen(port);