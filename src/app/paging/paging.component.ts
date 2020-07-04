import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel} from '@angular/forms';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PagingComponent),
      multi: true
    }
  ]
})
export class PagingComponent implements OnInit, ControlValueAccessor {

  public pagingArray = [];
  public selectedPage = -1;


  @Input('totalPageCount') set totalPageCount(value: any) {
    if ((value || value === 0) && value >= 0) {
      this.pagingArray = [...Array(+value).keys()];
    }
  }

  @Input() ngModel: NgModel;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectPage(page: number): void {
    this.selectedPage = page;
    this.propagateChange(this.selectedPage);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(value: any): void {
    if ((value || value === 0) && value >= 0) {
      if (value > this.pagingArray.length - 1) {
        this.selectedPage = this.pagingArray.length - 1;
      } else {
        this.selectedPage = +value;
      }
    }
  }

  propagateChange = (_: any) => {};
}
