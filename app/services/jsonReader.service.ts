import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable() export class JSONReaderService {

  constructor(private http:Http) {
  }

  getFile(path) {
    console.log(path);
    return this.http.get(path).map((res:Response) => res.json());
  }

}
