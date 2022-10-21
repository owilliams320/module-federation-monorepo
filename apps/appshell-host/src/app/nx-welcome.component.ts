import { Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'module-federation-monorepo-nx-welcome',
  template: `
    <div class="wrapper mdc-typography">
      <div class="container">
        <!--  WELCOME -->
        <div id="welcome">
          <h1 class="mdc-typography--headline1">
            <span> Hello there, </span>
            Welcome appshell-host 👋            
          </h1>
        </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {

  @ViewChild('mfe3Placeholder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {}
}
