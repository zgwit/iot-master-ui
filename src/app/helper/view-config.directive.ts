import {Directive, Input} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {ConfigViewerComponent} from "./config-viewer/config-viewer.component";

@Directive({
  selector: '[appViewConfig]',
  host:{
    '(click)': 'view()'
  }
})
export class ViewConfigDirective {
  @Input() config: any = {};

  constructor(private ms: NzModalService) {
  }

  view() {
    this.ms.create({
      nzTitle: '查看配置',
      nzContent: ConfigViewerComponent,
      nzWidth: '80%',
      nzComponentParams: {config: this.config},
    })
  }

}
