import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterLevelIndicatorComponent } from '../app/water-level-indicator/water-level-indicator.component';
import { LoginComponent } from './login/login.component';
import { PointStatusComponent } from './point-status/point-status.component';
import { SensorStatusComponent } from './sensor-status/sensor-status.component';
import { ProfileComponent } from './profile/profile.component';
import { PointListComponent } from './point-list/point-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'water-level', component: WaterLevelIndicatorComponent },
  { path: 'point-status', component: PointStatusComponent },
  { path: 'sensor-status', component: SensorStatusComponent },
  {path: 'profile', component: ProfileComponent},
  {path: 'point-list', component: PointListComponent}
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'landing-page', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
