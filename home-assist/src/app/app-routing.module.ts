import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterLevelIndicatorComponent } from '../app/water-level-indicator/water-level-indicator.component';
import { PointStatusComponent } from './point-status/point-status.component';
import { SensorStatusComponent } from './sensor-status/sensor-status.component';

const routes: Routes = [
  { path: '/water-level', component: WaterLevelIndicatorComponent },
  { path: '/point-status', component: PointStatusComponent },
  { path: '/sensor-status', component: SensorStatusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
