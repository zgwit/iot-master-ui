import { Component, OnInit } from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent implements OnInit {
  datum: any[] = [];

  loading = false;


  constructor(private tab: TabRef, private router: Router, private rs: RequestService) {
    tab.name = "协议"
  }

  ngOnInit(): void {
    this.load();
  }


  load(): void {
    this.loading = true;
    this.rs.get('protocol/list').subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
    }).add(() => {
      this.loading = false;
    });
  }

}
