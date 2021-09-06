import {Component, Input, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";
import {ChooseService} from "../choose.service";
import {NzModalService} from "ng-zorro-antd/modal";
@Component({
  selector: 'app-group-project',
  templateUrl: './group-project.component.html',
  styleUrls: ['./group-project.component.scss']
})
export class GroupProjectComponent implements OnInit {
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
    this.params.filter.group_id = this._id;
    this.rs.post('project/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }

  create(): void {
    //this.router.navigate(["admin/project/create"], {queryParams: {group_id: this._id}});
    //改为选择
    this.rs.get(`group/${this._id}/detail`).subscribe(res=>{
      //console.log(res);
      this.cs.chooseProject({
        multiple: true,
        company_id: res.data.company_id,
      }).subscribe(res => {
        res.forEach((p: string) => {
          this.rs.post(`project/${p}/setting`, {group_id: this._id}).subscribe(res=>{
            //TODO toast
          })
        })

      })
    })
  }

  open(data: any): void {
    this.router.navigate(['/admin/project/detail/' + data._id]);
  }

  remove(data: any, i: number) {
    this.rs.delete(`project/${data._id}/delete`).subscribe(res => {
      this.datum.splice(i, 1);
    });
  }

  onEnableChange(data: any, enable: boolean) {
    if (enable) {
      this.rs.post(`project/${data._id}/setting`, {enable}).subscribe(res => {
      });
      return;
    }
    this.ms.confirm({
      nzTitle: "提示",
      nzContent: "确认禁用吗?", //TODO 更丰富、人性 的 提醒
      nzOnOk:()=>{
        this.rs.post(`project/${data._id}/setting`, {enable}).subscribe(res => {
        });
      },
      nzOnCancel:()=>{
        data.enable = true;
      }
    })
  }

}
