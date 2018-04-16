import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	private data: any;
	constructor() { }

	ngOnInit() {
	}

	getData() {
		this.data = ['book1', 'book2'];
	}

}
