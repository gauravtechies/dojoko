require('dotenv').config();
const http = require('http');
const debug = require('debug')('api:server');
const createError = require('http-errors');
const express = require('express');
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const logger = require('pino')();

function reqSerializer(req) {
  return {
    method: req.method,
    url: req.url,
    body: req.body || {},
  };
}


const app = express();
app.use(cors())
let apiVersion = null;

try {
  // eslint-disable-next-line global-require
  apiVersion = require('./package.json').version;
} catch (e) {
  apiVersion = 'Unavailable';
}
app.use(bodyParser.json());
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind =
    typeof addr === 'string' ? `pipe  ${addr}` : `port  ${addr.port}`;
  debug(`Listening on ${bind}`);
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
const db = require('./models');
const v1Routes = require('./routes/v1')(db, logger);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(helmet());
app.use((req, res, next) => {
  logger.info(reqSerializer(req));
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', (req, res, next) => {
  res.header('X-Api-Server-Version', apiVersion);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With,Content-Type,Origin,Accept'
  );
  res.header(
    'Access-Control-Expose-Headers',
    'X-Result-Page-Limit, X-Result-Page-Size, X-Result-Start-Offset, X-Result-Total-Count, X-Result-Job-Id'
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/healthcheck', (req, res) => {
  res.send('👍');
});

app.use('/v1', v1Routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  logger.error(err);
  // render the error page
  res.status(err.status || 500);
  res.json({ errors: err.message });
});

module.exports = app;
