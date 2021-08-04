import {Component, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {TabRef} from "../../helper/tabs/tabs.component";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";
import {NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-group-browser',
  templateUrl: './group-browser.component.html',
  styleUrls: ['./group-browser.component.scss']
})
export class GroupBrowserComponent implements OnInit {
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

  checked = false;
  indeterminate = false;
  setCheckedOfId = new Set<string>();
  tableData: any[] = [];

  ids: string[] = [];

  onCurrentPageDataChange(currentPageData: readonly any[]): void {
    this.tableData = currentPageData.filter(({enable}) => enable);
    this.refreshCheckedStatus();
  }

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) this.setCheckedOfId.add(id);
    else this.setCheckedOfId.delete(id);
  }

  refreshCheckedStatus(): void {
    this.checked = this.tableData.every(({_id}) => this.setCheckedOfId.has(_id));
    this.indeterminate = this.tableData.some(({_id}) => this.setCheckedOfId.has(_id)) && !this.checked;
    this.ids = Array.from(this.setCheckedOfId)
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.tableData.forEach(({_id}) => this.updateCheckedSet(_id, checked));
    this.refreshCheckedStatus();
  }


  constructor(private rs: RequestService, private mr: NzModalRef) {
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
    this.rs.post('group/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }

  cancel() {
    this.mr.close()
  }

  ok() {
    this.mr.close(this.ids)
  }
}
