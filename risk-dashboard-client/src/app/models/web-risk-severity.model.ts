export interface WebRiskSeverity {
  sum: number;
  _id: SeverityID;
}

interface SeverityID {
  severity: string;
}
