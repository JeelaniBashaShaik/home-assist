import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.css']
})
export class PointListComponent implements OnInit {
  @Input() points: any[] = [{
    pointId: "point1",
    pointName: "Hall Light",
    isOn: false
  },
  {
    pointId: "point2",
    pointName: "Hall Fan 1",
    isOn: true
  },
  {
    pointName: 'Point 1',
    isOn: true,
    pointId: "point3"
  },
  {
    pointName: 'Point 2',
    isOn: false,
    pointId: "point4"
  },
  {
    pointName: 'Point 3',
    isOn: true,
    pointId: 'point5'
  }];
  @Input() readonly: boolean = false;
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
