import {Component, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {TabRef} from "../../helper/tabs/tabs.component";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;

  params: any = {filter: {}};

  constructor(private tab: TabRef, private router: Router, private rs: RequestService) {
    tab.name = "模板库"
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
    this.rs.post('template/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }

  create(): void {
    this.router.navigate(["admin/template/create"]);
  }

  open(data: any): void {
    this.router.navigate(['/admin/template/detail/' + data._id]);
  }

  remove(data: any, i: number) {
    this.rs.delete(`template/${data._id}/delete`).subscribe(res=>{
      this.datum.splice(i, 1);
    });
  }
}
