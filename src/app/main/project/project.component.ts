import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {TabRef} from "../../helper/tabs/tabs.component";
import {NzModalService} from "ng-zorro-antd/modal";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;

  params: any = {};

  constructor(private tab: TabRef, private ms: NzModalService, private vcf: ViewContainerRef, private router: Router, private rs: RequestService) {
    tab.name = "项目"
  }

  ngOnInit(): void {
    //this.load();
  }

  search(keyword: string) {
    this.params.keyword = keyword;
    this.load();
  }

  onQuery(params: NzTableQueryParams) {
    this.params = params;
    this.load();
  }

  load(): void {
    this.loading = true;
    this.rs.post('project/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }

  create(): void {
    this.router.navigate(["admin/project/create"]);

    return;
  }


  enable(i: number) {

  }

  disable(i: number) {

  }

  remove(i: number) {

  }
}
