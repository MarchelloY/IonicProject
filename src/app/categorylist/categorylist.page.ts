import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.page.html',
  styleUrls: ['./categorylist.page.scss'],
})
export class CategorylistPage implements OnInit {
  public items: any;
  constructor(public http: HttpClient,
              public router: Router) {
    this.getData();
  }
  getData() {
    let data: Observable<any>;
    data = this.http.get('../../assets/categorys.json');
    data.subscribe(result => {
      this.items = result;
    });
  }
  onGoToNextPage(i) {
    this.router.navigate(['/tabs/postlist'], {
      queryParams: this.items[i]
    });
  }
  ngOnInit() {
  }
}
