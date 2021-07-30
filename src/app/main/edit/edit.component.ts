import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Output() submit = new EventEmitter<MouseEvent>();

  @Input('value') set value(value: string) {
    this._yaml = value;
  }
  @Output('input') update = new EventEmitter();

  //内容
  _yaml = "";
  get yaml() {
    return this._yaml
  }
  set yaml(y) {
    this._yaml = y;
    this.update.emit(y)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
