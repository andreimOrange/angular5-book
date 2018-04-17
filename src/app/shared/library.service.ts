import {Injectable} from '@angular/core';

@Injectable()
export class LibraryService {
	private bookLibrary: any[];

	constructor() {
		this.bookLibrary = [];
	}

	addBookToLibrary(book: any) {
		this.bookLibrary.push(book);
	}

	getLibrary() {
		return this.bookLibrary;
	}

	removeBook(book: any) {
		this.bookLibrary = this.bookLibrary.filter((bookFromLibrary) => {
			return (book.volumeInfo.title != bookFromLibrary.volumeInfo.title);
		});
	}
}