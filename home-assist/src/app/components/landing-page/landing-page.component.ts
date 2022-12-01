import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  panelOpenState: boolean = true;
  profiles: any;
  points: any;
  profileSample = [{
    profileName: "Evening",
    isActive: true,
    pointConfig: [{
      pointId: "point1",
      pointName: "Hall Light",
      isOn: false
    },
    {
      pointId: "point2",
      pointName: "Hall Fan 1",
      isOn: true
    }
    ]
  }];
  sensors = [
    {
        sensorType: "motion",
        location: "Balcony",
        isTriggered: true,
        shouldNotify: false,
        shouldBuzzer: true,
        icon: 'camera_outdoor'
    },
    {
        sensorType: "fire",
        location: "Kitchen",
        isTriggered: false,
        shouldNotify: false,
        shouldBuzzer: true,
        icon: 'local_fire_department'
    },
    {
        sensorType: "smoke",
        location: "Bedroom1",
        isTriggered: false,
        shouldNotify: false,
        shouldBuzzer: true,
        icon: 'smoke_free'
    }
];
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('config').valueChanges();
    this.items.subscribe((data): any => {
      this.profiles = data[1]
      this.points = data[0]
    })
  }
  editProfile(event: any) {
    console.log(event, 'editing profile...');
    // document.getElementById('flip-card-inner')?.style.transform = "rotateY(180deg)";
  }

  ngOnInit() {
  }

}
