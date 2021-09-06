import {Component, Input, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";
import {NzModalService} from "ng-zorro-antd/modal";
import {ChooseService} from "../choose.service";

@Component({
  selector: 'app-company-tunnel',
  templateUrl: './company-tunnel.component.html',
  styleUrls: ['./company-tunnel.component.scss']
})
export class CompanyTunnelComponent implements OnInit {
  @Input() _id = '';

  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;

  params: any = {filter: {}};

  constructor(private router: Router, private rs: RequestService, private cs: ChooseService, private ms: NzModalService) {
  }

  ngOnInit(): void {
    //this.load();
  }

  search(keyword: string) {
    this.pageIndex = 1;
    this.params.skip = 0;
    if (keyword)
      this.params.filter.$or = [{name: {$regex: keyword}}, {sn: {$regex: keyword}}];
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
    this.params.filter.company_id = this._id;
    this.rs.post('tunnel/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }


  open(data: any): void {
    this.router.navigate(['/admin/tunnel/detail/' + data._id]);
  }

  remove(data: any, i: number) {
    this.rs.delete(`tunnel/${data._id}/delete`).subscribe(res => {
      this.datum.splice(i, 1);
    });
  }

  create() {
    this.cs.chooseTunnel({
      multiple: true
    }).subscribe((tunnels: any) => {
      tunnels.forEach((u: string) => {
        this.rs.post('tunnel/' + u + '/setting', {
          company_id: this._id,
        }).subscribe(res => {
          console.log("加入成功");
          //TODO toast
        })
      })
    });
  }

  onEnableChange(data: any, enable: boolean) {
    if (enable) {
      this.rs.post(`tunnel/${data._id}/setting`, {enable}).subscribe(res => {
      });
      return;
    }
    this.ms.confirm({
      nzTitle: "提示",
      nzContent: "确认禁用吗?", //TODO 更丰富、人性 的 提醒
      nzOnOk: () => {
        this.rs.post(`tunnel/${data._id}/setting`, {enable}).subscribe(res => {
        });
      },
      nzOnCancel: () => {
        data.enable = true;
      }
    })
  }

}
