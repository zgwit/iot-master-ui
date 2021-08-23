import { Component, OnInit } from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {



  constructor(private tab: TabRef, private router: Router, private rs: RequestService) {
    tab.name = "欢迎使用"
  }

  ngOnInit(): void {
  }

}
