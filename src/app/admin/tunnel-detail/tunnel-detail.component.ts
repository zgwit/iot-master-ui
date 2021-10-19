import {Component, OnInit} from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-tunnel-detail',
  templateUrl: './tunnel-detail.component.html',
  styleUrls: ['./tunnel-detail.component.scss']
})
export class TunnelDetailComponent implements OnInit {
  id: any = '';
  data: any = {};
  loading = false;

  constructor(private tab: TabRef, private router: ActivatedRoute, private rs: RequestService) {
    tab.name = '通道详情';
    this.id = router.snapshot.params.id;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.loading = true;
    this.rs.get(`tunnel/${this.id}/compose`).subscribe(res=>{
      this.data = res.data;
      this.tab.name = '通道详情[' + (this.data.name||this.data.sn) + ']';
      this.loading = false;
    });
    //TODO 监听
  }
  
  enable($event: any) {

  }

}
