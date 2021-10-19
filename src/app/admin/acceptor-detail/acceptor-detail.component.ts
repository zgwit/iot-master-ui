import {Component, OnInit} from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-acceptor-detail',
  templateUrl: './acceptor-detail.component.html',
  styleUrls: ['./acceptor-detail.component.scss']
})
export class AcceptorDetailComponent implements OnInit {
  id: any = '';
  data: any = {};
  loading = false;

  constructor(private tab: TabRef, private router: ActivatedRoute, private rs: RequestService) {
    tab.name = '服务详情';
    this.id = router.snapshot.params.id;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.loading = true;
    this.rs.get(`acceptor/${this.id}/compose`).subscribe(res=>{
      this.data = res.data;
      this.tab.name = '服务详情[' + this.data.name + ']';
      this.loading = false;
    });
    //TODO 监听
  }

  enable($event: any) {

  }


}
