import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {TabRef} from "../../helper/tabs/tabs.component";
import {NzModalService} from "ng-zorro-antd/modal";
import {AcceptorEditComponent} from "../acceptor-edit/acceptor-edit.component";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {PageListComponent} from "../../helper/page-list/page-list.component";

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
    {text: 'male', value: 'male'},
    {text: 'female', value: 'female'}
  ];

  params: any = {};

  constructor(private tab: TabRef, private ms: NzModalService, private vcf: ViewContainerRef, private router: Router, private rs: RequestService) {
    tab.name = "网络服务"
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
    this.rs.post('acceptor/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;

    }, error => {

    }, ()=>{
      this.loading = false;
    });
  }

  create(): void {
    this.router.navigate(["admin/acceptor/create"]);

    return;
  }

  //废弃，编辑通道信息，用户，组 等可以使用
  create2(): void {
    const modal = this.ms.create({
      nzTitle: '创建接收器',
      nzContent: AcceptorEditComponent,
      nzViewContainerRef: this.vcf,
      nzComponentParams: {
        //title: 'title in component',
        //subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzMaskClosable: false,
      nzOnOk: component => {
        //console.log(component);
        //return new Promise(resolve => setTimeout(resolve, 1000))
        return component.submit();
      },
      //nzAfterClose
    });
    modal.afterClose.subscribe(console.log)
  }

}
