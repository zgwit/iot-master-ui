import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  @Output() refresh = new EventEmitter();
  @Output() create = new EventEmitter();

  @Input() loading: any = false;
  @Input() noCreate: any = false;
  @Input() createButtonText = "新建";
  @Input() noSearch: any = false;

  keyword = '';

  constructor() { }

  ngOnInit(): void {
  }

}
