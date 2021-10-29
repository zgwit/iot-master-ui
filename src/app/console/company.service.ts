import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private sub = new Subject<string>();
  private readonly ob = this.sub.asObservable();

  public company_id: string = '';

  constructor() {
  }

  change(id: string) {
    this.company_id = id;
    this.sub.next(id);
  }

  onChange(): Observable<string> {
    return this.ob;
  }

}
