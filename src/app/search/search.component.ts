import {Component, OnInit} from '@angular/core';
import {GoogleBooksService} from '../shared/google-books.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
	private data: any;
	private criteria: string;

	constructor(private googleBooksService: GoogleBooksService) {
		this.criteria = '';
	}

	ngOnInit() {
	}

	getData() {
		this.googleBooksService.getBooks(this.criteria)
			.subscribe(response => this.data = response['items']);
	}

}
