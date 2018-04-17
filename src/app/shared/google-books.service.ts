import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GoogleBooksService {
	private url: string;

	constructor(private http: HttpClient) {
		this.url = 'https://www.googleapis.com/books/v1/';
	}

	getBooks(criteria: string) {
		return this.http.get(this.url + 'volumes?q=' + criteria);
	}
}