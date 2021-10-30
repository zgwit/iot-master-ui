import {Component, Input, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {Router, ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../../helper/lib";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  cid = '';
  
  @Input() type = '';
  @Input() _id = '';

  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;

  params: any = {filter: {}};

  constructor(private router: Router, private route: ActivatedRoute, private rs: RequestService) {
    this.cid = route.snapshot.parent?.params?.cid;
  }

  ngOnInit(): void {
    //this.load();
  }

  search(keyword: string) {
    this.pageIndex = 1;
    this.params.skip = 0;
    if (keyword)
      this.params.filter.$or = [{event: {$regex: keyword}}];
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
    this.params.filter[this.type + '_id'] = this._id;
    this.rs.post('event/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }


  remove(data: any, i: number) {
    this.rs.delete(`event/${data._id}/delete`).subscribe(res=>{
      this.datum.splice(i, 1);
    });

  }
}
