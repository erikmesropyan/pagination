import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`a {cursor: pointer}`],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  public currentPage: number;
  public totalPageCount: number;

  ngOnInit(): void {
    this.currentPage = 2;
    this.totalPageCount = 30;
  }
}
