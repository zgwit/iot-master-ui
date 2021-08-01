import {Component, Input, OnInit} from '@angular/core';
import {RequestService} from "../../request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tunnel-monitor',
  templateUrl: './tunnel-monitor.component.html',
  styleUrls: ['./tunnel-monitor.component.scss']
})
export class TunnelMonitorComponent implements OnInit {
  @Input() _id = '';

  constructor(private router: Router, private rs: RequestService) {
  }
  ngOnInit(): void {
  }

}
