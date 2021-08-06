import { Component, OnInit } from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.scss']
})
export class PluginComponent implements OnInit {
  datum: any[] = [];

  loading = false;


  constructor(private tab: TabRef, private router: Router, private rs: RequestService) {
    tab.name = "插件"
  }

  ngOnInit(): void {
    this.load();
  }


  load(): void {
    this.loading = true;
    this.rs.get('plugin/list').subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
    }).add(() => {
      this.loading = false;
    });
  }

}
