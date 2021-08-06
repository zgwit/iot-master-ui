import {
  Component,
  OnInit,
} from '@angular/core';
import {SideMenu} from './side.menu';
import {RequestService} from '../request.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
    this.menus = SideMenu;
  }
}
