import { WebRiskType } from './web-risk-type.model';
import { WebRiskSeverity } from './web-risk-severity.model';
import { WebRiskSource } from './web-risk-source.model';

export interface RiskData {
  webRisks: Array<WebRisks>;
}

interface WebRisks {
  title: string;
  order: number;
  risks: Array<WebRisk>;
}

interface WebRisk {
  type: string;
  order: number;
  payload: Array<object>;
}
