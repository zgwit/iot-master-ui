import {Component, OnInit} from '@angular/core';
import {TabRef} from "../../helper/tabs/tabs.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../request.service";
import * as dayjs from "dayjs";

@Component({
  selector: 'app-device-value',
  templateUrl: './device-value.component.html',
  styleUrls: ['./device-value.component.scss']
})
export class DeviceValueComponent implements OnInit {
  id: any = '';
  name: any = '';
  data: any = {};
  loading = false;
  options: any = {};

  mode: any = {
    start: '-30d',
    end: '0d',
    window: '5m',

  }

  constructor(private tab: TabRef, private router: ActivatedRoute, private rs: RequestService) {
    tab.name = '变量历史';
    this.id = router.snapshot.params.id;
    this.name = router.snapshot.params.name;
    this.load();
  }

  ngOnInit(): void {
  }

  load(): void {
    this.loading = true;
    this.rs.post(`device/${this.id}/values/${this.name}/history`, this.mode).subscribe(res=>{
      this.data = res.data;
      this.loading = false;
      this.update();
    });
  }

  update() {
    const xAxisData: string[] = [];
    const data1: number[] = [];

    this.data.forEach((d:any)=>{
      xAxisData.push(dayjs(d.time).format('M-D HH:mm'));
      data1.push(d[this.name])
    })

    this.options = {
      legend: {
        data: [this.name],
        align: 'left',
      },
      tooltip: {},
      dataZoom: [{
        type: 'inside'
      }, {
        type: 'slider'
      }],
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'line',
          data: data1,
          //animationDelay: (idx) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      //animationDelayUpdate: (idx) => idx * 5,
    };
  }
}
