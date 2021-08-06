import {Component, OnInit} from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  id: any = '';
  data: any = {};

  constructor(private tab: TabRef, private router: ActivatedRoute, private rs: RequestService) {
    tab.name = '用户详情';
    this.id = router.snapshot.params.id;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.rs.get(`user/${this.id}/detail`).subscribe(res => {
      this.data = res.data;
      this.tab.name += '[' + this.data.name + ']';
    });
  }

}
