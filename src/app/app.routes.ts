import {DirectoryComponent} from './directory/directory.component';
import {HomeComponent} from './home/home.component';
import {TryInputComponent} from './try-input/try-input.component';
import {RouterModule} from '@angular/router';

const APP_ROUTER = [
  { path: 'directory', component: DirectoryComponent},
  {path : '', component: HomeComponent},
  {path: 'try', component: TryInputComponent}
];

export const APP_ROUTE_PROVIDER = [
  RouterModule.forRoot(APP_ROUTER)
]

