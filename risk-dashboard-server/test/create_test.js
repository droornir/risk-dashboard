const assert = require('assert');
const { describe, it } = require('mocha');

const mongoose = require('../lib/db');
const { getDashboardData } = require('../api/web-risk/web-risk.service');
const { handleError } = require('./test_helper');

const WEB_RISKS_NAME_MAP = {
    clear: 0,
    dark: 1
};
const WEB_RISKS_TYPES_MAP = {
    riskTypes: 0,
    riskSeverities: 1,
    riskSources: 2
};
describe('RiskData', () => {
    beforeEach((done) => {
        mongoose.connect().then(res => {
            done();
        }).catch(err => {
            handleError('Faild at "beforeEach"', err);
        });
    });

    afterEach((done) => {
        mongoose.disconnect().then(() => {
            done();
        }).catch(err => {
            handleError('Faild at "afterEach"', err);
        });
    });
    it('should initiate mongoose', (done) => {
        done();
    });

    it('should get dashboard data', (done) => {
        getDashboardData().then(data => {
            done();
        }).catch(err => {
            handleError('Faild at "get dashboard data"', err);
        });
    });

    it('should get dashboard data titles', (done) => {
        getDashboardData().then(data => {
            assert.strictEqual(data.webRisks[WEB_RISKS_NAME_MAP.clear].title, 'CLEAR WEB');
            assert.strictEqual(data.webRisks[WEB_RISKS_NAME_MAP.dark].title, 'DARK WEB');
            done();
        }).catch(err => {
            handleError('Faild at "get dashboard data titles"', err);
        });
    });

    it('should get dashboard data display order', (done) => {
        getDashboardData().then(data => {
            assert.strictEqual(data.webRisks[WEB_RISKS_NAME_MAP.clear]['web-risk-order'], 0);
            assert.strictEqual(data.webRisks[WEB_RISKS_NAME_MAP.dark]['web-risk-order'], 1);
            done();
        }).catch(err => {
            handleError('Faild at "get dashboard data display order"', err);
        });
    });

    it('should get dashboard data risks values', (done) => {
        getDashboardData().then(data => {
            const clearRisks = data.webRisks[WEB_RISKS_NAME_MAP.clear].risks;
            const darkRisks = data.webRisks[WEB_RISKS_NAME_MAP.dark].risks;
            assert(clearRisks.length, 'clearRisks');
            assert(darkRisks.length, 'darkRisks');
            done();
        }).catch(err => {
            handleError('Faild at "get dashboard data risks values"', err);
        });
    });

    it('should get dashboard data risk types values', (done) => {
        getDashboardData().then(data => {
            const clearRisksTypes = data.webRisks[WEB_RISKS_NAME_MAP.clear].risks[WEB_RISKS_TYPES_MAP.riskTypes];
            const clearRisksSeverities = data.webRisks[WEB_RISKS_NAME_MAP.clear].risks[WEB_RISKS_TYPES_MAP.riskSeverities];
            const clearRisksSources = data.webRisks[WEB_RISKS_NAME_MAP.clear].risks[WEB_RISKS_TYPES_MAP.riskSources];
            assert.strictEqual(clearRisksTypes.type, 'risk-types');
            assert.strictEqual(clearRisksTypes['risk-order'], 0);
            assert.strictEqual(clearRisksTypes.payload.length, 1);
            assert.strictEqual(clearRisksSeverities.type, 'risk-severity');
            // assert.strictEqual(clearRisksSeverities['risk-order'].toString(), '2');
            // assert.strictEqual(clearRisksSeverities.payload.length.toString(), '2');
            // assert.strictEqual(clearRisksSources.type, 'risk-source');
            // assert.strictEqual(clearRisksSources['risk-order'].toString(), '2');
            // assert.strictEqual(clearRisksSources.payload.length.toString(), '3');
            done();
        }).catch(err => {
            handleError('Faild at "get dashboard data risk types values"', err);
        });
    });
});
