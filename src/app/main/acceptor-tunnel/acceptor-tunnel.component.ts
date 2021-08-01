import {Component, Input, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-acceptor-tunnel',
  templateUrl: './acceptor-tunnel.component.html',
  styleUrls: ['./acceptor-tunnel.component.scss']
})
export class AcceptorTunnelComponent implements OnInit {
  @Input() _id = '';

  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;

  params: any = {};

  constructor(private router: Router, private rs: RequestService) {
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
    this.rs.post(`acceptor/${this._id}/tunnel/list`, this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }


  enable(i: number) {

  }

  disable(i: number) {

  }

  remove(i: number) {

  }
}
