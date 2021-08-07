import {Component, Input, OnInit} from '@angular/core';
import {NzSizeLDSType} from "ng-zorro-antd/core/types";

@Component({
  selector: 'app-input-script',
  templateUrl: './input-script.component.html',
  styleUrls: ['./input-script.component.scss']
})
export class InputScriptComponent implements OnInit {
  script = "";
  isVisible = false;
  @Input()
  nzSize: NzSizeLDSType = "default";

  constructor() {
  }

  ngOnInit(): void {
  }

}
