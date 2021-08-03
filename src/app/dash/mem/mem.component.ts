import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-dash-mem',
  templateUrl: './mem.component.html',
  styleUrls: ['./mem.component.scss']
})
export class MemComponent implements OnInit {
  @Input() interval = 30000;

  info:any = {};
  handle: any;

  constructor(private rs: RequestService) {
    this.load();
  }

  ngOnInit(): void {
    this.handle = setInterval(()=> {
      this.rs.get('system/mem').subscribe(res => {
        this.info = res.data;
      })
    }, this.interval);
  }

  ngOnDestroy(): void {
      clearInterval(this.handle)
  }

  load(): void {
    this.rs.get('system/mem').subscribe(res => {
      //console.log('mem info', res)
      this.info = res.data;
    })
  }


}
