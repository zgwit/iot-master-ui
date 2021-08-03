import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpuComponent } from './cpu/cpu.component';
import {NzStatisticModule} from "ng-zorro-antd/statistic";
import { MemComponent } from './mem/mem.component';
import { DiskComponent } from './disk/disk.component';
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NgxFilesizeModule} from "ngx-filesize";
import {NzDividerModule} from "ng-zorro-antd/divider";



@NgModule({
  declarations: [
    CpuComponent,
    MemComponent,
    DiskComponent
  ],
  exports: [
    CpuComponent,
    MemComponent,
    DiskComponent
  ],
  imports: [
    CommonModule,
    NzStatisticModule,
    NzProgressModule,
    NgxFilesizeModule,
    NzDividerModule
  ]
})
export class DashModule { }
