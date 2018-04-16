import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		BookComponent,
		BookListComponent,
		SearchComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
