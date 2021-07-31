import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {TabRef} from "../tabs/tabs.component";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  @Output() search = new EventEmitter<string>()
  @Output() refresh = new EventEmitter()
  @Output() create = new EventEmitter()
  @Input() loading: any = false;
  @Input() createDisabled: any = false;

  keyword = '';

  constructor(public tab: TabRef) { }

  ngOnInit(): void {
  }

  close(): void{
    this.tab.Close()
  }

}
