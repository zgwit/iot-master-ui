import {Component, Input, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-element-device',
  templateUrl: './element-device.component.html',
  styleUrls: ['./element-device.component.scss']
})
export class ElementDeviceComponent implements OnInit {
  @Input() _id = '';

  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;

  params: any = {filter: {}};

  constructor(private router: Router, private rs: RequestService, private ms: NzModalService) {
  }

  ngOnInit(): void {
    //this.load();
  }

  search(keyword: string) {
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
    this.params.filter.element_id = this._id;
    this.rs.post('device/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }

  create(): void {
    this.router.navigate(["admin/device/create"], {queryParams: {element_id: this._id}});
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
