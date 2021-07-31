import {NgModule} from '@angular/core';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';

import {
  UserOutline,
  LockOutline,
  SaveOutline,
  ReloadOutline,
  PlusOutline,
  CloseOutline,
} from '@ant-design/icons-angular/icons';

const icons = [
  UserOutline,
  LockOutline,
  SaveOutline,
  ReloadOutline,
  PlusOutline,
  CloseOutline,
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    {provide: NZ_ICONS, useValue: icons}
  ]
})
export class IconsProviderModule {
}
