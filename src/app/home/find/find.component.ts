import { StorageService } from './../../service/storage.service';
import { ApiService } from './../../service/api.service';
import { flyIn } from './../../animation/fly-in';
import { Component, OnInit } from '@angular/core';

import 'hammerjs';

@Component({
  selector: 'app-find-component',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.less'],
  providers: [],
  animations: [flyIn]
})
export class FindComponent implements OnInit {
  list; // 产品列表
  topCarousel; // 顶部广告
  defaultImage = 'assets/lazy_default.png';
  body = {
    appId: this.storage.get('appinfo')['id'],
    page: 1
  };
  receiveTheData(action) {
    // 从loader组件返回action
    // console.log(action);
    this.topCarousel = action.locationAds[0].ads;
    this.list = action.hotProducts;
  }
  constructor(
    private storage: StorageService
  ) { };

  ngOnInit() {
  }
}