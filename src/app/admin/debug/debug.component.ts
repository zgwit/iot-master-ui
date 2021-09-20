import {Component, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {FunctionsUsingCSI, NgTerminal} from "ng-terminal";

@Component({
  selector: 'app-setting-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {

  // @ts-ignore
  @ViewChild('term', {static: false}) child: NgTerminal;

  write = new Subject()
  private ws: WebSocket | undefined;

  constructor() { }

  ngOnInit(): void {


    //TODO 此处Angular框架的proxy.conf.json开发模式 不能正常使用
    //const host = location.origin.replace(/^http/, 'ws');
    const host = 'ws://localhost:8888';

    const that = this;
    const token = localStorage.getItem('token');
    this.ws = new WebSocket(`${host}/api/setting/repl?token=${token}`);

    this.ws.onmessage = function (e: any) {
      e.data.text().then((res: any)=>{
        //console.log('response:', res);
        that.write.next(res);
      })
      // console.log(e.data.text())
      // that.write.next(e.text);
    }
  }


  onKeyInput($event: { key: string; domEvent: KeyboardEvent }) {
    //console.log('input', $event)
    if ($event.key == '\r') {
      $event.key = '\r\n';
    }

    this.write.next($event.key);
    this.ws?.send($event.key);
  }
}
