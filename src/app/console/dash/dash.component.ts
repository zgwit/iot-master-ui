import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TabRef } from "../../helper/tabs/tabs.component";
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../request.service";
import * as dayjs from "dayjs";

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

  currentProject: any = {};
  temperatureOptions: any = {};
  o2Options: any = {};
  phOptions: any = {};
  powerOptions: any = {};

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
      this.loadHistories();
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

  openProject(prj: any) {
    this.currentProject = prj;
    this.loadHistories()
  }
  loadHistories(){
    if (!this.currentProject.device) return
    this.powerOptions.filled = true;

    //this.loadHistory()
    for (let k in this.currentProject.device) {
      let dev = this.currentProject.device[k];

      if (dev?.element_id == "612cbe3169466a07d7a5a4b5") {
        this.loadHistory(dev._id, "o2")
        this.loadHistory(dev._id, "temperature")
        this.loadHistory(dev._id, "ph")
      } else {
        this.loadHistory(dev._id, "power")
      }
    }
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

  loadHistory(id: string, name: string) {
    this.rs.post(`device/${id}/values/${name}/history`, {
      start: '-12h',
      end: '0h',
      window: "5m",
    }).subscribe(res=>{
      let data = res.data;
      if (name == "power") {
        if (this.powerOptions.filled) {
          this.powerOptions.series.push({
            name: name,
            type: 'line',
            data: data.map((d: any) => d[name]),
          })
          return;
        }
        this.powerOptions.filled = true;
      }

      this.update(data, name);

    });
  }

  update(data: Array<any>, name: string) {
    const xAxisData: string[] = [];
    const data1: number[] = [];

    data.forEach((d:any)=>{
      xAxisData.push(dayjs(d.time).format('M-D HH:mm'));
      data1.push(d[name])
    })

    // @ts-ignore
    this[name + "Options"] = {
      legend: {
        data: [name],
        align: 'left',
      },
      tooltip: {},
      dataZoom: [{
        type: 'inside'
      }, {
        type: 'slider'
      }],
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: name,
          type: 'line',
          data: data1,
          //animationDelay: (idx) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      //animationDelayUpdate: (idx) => idx * 5,
    };
  }

  openAlarm() {
    //this.router.navigate(['./alarm'])
    this.router.navigate(['/console/'+this.cid+'/alarm']);
  }

  refresh() {
    this.load();
    this.loadHistories();
  }
}
