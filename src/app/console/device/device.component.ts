import {Component, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {TabRef} from "../../helper/tabs/tabs.component";
import {Router, ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  cid = '';
  

  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;

  params: any = {filter: {}};

  constructor(private tab: TabRef, private router: Router, private route: ActivatedRoute, private rs: RequestService, private ms: NzModalService) {
    tab.name = "设备"
    this.cid = this.route.snapshot.parent?.params?.cid;
    //this.params.filter.company_id = this.cid;
  }

  ngOnInit(): void {
    //this.load();
  }

  search(keyword: string) {
    this.pageIndex = 1;
    this.params.skip = 0;
    if (keyword)
      this.params.filter.$or = [{name: {$regex: keyword}}, {type: {$regex: keyword}}];
    else
      delete this.params.filter.$or;
    this.load();
  }

  onQuery(params: NzTableQueryParams) {
    parseTableQuery(params, this.params);
    this.load();
  }

  load(): void {
    this.loading = true;
    this.rs.post('company/'+this.cid+'/device', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }

  open(data: any): void {
    this.router.navigate(['/console/'+this.cid+'/device/detail/' + data._id]);
  }

  remove(data: any, i: number) {
    this.rs.delete(`device/${data._id}/delete`).subscribe(res => {
      this.datum.splice(i, 1);
    });
  }

  onEnableChange(data: any, enable: boolean) {
    if (enable) {
      this.rs.post(`device/${data._id}/setting`, {enable}).subscribe(res => {
      });
      return;
    }
    this.ms.confirm({
      nzTitle: "提示",
      nzContent: "确认禁用吗?", //TODO 更丰富、人性 的 提醒
      nzOnOk:()=>{
        this.rs.post(`device/${data._id}/setting`, {enable}).subscribe(res => {
        });
      },
      nzOnCancel:()=>{
        data.enable = true;
      }
    })
  }

}
