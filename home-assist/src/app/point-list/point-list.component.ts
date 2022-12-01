import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.css']
})
export class PointListComponent implements OnInit {
  points: any[] = [{
    pointName: 'Point 1',
    isOn: true,
    pointId: 1
  },
  {
    pointName: 'Point 2',
    isOn: false,
    pointId: 2
  },
  {
    pointName: 'Point 3',
    isOn: true,
    pointId: 3
  }]
  constructor() { }

  ngOnInit(): void {
  }
  onPointEdit(event: any) {
    const point = this.points.filter(p => p.pointId === event.pointId)[0];
    point.enableEdit = true;
    console.log('editing..');
  }
  onPointSave(event: any) {
    const point = this.points.filter(p => p.pointId === event.pointId)[0];
    point.enableEdit = false;
  }

}
