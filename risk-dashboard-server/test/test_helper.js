const logger = require('../lib/log');

const mockData = [{
    date: new Date(),
    severity: 'High',
    type: 'DataLeakage',
    sourceType: 'BlackMarkets',
    networkType: 'ClearWeb'
}];

const handleError = (message, error) => {
    logger.debug(message, error);
};

module.exports = {
    mockData,
    handleError
};
