import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'mfe2-remote',
    loadChildren: () =>
      import('mfe2-remote/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'mfe1-remote',
    loadChildren: () =>
      import('mfe1-remote/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
