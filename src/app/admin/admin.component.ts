import {
  Component,
  OnInit,
} from '@angular/core';
import {SideMenu} from './side.menu';
import {RequestService} from '../request.service';
import {UserService} from "../user.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isCollapsed = false;

  menus: Array<any> = [];

  constructor(private rs: RequestService, public us: UserService, private route: Router) {
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
    this.menus = SideMenu;
  }
}
