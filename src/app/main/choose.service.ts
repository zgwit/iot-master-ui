import {Injectable, ViewContainerRef} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {GroupBrowserComponent} from "./group-browser/group-browser.component";
import {MainModule} from "./main.module";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ChooseService {

  constructor(private ms: NzModalService) {
  }

  chooseGroup() {
    const modal = this.ms.create({
      nzTitle: '选择群组',
      nzContent: GroupBrowserComponent,
      //nzViewContainerRef: this.viewContainerRef,
      nzComponentParams: {
        //title: 'title in component',
        //subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzOnOk: () => {

      },
      nzFooter: [
        {
          label: 'change component title from outside',
          onClick: c => {
          }
        }
      ]
    });
    return modal.afterClose
  }
}
