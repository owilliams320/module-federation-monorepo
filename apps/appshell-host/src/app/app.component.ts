import { Component, ViewChild, ViewContainerRef, ChangeDetectorRef } from '@angular/core';

import '@covalent/components';
import { Console } from 'console';


@Component({
  selector: 'module-federation-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appshell-host';
  helpOpen = false;
  lightMode = true;

  @ViewChild('mfe3Placeholder', { read: ViewContainerRef, static: false  })
  viewContainer!: ViewContainerRef;

  @ViewChild('helpButton', { read: ViewContainerRef  })
  helpButton!: ViewContainerRef;

  constructor(private cd: ChangeDetectorRef) {}

  async toggle(event: MouseEvent): Promise<void> {
    this.helpOpen = !this.helpOpen;
    this.cd.detectChanges();

    if (this.helpOpen) {
      const m = await import('mfe3-remote/Component');
      const ref = this.viewContainer.createComponent<any>(m.RemoteEntryComponent);
    }
    this.helpButton.element.nativeElement.selected = this.helpOpen;
    this.helpButton.element.nativeElement.activated = this.helpOpen;
  }


  toggleTheme(){
    this.lightMode = !this.lightMode;
    document.body.className = this.lightMode ? 'light' : 'dark';
  }

}
