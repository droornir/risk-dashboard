import { RiskData } from '../../models/risk-data.model';

export const mockWebRiskJSON = {
    webRisks: [
        {
            title: 'CLEAR WEB',
            order: 0,
            risks: [
                {
                    type: 'risk-types',
                    order: 0,
                    payload: [
                        {
                            _id: { type: 'vip' },
                            sum: 58,
                            order: 5
                        }, {
                            _id: { type: 'Phishing' },
                            sum: 100,
                            order: 2
                        }, {
                            _id: { type: 'ExploitableData' },
                            sum: 8,
                            order: 4
                        }, {
                            _id: { type: 'AttackIndication' },
                            sum: 48,
                            order: 0
                        }, {
                            _id: { type: 'DataLeakage' },
                            sum: 117,
                            order: 1
                        }, {
                            _id: { type: 'BrandSecurity' },
                            sum: 94,
                            order: 3
                        }
                    ]
                }, {
                    type: 'risk-severity',
                    order: 1,
                    payload: [
                        {
                            _id: { severity: 'Medium' },
                            sum: 136
                        }, {
                            _id: { severity: 'High' },
                            sum: 173
                        }, {
                            _id: { severity: 'Low' },
                            sum: 116
                        }
                    ]
                }, {
                    type: 'risk-source',
                    order: 2,
                    payload: [
                        {
                            _id: { sourceType: 'PasteSites' },
                            sum: 13
                        }, {
                            _id: { sourceType: 'SocialMedia' },
                            sum: 31
                        }, {
                            _id: { sourceType: 'Others' },
                            sum: 10
                        }, {
                            _id: { sourceType: 'ApplicationStores' },
                            sum: 14
                        }
                    ]
                }
            ]
        }, {
            title: 'DARK WEB',
            order: 1,
            risks: [
                {
                    type: 'risk-types',
                    order: 0,
                    payload: [
                        {
                            _id: { type: 'vip' },
                            sum: 49,
                            order: 5
                        }, {
                            _id: { type: 'Phishing' },
                            sum: 88,
                            order: 2
                        }, {
                            _id: { type: 'ExploitableData' },
                            sum: 23,
                            order: 4
                        }, {
                            _id: { type: 'AttackIndication' },
                            sum: 58,
                            order: 0
                        }, {
                            _id: { type: 'DataLeakage' },
                            sum: 118,
                            order: 1
                        }, {
                            _id: { type: 'BrandSecurity' },
                            sum: 93,
                            order: 3
                        }
                    ]
                }, {
                    type: 'risk-severity',
                    order: 1,
                    payload: [
                        {
                            _id: { severity: 'Low' },
                            sum: 118
                        }, {
                            _id: { severity: 'High' },
                            sum: 168
                        }, {
                            _id: { severity: 'Medium' },
                            sum: 143
                        }
                    ]
                }, {
                    type: 'risk-source',
                    order: 2,
                    payload: [
                        {
                            _id: { sourceType: 'PasteSites' },
                            sum: 13
                        }, {
                            _id: { sourceType: 'BlackMarkets' },
                            sum: 17
                        }, {
                            _id: { sourceType: 'Others' },
                            sum: 11
                        }, {
                            _id: { sourceType: 'HackingForums' },
                            sum: 10
                        }]
                }]
        }]
};

export function getMockRiskData(mockData: RiskData ) { return mockData; }
export function getMockRiskProgress() { return 77; }
