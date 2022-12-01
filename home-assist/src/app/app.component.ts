import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(db: AngularFireDatabase) {
    this.config = db.object('config').valueChanges();
  }
  config;

  ngOnInit() {
console.log(this.config);
  }
}
