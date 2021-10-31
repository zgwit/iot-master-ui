import {Component,  OnInit} from '@angular/core';
import {SideMenu} from './side.menu';
import {RequestService} from '../request.service';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss'],
  providers: [ConsoleComponent]
})
export class ConsoleComponent implements OnInit {
  cid = '';
  prefix = '/console'

  company: any = {};

  isCollapsed = false;

  menus: Array<any> = [];

  constructor(private rs: RequestService, public us: UserService, private route: Router, private activedRoute: ActivatedRoute) {
    this.cid = this.activedRoute.snapshot.params.cid;
    this.prefix += '/' + this.cid;
    this.initMenu();
    this.load();
  }

  ngOnInit(): void {

  }

  noop(): void {
  }

  load() {
    this.rs.get('company/'+this.cid+'/detail').subscribe((res: any)=>{
      this.company = res.data;
    })
  }


  initMenu(): void {
    this.menus = SideMenu;
  }
}
