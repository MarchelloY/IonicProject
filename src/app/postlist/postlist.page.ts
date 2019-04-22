import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.page.html',
  styleUrls: ['./postlist.page.scss'],
})
export class PostlistPage implements OnInit {
  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute) {
    this.loadData();
  }
  public items: any;
  public title: String;
  loadData() {
    this.activatedRoute.queryParams.subscribe(res => {
      let data: Observable<any>;
      data = this.http.get('../../assets/posts.json');
      if (res.name === undefined && res.category === undefined) {
        data.subscribe(result => {
          this.items = result;
        });
        this.title = 'Публикации';
      } else if (res.category === undefined) {
        data.subscribe((result) => {
        this.items = result.filter(element => element.author === res.name);
        });
        this.title = 'Публикации: ' + res.name;
      } else if (res.name === undefined) {
        data.subscribe((result) => {
          this.items = result.filter(element => element.category === res.category);
        });
        this.title = 'Публикации: ' + res.category;
      }
    });
  }
  ngOnInit() {
  }
}

