import {Component, Input, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";
import {ChooseService} from "../choose.service";

@Component({
  selector: 'app-company-user',
  templateUrl: './company-user.component.html',
  styleUrls: ['./company-user.component.scss']
})
export class CompanyUserComponent implements OnInit {
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
      this.params.filter.$or = [{name: {$regex: keyword}}, {cellphone: {$regex: keyword}}, {email: {$regex: keyword}}];
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
    this.rs.post(`company/${this._id}/user`, this.params).subscribe(res => {
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

  remove(data:any, i: number) {
    this.rs.delete(`member/${data.member_id}/delete`).subscribe(res=>{
      this.datum.splice(i, 1);
      //TODO toast
    });
  }

  create() {
    this.cs.chooseUser({
      multiple: true
    }).subscribe(users => {
      users.forEach((u: string) => {
        this.rs.post('member/create', {
          company_id: this._id,
          user_id: u,
        }).subscribe(res => {
          console.log("加入成功");
          //TODO toast

        })
      })
    });
  }
}
