import {Component, Input, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {Router, ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";
import {NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-project-browser',
  templateUrl: './project-browser.component.html',
  styleUrls: ['./project-browser.component.scss']
})
export class ProjectBrowserComponent implements OnInit {
  cid = '';
  

  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;

  params: any = {filter: {}};

  @Input()
  multiple = false;
  checked = false;
  indeterminate = false;
  setCheckedOfId = new Set<string>();
  tableData: readonly any[] = [];

  ids: string[] = [];

  onCurrentPageDataChange(currentPageData: readonly any[]): void {
    this.tableData = currentPageData;
    this.refreshCheckedStatus();
  }

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      if (!this.multiple)
        this.setCheckedOfId.clear();
      this.setCheckedOfId.add(id);
    } else {
      this.setCheckedOfId.delete(id);
    }
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

  onItemClick(data: any) {
    this.onItemChecked(data._id, !this.setCheckedOfId.has(data._id))
  }

  constructor(private rs: RequestService, private route: ActivatedRoute, private mr: NzModalRef) {
    this.cid = this.route.snapshot.parent?.params?.cid;
    this.params.filter.company_id = this.cid;
  }

  ngOnInit(): void {
    //this.load();
  }

  search(keyword: string) {
    this.pageIndex = 1;
    this.params.skip = 0;
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
    this.rs.post('project/list', this.params).subscribe(res => {
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
    this.mr.close(this.multiple ? this.ids : (this.ids.length && this.ids[0]));
    //this.mr.close(this.ids.length ? (this.multiple ? this.ids : this.ids[0]) : undefined);
  }
}
