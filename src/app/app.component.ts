import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerCollectionView } from './ServerCollectionView';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  view: ServerCollectionView;

  constructor(private httpClient: HttpClient) {
    this.view = new ServerCollectionView(this.httpClient, '/users', {
      pageSize: 10,
    });
  }
}
