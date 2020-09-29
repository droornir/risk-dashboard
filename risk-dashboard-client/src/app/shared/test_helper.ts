import { getMockRiskData, mockWebRiskJSON } from './mocks/mock_helper';
import { WebRiskSeverity } from '../models/web-risk-severity.model';
import { WebRiskType } from '../models/web-risk-type.model';
import { WebRiskSource } from '../models/web-risk-source.model';

export function getWebRisksTypesDataForTesting(): WebRiskType[] {
    const webRisks = getMockRiskData(mockWebRiskJSON).webRisks;
    return webRisks.find(type => type.title === 'DARK WEB').risks.find(risk => risk.type === 'risk-types').payload as WebRiskType[];
}

export function getWebRisksSeveritiesDataForTesting(): WebRiskSeverity[] {
    const webRisks = getMockRiskData(mockWebRiskJSON).webRisks;
    return webRisks.find(type => type.title === 'DARK WEB').risks.find(risk => risk.type === 'risk-severity').payload as WebRiskSeverity[];
}

export function getWebRisksSourcesDataForTesting(): WebRiskSource[] {
    const webRisks = getMockRiskData(mockWebRiskJSON).webRisks;
    return webRisks.find(type => type.title === 'DARK WEB').risks.find(risk => risk.type === 'risk-source').payload as WebRiskSource[];
}
