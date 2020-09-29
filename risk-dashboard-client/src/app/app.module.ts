// modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule, ThemeService } from 'ng2-charts';

// components
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AppComponent } from './components/app/app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SeveritiesComponent } from './components/severities/severities.component';
import { TypesComponent } from './components/types/types.component';
import { SourcesComponent } from './components/sources/sources.component';
import { DisplayErrorComponent } from './shared/dialogs/error-display.component';

// services
import { WebRiskService } from './services/web-risk.service';
import { WebRiskMockService } from './shared/mocks/web-risk-mock.service';

// pipes
import { ParseAndCapitalize } from './pipes/parse-and-capitalize.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  providers: [
    WebRiskService,
    WebRiskMockService,
    ThemeService
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProgressBarComponent,
    SeveritiesComponent,
    TypesComponent,
    SourcesComponent,
    DisplayErrorComponent,
    ParseAndCapitalize,
    LoadingSpinnerComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
