import {Component, Input, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";

@Component({
  selector: 'app-device-project',
  templateUrl: './device-project.component.html',
  styleUrls: ['./device-project.component.scss']
})
export class DeviceProjectComponent implements OnInit {
  @Input() _id = '';

  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;

  params: any = {filter: {}};

  constructor(private router: Router, private rs: RequestService) {
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
    this.rs.post(`device/${this._id}/project`, this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }

  create(): void {
    this.router.navigate(["admin/project/create"], {
      queryParams:
        {
          devices: [{
            device_id: this._id
          }]
        }
    });
  }


  enable(i: number) {

  }

  disable(i: number) {

  }

  remove(data: any, i: number) {
    this.rs.delete(`project/${data._id}/delete`).subscribe(res => {
      this.datum.splice(i, 1);
      //TODO toast
    });

  }
}
