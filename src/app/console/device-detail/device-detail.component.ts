import {Component, OnInit} from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {Router, ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
  cid = '';
  
  id: any = '';
  data: any = {};
  element: any = {};
  loading = false;

  constructor(private tab: TabRef, private route: ActivatedRoute, private rs: RequestService) {
    tab.name = '设备详情';
    this.id = route.snapshot.params.id;
    this.cid = route.snapshot.parent?.params?.cid;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.loading = true;
    this.rs.get(`device/${this.id}/compose`).subscribe(res => {
      this.data = res.data;
      this.tab.name = '设备详情[' + (this.data.name || this.data.element.name) + ']';
      this.loading = false;
    });
  }

  exec(cmd: any) {
    let params = [];
    if (cmd.argc > 0) {
      let param = prompt("请输入值，以逗号间隔", "")
      if (!param) return;
      params = eval(`[${param}]`)
    }
    this.rs.post(`device/${this.id}/execute`, {
      command: cmd.name,
      parameters: params,
    }).subscribe(res => {

    })
  }

  enable($event: any) {

  }

  refresh(name: any) {
    this.rs.get(`device/${this.id}/values/${name}/refresh`).subscribe(res => {
      this.data.values[name] = res.data;
    })
  }

  refreshAll() {
    this.rs.get(`device/${this.id}/values/refresh`).subscribe(res => {
      Object.assign(this.data.values, res.data);
    })
  }
}
