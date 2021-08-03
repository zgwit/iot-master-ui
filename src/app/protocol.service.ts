import {Injectable} from '@angular/core';
import {RequestService} from "./request.service";
import {map} from "rxjs/operators";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {

  protocols: Array<any> | undefined;

  constructor(private rs: RequestService) {
  }

  load() {
    if (this.protocols) {
      let sub = new Subject()
      sub.next(this.protocols)
      return sub;
    }

    return this.rs.get('protocol/list').pipe(map(res=>{
      return this.protocols = res.data;
    }));
  }

  reload(){

  }
}
