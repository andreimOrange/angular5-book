import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {LibraryComponent} from './library/library.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'library',
		component: LibraryComponent
	},
	{
		path: 'search',
		component: SearchComponent
	},
	{
		path: '**',
		redirectTo: '/home'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {
}
