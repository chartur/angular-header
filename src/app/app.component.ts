import { Component } from '@angular/core';
import { HostListener} from "@angular/core";
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'headertest';
  smlIcon = false;
  smlBtn = false;
  @ViewChild('h1') h1: ElementRef;
  @ViewChild('bo') bo: ElementRef;

  constructor() {
    this.onScroll();
  }

  @HostListener('window:scroll', []) // for window scroll events
  onScroll() {
    if (this.h1) {
      this.smlIcon = window.scrollY > this.h1.nativeElement.offsetTop - 60;
    }
    if (this.bo) {
      this.smlBtn = window.scrollY > this.bo.nativeElement.offsetTop - 60;
    }
  }
}
