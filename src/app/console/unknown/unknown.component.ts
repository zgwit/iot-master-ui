import { Component, OnInit } from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.scss']
})
export class UnknownComponent implements OnInit {



  constructor(private tab: TabRef, private router: Router, private rs: RequestService) {
    tab.name = "未知页面"
  }

  ngOnInit(): void {
  }

}
