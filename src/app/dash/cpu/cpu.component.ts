import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RequestService} from "../../request.service";

@Component({
  selector: 'app-dash-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.scss']
})
export class CpuComponent implements OnInit, OnDestroy {
  @Input() interval = 5000;

  info:any = {
    usage: 0,
  };
  handle: any;

  constructor(private rs: RequestService) {
    this.load();
  }

  ngOnInit(): void {
    this.handle = setInterval(()=> {
      this.rs.get('system/cpu', {interval: 2000}).subscribe(res => {
        this.info = res.data;
      })
    }, this.interval);
  }

  ngOnDestroy(): void {
      clearInterval(this.handle)
  }

  load(): void {
    this.rs.get('system/cpu', {interval: 100}).subscribe(res => {
      //console.log('cpu info', res)
      this.info = res.data;
    })
  }


}
