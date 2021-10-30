import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from "../../request.service";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  cid = '';

  projectTotal = 0;
  deviceTotal = 0;
  deviceOpen = 0;

  projects: any[] = [];
  //win = (window as any);
  doc = (window as any).document;

  constructor(private rs: RequestService, private route: ActivatedRoute, private er: ElementRef) {
    this.cid = this.route.snapshot.parent?.params?.cid;
    this.load();
  }

  ngOnInit(): void {
    //this.load();
    //console.log('cid: ', this.route.snapshot.parent?.params?.cid)
  }

  enterFullscreen() {
    this.er.nativeElement.requestFullscreen();
  }
  exitFullscreen() {
    this.doc.exitFullscreen();
  }

  load() {
    this.rs.get('company/' + this.cid + '/project').subscribe(res => {
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
