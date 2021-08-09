import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RequestService} from "../../request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tunnel-monitor',
  templateUrl: './tunnel-monitor.component.html',
  styleUrls: ['./tunnel-monitor.component.scss']
})
export class TunnelMonitorComponent implements OnInit, OnDestroy {
  @Input() _id = '';
  @ViewChild('read') read: ElementRef | undefined;

  ws: any;

  text = '';
  isHex = false;
  crlf = false;

  constructor(private router: Router, private rs: RequestService) {
  }


  ngOnInit(): void {
    console.log('init');

    const types = {
      read: '收到',
      write: '发送',
      error: '错误'
    }

    //TODO 此处Angular框架的proxy.conf.json开发模式 不能正常使用
    const host = location.origin.replace(/^http/, 'ws');
    //const host = 'ws://localhost:8008';

    const that = this;
    this.ws = new WebSocket(`${host}/api/tunnel/${this._id}/watch`);
    this.ws.onmessage = function (e: any) {
      console.log('websocket onmessage', e.data)
      const msg: any = JSON.parse(e.data);

      //创建表达DIV元素，避免动态框架的性能损耗
      const div = document.createElement("div");

      const date = new Date();
      const time = document.createElement("span");
      time.append(date.toTimeString().substr(0, 8));
      time.style.backgroundColor = '#F0F0F0';
      time.style.margin = '5px 10px';

      const type = document.createElement("span");
      // @ts-ignore
      type.append(types[msg.type])
      type.style.margin = '5px 10px';

      const size = document.createElement("span");
      size.append(msg.size, '字节')
      size.style.margin = '5px 10px';

      const hex = document.createElement("span");
      hex.append(msg.hex)
      hex.style.margin = '5px 10px';

      const data = document.createElement("span");
      data.append('<', msg.data, '>')
      data.style.margin = '5px 10px';

      div.append(time, type, size, hex, data);

      if (that.read) {
        const container = that.read.nativeElement;
        container.appendChild(div)
        //.scrollIntoView();
        container.scrollTop = container.scrollHeight;

        //TODO 需要考虑最大长度
      }
    }
    this.ws.onerror = function (e: any) {
      console.log('websocket onerror', e)
    }
    this.ws.onclose = function (e: any) {
      console.log('websocket onclose', e)
    }
  }

  ngOnDestroy(): void {
    this.ws?.close();
  }

  send() {
    this.ws?.send(JSON.stringify({
      type: 'write',
      isHex: this.isHex,
      data: this.crlf ? this.text + '\r\n' : this.text
    }));
  }
}
