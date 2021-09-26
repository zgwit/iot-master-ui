import {Component,  OnInit} from '@angular/core';
import {SideMenu} from './side.menu';
import {RequestService} from '../request.service';
import {UserService} from "../user.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss'],
  providers: [ConsoleComponent]
})
export class ConsoleComponent implements OnInit {

  isCollapsed = false;

  menus: Array<any> = [];

  constructor(private rs: RequestService, public us: UserService, private route: Router) {
    this.initMenu();
  }

  ngOnInit(): void {

  }

  noop(): void {
  }


  initMenu(): void {
    this.menus = SideMenu;
  }
}
