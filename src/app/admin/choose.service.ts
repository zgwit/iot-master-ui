import {Injectable} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {CompanyBrowserComponent} from "./company-browser/company-browser.component";
import {UserBrowserComponent} from "./user-browser/user-browser.component";
import {TemplateBrowserComponent} from "./template-browser/template-browser.component";
import {ElementBrowserComponent} from "./element-browser/element-browser.component";
import {DeviceBrowserComponent} from "./device-browser/device-browser.component";
import {GroupBrowserComponent} from "./group-browser/group-browser.component";
import {ProjectBrowserComponent} from "./project-browser/project-browser.component";
import {TunnelBrowserComponent} from "./tunnel-browser/tunnel-browser.component";

@Injectable({
  providedIn: "root"
})
export class ChooseService {

  constructor(private ms: NzModalService) {
  }

  chooseCompany(params?: any) {
    const modal = this.ms.create({
      nzTitle: '选择企业',
      nzContent: CompanyBrowserComponent,
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

  chooseGroup(params: any) {
    const modal = this.ms.create({
      nzTitle: '选择分组',
      nzContent: GroupBrowserComponent,
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

  chooseTunnel(params?: any) {
    const modal = this.ms.create({
      nzTitle: '选择通道',
      nzContent: TunnelBrowserComponent,
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

  chooseProject(params?: any) {
    const modal = this.ms.create({
      nzTitle: '选择项目',
      nzContent: ProjectBrowserComponent,
      nzComponentParams: params,
    });
    return modal.afterClose
  }
}
