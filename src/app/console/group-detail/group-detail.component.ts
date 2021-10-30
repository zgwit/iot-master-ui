import {Component, OnInit} from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {
  cid = '';
  
  id: any = '';
  data: any = {};
  loading = false;

  constructor(private tab: TabRef, private route: ActivatedRoute, private rs: RequestService) {
    tab.name = '分组详情';
    this.id = route.snapshot.params.id;
    this.cid = route.snapshot.parent?.params?.cid;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.loading = true;
    this.rs.get(`group/${this.id}/compose`).subscribe(res=>{
      this.data = res.data;
      this.tab.name = '分组详情[' + this.data.name + ']';
      this.loading = false;
    });
  }

}
