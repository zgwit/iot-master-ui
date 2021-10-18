import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private sub = new Subject();
  private readonly ob = this.sub.asObservable();

  public company_id = 0;

  constructor() {
  }

  change() {
    this.sub.next();
  }

  onChange(): Observable<any> {
    return this.ob;
  }

}
