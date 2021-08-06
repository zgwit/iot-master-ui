import {NgModule} from '@angular/core';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  SettingOutline,
  LogoutOutline,
  ClusterOutline,
  BlockOutline,
  AppstoreAddOutline,
  UserOutline,
  FormOutline,
  DragOutline,
} from '@ant-design/icons-angular/icons';
import {CommonModule} from '@angular/common';

const icons = [
  // 菜单相关
  MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, BlockOutline,
  SettingOutline, AppstoreAddOutline, ClusterOutline, LogoutOutline, UserOutline,
  // 表格操作
  FormOutline,
  DragOutline,
];

@NgModule({
  imports: [CommonModule, NzIconModule.forChild(icons)],
  exports: [NzIconModule],
  providers: [
    {provide: NZ_ICONS, useValue: icons}
  ]
})
export class IconsProviderModule {
}
