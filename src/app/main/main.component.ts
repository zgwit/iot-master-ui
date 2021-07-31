import {
  Component,
  OnInit,
} from '@angular/core';
import {MainMenu} from './main.menu';
import {RequestService} from '../request.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isCollapsed = false;

  menus: Array<any> = [];

  constructor(private rs: RequestService, private route: Router) {
    this.initMenu();
  }

  ngOnInit(): void {

  }

  noop(): void {
  }

  logout(): void {
    this.rs.get('logout').subscribe(res => {
      this.route.navigate(['/login']);
    });
  }

  initMenu(): void {
    this.menus = MainMenu;
  }
}
