const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (event) => console.log('baaam', event.id, event.url))
logger.log('message');
