import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import 'hammerjs'; // 手势

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent implements OnInit, OnChanges {
  initTop = 0;
  @Input() isloading;
  @Input() leaveTop;
  @Input() move;
  constructor() { }

  ngOnInit() {
    this.initTop = this.leaveTop;
  }

  ngOnChanges() {
    if (this.initTop && this.move) {
      this.leaveTop = this.initTop + this.move;
    }
  }
}
