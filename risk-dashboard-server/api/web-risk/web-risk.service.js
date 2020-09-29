const { RiskData } = require('./web-risk.model');
const RESULTS_DENOMINATOR = 300;
const severityStrength = {
    High: 100,
    Medium: 70,
    Low: 40
};

const typeStrength = {
    vip: 100,
    AttackIndication: 80,
    ExploitableData: 60,
    BrandSecurity: 40,
    DataLeakage: 20,
    Phishing: 10
};

const riskDataTypeOrder = [
    'AttackIndication',
    'DataLeakage',
    'Phishing',
    'BrandSecurity',
    'ExploitableData',
    'vip'
];

/**
 * Get risk data
 *
 * @returns {number}
 */
async function getRiskAverage() {
    let totalType = 0;
    let totalSeverity = 0;

    const severitySortedData = await RiskData.aggregate([
        { $sort: { date: 1 } }, { $limit: RESULTS_DENOMINATOR },
        { $group: { _id: { severity: '$severity' }, sum: { $sum: 1 } } }
    ]);

    const typeSortedData = await RiskData.aggregate([
        { $sort: { date: 1 } }, { $limit: RESULTS_DENOMINATOR },
        { $group: { _id: { type: '$type' }, sum: { $sum: 1 } } },
    ]);

    totalSeverity = severitySortedData.reduce((acc, item) => acc += severityStrength[item._id.severity] * item.sum, 0);
    totalSeverity /= RESULTS_DENOMINATOR;

    totalType = typeSortedData.reduce((acc, item) => acc += typeStrength[item._id.type] * item.sum, 0);
    totalType /= RESULTS_DENOMINATOR;

    // calculate strengths avarage
    const totalStrength = (totalType + totalSeverity) / 2;

    // calculate risk meter
    const totalPercentages = Math.round(totalStrength / RESULTS_DENOMINATOR * 100);

    return totalPercentages;
}

/**
 * Set dashboard data order
 *
 * @returns {RiskData}
 */

function setOrderToDashBoardDataValues(data) {
    data.clearTypes.forEach(webRiskType => {
        webRiskType.order = riskDataTypeOrder.indexOf(webRiskType._id.type);
    });
    data.darkTypes.forEach(webRiskType => {
        webRiskType.order = riskDataTypeOrder.indexOf(webRiskType._id.type);
    });
    return {
        webRisks: [
            {
                title: 'CLEAR WEB',
                'web-risk-order': 0,
                risks: [
                    {
                        type: 'risk-types',
                        'risk-order': 0,
                        payload: data.clearTypes
                    }, {
                        type: 'risk-severity',
                        'risk-order': 1,
                        payload: data.clearSeverities
                    }, {
                        type: 'risk-source',
                        'risk-order': 2,
                        payload: data.clearsSources
                    }
                ]
            },
            {
                title: 'DARK WEB',
                'web-risk-order': 1,
                risks: [
                    {
                        type: 'risk-types',
                        'risk-order': 0,
                        payload: data.darkTypes
                    }, {
                        type: 'risk-severity',
                        'risk-order': 1,
                        payload: data.darkSeverities
                    }, {
                        type: 'risk-source',
                        'risk-order': 2,
                        payload: data.darkSources
                    }
                ]
            }
        ]
    };
}

/**
 * Get dashboard data
 *
 * @returns {number}
 */
async function getDashboardData() {
    const [clearWebCount, darkWebCount] = await Promise.all([
        RiskData.count({ networkType: 'ClearWeb' }),
        RiskData.count({ networkType: 'DarkWeb' })
    ]);

    const storedDashboardData = await RiskData.aggregate([
        {
            $facet: {
                clearTypes: [
                    { $match: { networkType: 'ClearWeb' } },
                    { $group: { _id: { type: '$type' }, sum: { $sum: 1 } } }
                ],
                clearSeverities: [
                    { $match: { networkType: 'ClearWeb' } },
                    { $group: { _id: { severity: '$severity' }, sum: { $sum: 1 } } }
                ],
                clearsSources: [
                    { $match: { networkType: 'ClearWeb', sourceType: { $nin: ['HackingForums', 'BlackMarkets'] } } },
                    { $group: { _id: { sourceType: '$sourceType' }, sum: { $sum: 1 } } },
                ],
                darkTypes: [
                    { $match: { networkType: 'DarkWeb' } },
                    { $group: { _id: { type: '$type' }, sum: { $sum: 1 } } }
                ],
                darkSeverities: [
                    { $match: { networkType: 'DarkWeb' } },
                    { $group: { _id: { severity: '$severity' }, sum: { $sum: 1 } } }
                ],
                darkSources: [
                    { $match: { networkType: 'DarkWeb', sourceType: { $nin: ['ApplicationStores', 'SocialMedia'] } } },
                    { $group: { _id: { sourceType: '$sourceType' }, sum: { $sum: 1 } } }
                ],
            }
        }]);

    // Calculate percentage for sourceType
    Object.keys(storedDashboardData[0].clearsSources).forEach(key => {
        storedDashboardData[0].clearsSources[key].sum = parseInt(((100 * storedDashboardData[0].clearsSources[key].sum) / clearWebCount).toFixed(3));
    });

    Object.keys(storedDashboardData[0].darkSources).forEach(key => {
        storedDashboardData[0].darkSources[key].sum = parseInt(((100 * storedDashboardData[0].darkSources[key].sum) / darkWebCount).toFixed(3));
    });
    return setOrderToDashBoardDataValues(storedDashboardData[0]);
}

module.exports = {
    getDashboardData,
    getRiskAverage,
    severityStrength,
    typeStrength
};
