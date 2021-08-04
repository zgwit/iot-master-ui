import {Component, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {TabRef} from "../../helper/tabs/tabs.component";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;
  filterGender = [
    {text: 'TCP服务器', value: 'tcp-server'},
    {text: 'TCP客户端', value: 'tcp-client'}
  ];

  params: any = {filter: {}};

  constructor(private tab: TabRef, private router: Router, private rs: RequestService) {
    tab.name = "用户"
  }

  ngOnInit(): void {
    //this.load();
  }

  search(keyword: string) {
    if (keyword)
      this.params.filter.$or = [{name: {$regex: keyword}}];
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
    this.rs.post('user/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }

  create(): void {
    this.router.navigate(["admin/user/create"]);

    return;
  }

  enable(i: number) {

  }

  disable(i: number) {

  }

  remove(i: number) {
    this.rs.delete('user/'+this.datum[i]._id+'/delete').subscribe(res=>{
      this.datum.splice(i, 1);
    });
  }
}
