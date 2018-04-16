import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnChanges {
	@Input('books') books: any;
	private selectedBook: string;

	constructor() { }

	ngOnInit() {
		console.log(this.books);
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log(this.books);
	}

	displayBook(book: any) {
		this.selectedBook = book;
	}


}
