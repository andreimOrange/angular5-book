import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {LibraryService} from '../shared/library.service';

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html',
	styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
	@Input('book') book: any;
	@Input('isBookInLibrary') isBookInLibrary: boolean;
	@Output('selectedBook') selectedBook = new EventEmitter();

	constructor(private libraryService: LibraryService) {
	}

	ngOnInit() {
	}

	onBookSelected() {
		this.selectedBook.emit(this.book);
		this.libraryService.addBookToLibrary(this.book);
	}

	onRemoveBook() {
		this.libraryService.removeBook(this.book);
	}
}
