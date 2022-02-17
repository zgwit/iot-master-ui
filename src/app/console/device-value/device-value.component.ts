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

  window = '5m';
  date: Date[] = [dayjs().subtract(5, 'day').toDate(), dayjs().toDate()];

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
    this.rs.post(`device/${this.id}/values/${this.name}/history`, {
      start: dayjs(this.date[0]).diff(dayjs(), "minute") + 'm',
      end: dayjs(this.date[1]).diff(dayjs(), "minute") + 'm',
      window: this.window,
    }).subscribe(res => {
      this.data = res.data;
      this.loading = false;
      this.update();
    });
  }

  update() {
    const xAxisData: string[] = [];
    const data1: number[] = [];

    this.data.forEach((d: any) => {
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
          name: this.name,
          type: 'line',
          data: data1,
          //animationDelay: (idx) => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      //animationDelayUpdate: (idx) => idx * 5,
    };
  }

  onChange($event: any) {
    this.load()
  }

  download() {
    let token = localStorage.getItem('token');
    let start = dayjs(this.date[0]).diff(dayjs(), "minute") + 'm'
    let end = dayjs(this.date[1]).diff(dayjs(), "minute") + 'm'
    window.open(`/api/device/${this.id}/values/${this.name}/history-export-xlsx?window=${this.window}&start=${start}&end=${end}&token=${token}`)
    // let url =`device/${this.id}/values/${this.name}/history-export-xlsx?window=${this.window}&start=${start}&end=${end}`
    // this.rs.get(url).subscribe(res => {
    //   //this.data = res.data;
    //   console.log(res)
    // });

  }
}
