import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {TabRef} from "../../helper/tabs/tabs.component";
import {NzModalService} from "ng-zorro-antd/modal";
import {TunnelEditComponent} from "../tunnel-edit/tunnel-edit.component";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-tunnel',
  templateUrl: './tunnel.component.html',
  styleUrls: ['./tunnel.component.scss']
})
export class TunnelComponent implements OnInit {
  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;

  params: any = {};

  constructor(private tab: TabRef, private ms: NzModalService, private vcf: ViewContainerRef, private router: Router, private rs: RequestService) {
    tab.name = "数据通道"
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
    this.rs.post('tunnel/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }

  create(): void {
    this.router.navigate(["admin/tunnel/create"]);

    return;
  }


  enable(i: number) {

  }

  disable(i: number) {

  }

  remove(i: number) {

  }
}
