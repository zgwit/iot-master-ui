import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CompanyService } from '../console/company.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.scss']
})
export class SelectCompanyComponent implements OnInit {

  companies: any[] = [];

  constructor(private rs: RequestService, private ms: NzModalService, private cs: CompanyService, private router: Router) {
    this.load();
  }

  ngOnInit(): void {
  }

  load() {
    this.rs.get("my/company").subscribe(res=>{
      this.companies = res.data;
      if (this.companies.length===0) {
        this.ms.confirm({
          nzTitle: '没有公司'
        })
      }
    })
  }

  open(company: any) {
    this.cs.change(company._id);
    this.router.navigate(['/console']);
  }

}
