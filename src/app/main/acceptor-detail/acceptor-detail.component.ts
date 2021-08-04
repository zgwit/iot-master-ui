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

  constructor(private tab: TabRef, private router: ActivatedRoute, private rs: RequestService) {
    tab.name = '网络服务详情';
    this.id = router.snapshot.params.id;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.rs.get(`acceptor/${this.id}/detail`).subscribe(res=>{
      this.data = res.data;
      this.tab.name += '[' + this.data.name + ']';
    });
    //TODO 监听
  }

}
