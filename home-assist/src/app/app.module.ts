import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from    '@angular/platform-browser/animations';
import { WaterLevelIndicatorComponent } from './water-level-indicator/water-level-indicator.component';
import { PointStatusComponent } from './point-status/point-status.component';
import { SensorStatusComponent } from './sensor-status/sensor-status.component';
import { ProfileComponent } from './profile/profile.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PointListComponent } from './point-list/point-list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxGaugeModule } from 'ngx-gauge';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WaterLevelIndicatorComponent,
    PointStatusComponent,
    SensorStatusComponent,
    ProfileComponent,
    PointListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    NgxGaugeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }