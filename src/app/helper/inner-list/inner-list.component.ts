import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-inner-list',
  templateUrl: './inner-list.component.html',
  styleUrls: ['./inner-list.component.scss']
})
export class InnerListComponent implements OnInit {
  @Output() search = new EventEmitter<string>()
  @Output() refresh = new EventEmitter()
  @Output() create = new EventEmitter()
  @Input() loading: any = false;
  @Input() createDisabled: any = false;

  keyword = '';

  constructor() { }

  ngOnInit(): void {
  }

}
