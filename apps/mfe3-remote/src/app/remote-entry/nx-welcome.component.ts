import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

/* eslint-disable */

@Component({
  selector: 'module-federation-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="wrapper">
  <div class="container">
    <!--  WELCOME  -->
    <div id="welcome">
      <h1 class="mdc-typography--headline1">
        <span> Hello there, </span>
        Welcome mfe3-remote 👋
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
