import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.css']
})
export class PointListComponent implements OnInit, OnChanges {
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
  }]
  //db
  dbInstance: AngularFireDatabase;
  constructor(db: AngularFireDatabase) {
    this.dbInstance = db;
   }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes && !changes['points'].isFirstChange()){

    }
  }

  ngOnInit(): void {
  }
  onPointEdit(event: any) {
    const point = this.points.filter(p => p.pointId === event.pointId)[0];
    point.enableEdit = true;
    console.log('editing..');
  }
  onPointSave(event: any) {
    const point = this.points.filter(p => p.pointId === event.pointId)[0];
    const index = this.points.findIndex(p => p.pointId === event.pointId);
    point.enableEdit = false;
    this.updateValue(index);
  }
  updateValue(index: number){
    const itemsRef = this.dbInstance.list('config');
    itemsRef.update('points', { [index] : this.points[index] });
  }
  toggle(event: any, index: any){
    this.points[index].isOn = event.checked;
    this.updateValue(index);
  }
}
