import { Component, OnInit } from '@angular/core';
import { Atom } from '../atom';
import { AtomService } from "../atom.service";

@Component({
  selector: 'app-atom-list',
  template: `
  <section *ngIf="isLoading && !errorMessage">
    <p>Loading our warpdrives!!! Retrieving data...</p>
  </section>
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let a of atom">
    <!--<p>{{a.name}}</p>-->
      <a [routerLink]="['/atoms', a.id]">
        {{a.name}}
      </a>
    </li>
  </ul>
  <!-- HERE: added this error message -->
  <section *ngIf="errorMessage">
    {{errorMessage}}
  </section>
  `
})
export class AtomListComponent implements OnInit {
  atom: Atom[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private atomService: AtomService) { }

  ngOnInit(){
    this.atomService
      .getAll()
      .subscribe(
         /* happy path */ p => this.atom = p,
         /* error path */ e => this.errorMessage = e,
         /* onCompleted */ () => this.isLoading = false);
  }

}
