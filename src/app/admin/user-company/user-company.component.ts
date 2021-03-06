import {Component, Input, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";
import {ChooseService} from "../choose.service";

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrls: ['./user-company.component.scss']
})
export class UserCompanyComponent implements OnInit {
  @Input() _id = '';

  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;

  params: any = {filter: {}};

  constructor(private router: Router, private rs: RequestService, private cs: ChooseService) {
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
    this.rs.post(`user/${this._id}/company`, this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }


  open(data: any): void {
    this.router.navigate(['/admin/company/detail/' + data._id]);
  }

  remove(data: any, i: number) {
    this.rs.delete(`member/${data.member_id}/delete`).subscribe(res => {
      this.datum.splice(i, 1);
      //TODO toast
    });
  }

  create() {
    this.cs.chooseCompany({
      multiple: true
    }).subscribe(companys => {
      companys.forEach((g: string) => {
        this.rs.post('member/create', {
          user_id: this._id,
          company_id: g,
        }).subscribe(res => {
          console.log("加入成功")
          //TODO toast
        })
      })
    });
  }
}
