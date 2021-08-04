import {Injectable, ViewContainerRef} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {GroupBrowserComponent} from "./group-browser/group-browser.component";
import {MainModule} from "./main.module";
import {map} from "rxjs/operators";
import {UserBrowserComponent} from "./user-browser/user-browser.component";

@Injectable({
  providedIn: "root"
})
export class ChooseService {

  constructor(private ms: NzModalService) {
  }

  chooseGroup(params?: any) {
    const modal = this.ms.create({
      nzTitle: '选择群组',
      nzContent: GroupBrowserComponent,
      nzComponentParams: params,
    });
    return modal.afterClose
  }

  chooseUser(params?: any) {
    const modal = this.ms.create({
      nzTitle: '选择用户',
      nzContent: UserBrowserComponent,
      nzComponentParams: params,
    });
    return modal.afterClose
  }
}
