import {Component, OnInit} from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.scss']
})
export class TemplateDetailComponent implements OnInit {
  id: any = '';
  data: any = {};
  loading = false;

  constructor(private tab: TabRef, private router: ActivatedRoute, private rs: RequestService) {
    tab.name = '模板详情';
    this.id = router.snapshot.params.id;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.loading = true;
    this.rs.get(`template/${this.id}/detail`).subscribe(res=>{
      this.data = res.data;
      this.tab.name = '模板详情[' + this.data.name + ']';
      this.loading = false;
    });
  }

}
