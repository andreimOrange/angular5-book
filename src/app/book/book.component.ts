import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html',
	styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
	@Input('book') book: any;
	@Output('selectedBook') selectedBook = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}

	onBookSelected() {
		this.selectedBook.emit(this.book);
	}

}
