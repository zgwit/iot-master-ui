import {Component, OnInit} from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {Router, ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  cid = '';
  
  id: any = '';
  data: any = {};
  loading = false;

  constructor(private tab: TabRef, private route: ActivatedRoute, private rs: RequestService) {
    tab.name = '用户详情';
    this.id = route.snapshot.params.id;
    this.cid = route.snapshot.parent?.params?.cid;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.loading = true;
    this.rs.get(`user/${this.id}/detail`).subscribe(res => {
      this.data = res.data;
      this.tab.name = '用户详情[' + this.data.name + ']';
      this.loading = false;
    });
  }

}
