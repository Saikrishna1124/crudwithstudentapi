import { Routes } from '@angular/router';

import { StudentlistComponent } from './studentlist/studentlist';
import { StudentaddComponent } from './studentadd/studentadd';
import { StudenteditComponent } from './studentedit/studentedit';

export const routes: Routes = [
  { path: '', redirectTo: 'studentlist', pathMatch: 'full' },
  { path: 'studentlist', component: StudentlistComponent },
  { path: 'studentadd', component: StudentaddComponent },
  { path: 'studentedit/:id', component: StudenteditComponent }
];