import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-dash-disk',
  templateUrl: './disk.component.html',
  styleUrls: ['./disk.component.scss']
})
export class DiskComponent implements OnInit {
  info:any = {};

  constructor(private rs: RequestService) {
    this.load();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  load(): void {
    this.rs.get('system/disk').subscribe(res => {
      console.log('disk info', res)
      this.info = res.data;
    })
  }


}
