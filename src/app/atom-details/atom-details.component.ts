import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { AtomService } from "../atom.service";
import { Atom } from "../atom";

@Component({
  selector: 'app-atom-details',
  templateUrl: './atom-details.component.html',
  styles: []
})
export class AtomDetailsComponent implements OnInit, OnDestroy {
  atom: Atom;
  sub:any;

  constructor(private route: ActivatedRoute,
              private atomService: AtomService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting atom with id: ', id);
      this.atomService
        .get(id)
        .subscribe(p => this.atom = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoAtomsList(){
    let link = ['/atoms'];
    this.router.navigate(link);
  }

  // saveAtomDetails(){
  //     this.atomService
  //         .save(this.atom)
  //         .subscribe(r => console.log(`saved!!! ${JSON.stringify(this.atom)}`));
  // }

  /*
  //alternatively use:
  gotoPeoplesList(){
      window.history.back();
  }
  */

}
