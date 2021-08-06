import {Component, OnInit} from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  id: any = '';
  data: any = {};

  constructor(private tab: TabRef, private router: ActivatedRoute, private rs: RequestService) {
    tab.name = '企业详情';
    this.id = router.snapshot.params.id;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.rs.get(`company/${this.id}/detail`).subscribe(res=>{
      this.data = res.data;
      this.tab.name += '[' + this.data.name + ']';
    });
  }

}
