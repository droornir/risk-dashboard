import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RiskData } from 'src/app/models/risk-data.model';
import { getMockRiskData, mockWebRiskJSON } from './mock_helper';

@Injectable()
export class WebRiskMockService {

    mockProgress = 77;
    mockRiskData = getMockRiskData(mockWebRiskJSON);

    getRisksProgress(): Observable<number> {
        return new Observable(subscriber => {
            subscriber.next(this.mockProgress);
        });
    }

    getRisksData(): Observable<RiskData> {
        return new Observable(subscriber => {
            subscriber.next(this.mockRiskData);
        });
    }
}


