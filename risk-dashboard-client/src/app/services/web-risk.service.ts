import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { RiskData } from '../models/risk-data.model';

@Injectable({
  providedIn: 'root'
})
export class WebRiskService {

  constructor(private http: HttpClient) { }

  // Get Risk Data Calculated
  getRisksProgress(): Observable<any> {
    return this.http.get<number>('/api/risk-meter-data').pipe(
      map(progress => {
        return progress;
      }),
      catchError(this.handleError)
    );
  }

  // Get Risk Data Calculated
  getRisksData(): Observable<any> {
    return this.http.get<RiskData>('/api/dashboard-data').pipe(
      map(webRisks => {
        return webRisks;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
    }
    return throwError(error || 'Node.js server error');
  }
}
