import {Component, Input, OnInit} from '@angular/core';
import {NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {
  @Input() message = "请输入";

  @Input() placeholder = "";
  @Input() default = "";

  constructor(private mr: NzModalRef) {
  }

  ngOnInit(): void {
  }

  cancel() {
    this.mr.close()
  }

  ok() {
    this.mr.close(this.default);
  }
}
