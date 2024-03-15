import app from './index';
import ENV_VARIABLES from './configs/env_variables';
import logger from './utils/loggers/customLogger';

app.listen(ENV_VARIABLES.PORT, () => {
  logger.info('Server running at port ' + String(ENV_VARIABLES.PORT));
});
