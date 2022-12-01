import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
    panelOpenState: boolean = true;
    profiles = [{
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
  constructor() {
  }

  ngOnInit() {

  }
}
