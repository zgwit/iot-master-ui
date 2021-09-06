import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-config-viewer',
  templateUrl: './config-viewer.component.html',
  styleUrls: ['./config-viewer.component.scss']
})
export class ConfigViewerComponent implements OnInit {
  @Input() config = {};

  constructor() { }

  ngOnInit(): void {
  }

}
