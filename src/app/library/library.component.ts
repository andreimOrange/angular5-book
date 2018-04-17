import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {LibraryService} from '../shared/library.service';

@Component({
	selector: 'app-library',
	templateUrl: './library.component.html',
	styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, AfterContentChecked {
	private selectedBooks: any[];

	constructor(private libraryService: LibraryService) {
	}

	ngOnInit() {
		this.selectedBooks = this.libraryService.getLibrary();
	}

	ngAfterContentChecked() {
		this.selectedBooks = this.libraryService.getLibrary();
	}

}
