import {Component, OnInit} from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  id: any = '';
  data: any = {};
  loading = false;

  constructor(private tab: TabRef, private router: ActivatedRoute, private rs: RequestService) {
    tab.name = '项目详情';
    this.id = router.snapshot.params.id;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.loading = true;
    this.rs.get(`project/${this.id}/compose`).subscribe(res=>{
      this.data = res.data;
      this.tab.name = '项目详情[' + this.data.name + ']';
      this.loading = false;
    });
  }

  exec(cmd: any) {
    this.rs.post(`project/${this.id}/execute`, {
      command: cmd.name
    }).subscribe(res=>{

    })
  }


  enable($event: any) {

  }
}
