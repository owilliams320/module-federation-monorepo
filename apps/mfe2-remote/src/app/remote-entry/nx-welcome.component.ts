import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'module-federation-monorepo-nx-welcome',
  template: `<div class="wrapper">
  <div class="container">
    <!--  WELCOME  -->
    <div id="welcome">
      <h1 class="mdc-typography--headline1">
        <span> Hello there, </span>
        Welcome mfe2-remote 👋
      </h1>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
