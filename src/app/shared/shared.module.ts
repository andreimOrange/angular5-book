import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {GoogleBooksService} from './google-books.service';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {LibraryService} from './library.service';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule
	],
	providers: [
		GoogleBooksService,
		LibraryService,
	],
	exports: [
		MatCardModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule
	]
})

export class SharedModule {
}
