import {
  Component,
  OnInit,
} from '@angular/core';
import {MainMenu} from './main.menu';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isCollapsed = false;

  menus: Array<any> = [];

  constructor(private as: ApiService, private route: Router) {
    this.initMenu();
  }

  ngOnInit(): void {

  }

  noop(): void {
  }

  logout(): void {
    this.as.get('logout').subscribe(res => {
      this.route.navigate(['/login']);
    });
  }

  initMenu(): void {
    this.menus = MainMenu;
  }
}
