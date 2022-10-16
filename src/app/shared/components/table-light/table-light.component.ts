import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
})
export class TableLightComponent implements OnInit {
  @Input() public headers!: string[];
  // @Input() public collection!: any;

  constructor() {
    console.log(this.headers);
    // console.log(this.collection);
  }

  ngOnChanges(): void {
    console.log(this.headers);
    // console.log(this.collection);
  }

  ngOnInit(): void {
    console.log(this.headers);
    // console.log(this.collection);
  }
}
