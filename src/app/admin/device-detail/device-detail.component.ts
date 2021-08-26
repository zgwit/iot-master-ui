import {Component, OnInit} from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
  id: any = '';
  data: any = {};
  element: any = {};
  loading = false;

  constructor(private tab: TabRef, private router: ActivatedRoute, private rs: RequestService) {
    tab.name = '设备详情';
    this.id = router.snapshot.params.id;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.loading = true;
    this.rs.get(`device/${this.id}/compose`).subscribe(res=>{
      this.data = res.data;
      this.tab.name = '设备详情[' + (this.data.name || this.data.element.name) + ']';
      this.loading = false;
    });
  }

  exec(cmd: any) {
    this.rs.post(`device/${this.id}/execute`, {
      command: cmd.name
    }).subscribe(res=>{

    })
  }


  enable($event: any) {

  }

  refresh(name: any) {
    this.rs.get(`device/${this.id}/values/${name}/refresh`).subscribe(res=>{
      this.data.values[name] = res.data;
    })
  }
}
