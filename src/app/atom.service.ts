import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Atom} from './atom';

@Injectable()
export class AtomService {
  private baseUrl: string = 'http://localhost:5000/api/v1.1';
  constructor(private http : Http){
  }

  getAll(): Observable<Atom[]>{
    let atom$ = this.http
      .get(`${this.baseUrl}/atoms`, {headers: this.getHeaders()})
      .map(mapAtoms);
      return atom$;
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  get(id: number): Observable<Atom> {
  let atom$ = this.http
    .get(`${this.baseUrl}/atoms/${id}`, {headers: this.getHeaders()})
    .map(mapAtoms)
    .catch(handleError);
    return atom$;
}

save(atom: Atom) : Observable<Response>{
  // this won't actually work because the StarWars API doesn't
  // is read-only. But it would look like this:
  return this
    .http
    .put(`${this.baseUrl}/atoms/${atom.id}`,
          JSON.stringify(atom),
          {headers: this.getHeaders()});
}
}
function mapAtoms(response:Response): Atom[]{
  //throw new Error('ups! Force choke!');
  // The response of the API has a results
  // property with the actual results
  // var test = response.json().results.map(toAtom);
  var test = response.json().result.atoms;
  console.log(test.map(toAtom));
  return test.map(toAtom);
}
function toAtom(r:any): Atom{
  let atom = <Atom>({
    id: r.handle,
    name: r.name,
  });
  console.log('Parsed atom:', atom);
  return atom;
}
function mapAtom(response:Response): Atom{
   // toPerson looks just like in the previous example
   return toAtom(response.json());
}
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with our warpdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
