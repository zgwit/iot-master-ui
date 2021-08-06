import {Component, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {TabRef} from "../../helper/tabs/tabs.component";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";

@Component({
  selector: 'app-acceptor',
  templateUrl: './acceptor.component.html',
  styleUrls: ['./acceptor.component.scss']
})
export class AcceptorComponent implements OnInit {
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
    tab.name = "网络服务"
  }

  ngOnInit(): void {
    //this.load();
  }

  search(keyword: string) {
    if (keyword)
      this.params.filter.$or = [{name: {$regex: keyword}}, {type: {$regex: keyword}}, {address: {$regex: keyword}}];
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
    this.rs.post('acceptor/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }

  create(): void {
    this.router.navigate(["admin/acceptor/create"]);
  }

  enable(i: number) {

  }

  disable(i: number) {

  }

  remove(data: any, i: number) {
    this.rs.delete(`acceptor/${data._id}/delete`).subscribe(res=>{
      this.datum.splice(i, 1);
    });
  }
}
