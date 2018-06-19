import { Component, OnInit, Input } from '@angular/core'
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'pagination-disabled',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']

})


export class PaginationComponent implements  OnInit {
  @Input() pageCount: number
  collectionSize: number

  constructor() { }

  ngOnInit() {
    //console.log(this.pageCount);
    this.collectionSize = this.pageCount * 10;
  }

  page = 1;  
    
  isDisabled = false;

  toggleDisabled() {
      this.isDisabled = !this.isDisabled;
  }

}
