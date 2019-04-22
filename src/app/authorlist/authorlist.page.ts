import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorlist',
  templateUrl: './authorlist.page.html',
  styleUrls: ['./authorlist.page.scss'],
})
export class AuthorlistPage implements OnInit {

  public items: any;
  public key = 'items';
  constructor(public http: HttpClient,
              private storage: Storage,
              public router: Router) {
      this.loadData();
  }
  getData() {
      let data: Observable<any>;
      data = this.http.get('../../assets/authors.json');
      data.subscribe(result => {
        this.items = result;
      });
  }
  saveData() {
    this.storage.set(this.key, JSON.stringify(this.items));
  }
  loadData() {
     this.storage.get(this.key).then((val) => {
        if (val != null && val !== undefined) {
        this.items = JSON.parse(val);
        }
     });
  }
  delete(i) {
      this.items.splice(i, 1);
  }
  onGoToNextPage(i) {
      this.router.navigate(['/tabs/postlist'], {
          queryParams: this.items[i]
      });
  }
  ngOnInit() {
  }
}
