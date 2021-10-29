import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  projectTotal = 0;
  deviceTotal = 0;
  deviceOpen = 0;

  projects: any[] = [];

  constructor(private rs: RequestService) {
    this.load();
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.rs.get('/company/{id}/project').subscribe(res => {
      this.projects = res.data;
      // 计算总数
      this.projectTotal = this.projects.length;
      this.deviceTotal = 0;
      this.deviceOpen = 0;
      this.projects.forEach(p => {
        this.deviceTotal += p.device.length;
        p.device.forEach((d: any) => {
          if (d.state == 1) this.deviceOpen++;
        })
      })
    })
  }

}
