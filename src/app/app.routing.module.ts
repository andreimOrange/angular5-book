import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'list',
		component: BookListComponent
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

export class AppRoutingModule { }
