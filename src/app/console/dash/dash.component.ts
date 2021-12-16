import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TabRef } from "../../helper/tabs/tabs.component";
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../request.service";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit, OnDestroy {
  cid = '';

  projectTotal = 0;
  deviceTotal = 0;
  deviceOpen = 0;

  projects: any[] = [];
  //win = (window as any);
  doc = (window as any).document;

  interval: any = null;

  constructor(private tab: TabRef, private router: Router, private route: ActivatedRoute, private rs: RequestService, private er: ElementRef) {
    tab.name = "控制台"
    this.cid = this.route.snapshot.parent?.params?.cid;
    this.load();
  }

  ngOnInit(): void {
    //this.load();
    //console.log('cid: ', this.route.snapshot.parent?.params?.cid)
    this.interval = setInterval(()=>{
      this.load();
    }, 5000);
  }

  ngOnDestroy(): void{
    clearInterval(this.interval);
  }

  enterFullscreen() {
    this.er.nativeElement.requestFullscreen();
  }
  exitFullscreen() {
    this.doc.exitFullscreen();
  }

  openDev(dev: any){
    this.exitFullscreen();
    this.router.navigate(['/console/'+this.cid+'/device/detail/' + dev._id]);
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
        p.devices && p.devices.forEach((d: any) => {
          const dvc = p.device.find((dd: any) => dd._id === d.device_id);
          d.instance = dvc;
          if (d.values?.state == 1) this.deviceOpen++;
          const ele = p.element.find((ee: any)=> ee._id === dvc.element_id);
          dvc.element = ele;
        })
      })
    })
  }

}
