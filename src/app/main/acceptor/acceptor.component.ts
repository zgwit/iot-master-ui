import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {TabRef} from "../../helper/tabs/tabs.component";
import {NzModalService} from "ng-zorro-antd/modal";
import {AcceptorEditComponent} from "../acceptor-edit/acceptor-edit.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-acceptor',
  templateUrl: './acceptor.component.html',
  styleUrls: ['./acceptor.component.scss']
})
export class AcceptorComponent implements OnInit {
  total = 1;
  datum: any[] = [];
  loading = false;
  pageSize = 10;
  pageIndex = 1;
  filterGender = [
    {text: 'male', value: 'male'},
    {text: 'female', value: 'female'}
  ];

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>
  ): void {
    //this.loading = true;
    // this.api.getUsers(pageIndex, pageSize, sortField, sortOrder, filter).subscribe(data => {
    //   this.loading = false;
    //   this.total = 200; // mock the total data here
    //   this.listOfRandomUser = data.results;
    // });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log(params);
    const {pageSize, pageIndex, sort, filter} = params;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }

  constructor(private tab: TabRef, private ms: NzModalService, private vcf: ViewContainerRef, private router: Router) {
    tab.name = "接收器"
  }

  ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
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
