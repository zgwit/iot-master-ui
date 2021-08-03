import { Component, OnInit } from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  constructor(private tab: TabRef) {
    tab.name = "控制台"
  }

  ngOnInit(): void {
  }

}
