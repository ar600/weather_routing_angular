import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {SanjoseComponent} from './sanjose/sanjose.component'
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
import {SeattleComponent} from './seattle/seattle.component'
import {BurbankComponent} from './burbank/burbank.component'

const routes: Routes = [
  { path: '',
	  pathMatch: 'full',
    component: HomeComponent,
    children : []
  },
  { path: 'sanjose',
	  pathMatch: 'full',
    component: SanjoseComponent,
    children : []
  },
  { path: 'seattle',
	  pathMatch: 'full',
    component: SeattleComponent,
    children : []
  },
  { path: 'burbank',
	  pathMatch: 'full',
    component: BurbankComponent,
    children : []
  },
  { path: 'gohome', redirectTo: '/' }
  ,
  { path: '**',
  component: PagenotfoundComponent,
  children : []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
