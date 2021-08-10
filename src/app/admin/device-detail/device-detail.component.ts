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

  constructor(private tab: TabRef, private router: ActivatedRoute, private rs: RequestService) {
    tab.name = '设备详情';
    this.id = router.snapshot.params.id;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.rs.get(`device/${this.id}/compose`).subscribe(res=>{
      this.data = res.data;
      this.tab.name += '[' + this.data.name + ']';

      this.rs.get(`element/${this.data.element_id}/detail`).subscribe(res=>{
        this.element = res.data;
        //this.tab.name += '[' + this.data.name + ']';

      });
    });
  }

  exec(cmd: any) {
    this.rs.post(`device/${this.id}/execute`, {
      command: cmd.name
    }).subscribe(res=>{

    })
  }


}
