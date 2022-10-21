import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'module-federation-monorepo-mfe3-remote-entry',
  template: `<module-federation-monorepo-nx-welcome></module-federation-monorepo-nx-welcome>`,
})
export class RemoteEntryComponent {}
