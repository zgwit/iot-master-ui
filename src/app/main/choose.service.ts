import {Injectable} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {GroupBrowserComponent} from "./group-browser/group-browser.component";
import {UserBrowserComponent} from "./user-browser/user-browser.component";
import {TemplateBrowserComponent} from "./template-browser/template-browser.component";
import {ElementBrowserComponent} from "./element-browser/element-browser.component";
import {DeviceBrowserComponent} from "./device-browser/device-browser.component";

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

  chooseDevice(params?: any) {
    const modal = this.ms.create({
      nzTitle: '选择设备',
      nzContent: DeviceBrowserComponent,
      nzComponentParams: params,
    });
    return modal.afterClose
  }

  chooseElement(params?: any) {
    const modal = this.ms.create({
      nzTitle: '选择元件',
      nzContent: ElementBrowserComponent,
      nzComponentParams: params,
    });
    return modal.afterClose
  }

  chooseTemplate() {
    const modal = this.ms.create({
      nzTitle: '选择模板',
      nzContent: TemplateBrowserComponent,
    });
    return modal.afterClose
  }
}
