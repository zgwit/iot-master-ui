import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgxAmapComponent} from "ngx-amap";
import {RequestService} from "../../request.service";
import {Router} from "@angular/router";
import {TabRef} from "../../helper/tabs/tabs.component";
import gcoord from "gcoord";

declare var AMap: any

@Component({
  selector: 'app-tunnel-map',
  templateUrl: './tunnel-map.component.html',
  styleUrls: ['./tunnel-map.component.scss']
})
export class TunnelMapComponent implements OnInit, AfterViewInit {

  @ViewChild('map',{static:true}) map: NgxAmapComponent | undefined;
  datum: any;

  constructor(private tab: TabRef, private rs: RequestService, private router: Router) {
    tab.name = "通道地图";
  }

  private lays: AMap.TileLayer[] | undefined;

  ngOnInit(): void {
    this.load()
  }

  ngAfterViewInit() {
    console.log(this.map);
  }

  mapReady() {
    // @ts-ignore
    //this.map.mapStyle = "amap://styles/7dc0b3d363bea828169d4ddd2019855c";
    console.log(this.map)
  }

  load(): void {
    this.rs.post('tunnel/list', {
      filter:{ location: {$exists: true}},
      fields:["name", "sn", "location"],
      limit: 999999
    }).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.datum.forEach((d: any)=>{
        d.location = gcoord.transform(d.location, gcoord.WGS84, gcoord.GCJ02);
      })
    }).add(() => {
      //this.loading = false;
    });
  }

  open(data: any): void{
    this.router.navigate(['/admin/tunnel/detail/' + data._id]);
  }
}
