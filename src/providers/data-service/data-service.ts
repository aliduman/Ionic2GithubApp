import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  getGithubUsersData:any;
  getUserData:any;

  constructor(public http: Http) {
    console.log('Hello DataServiceProvider Provider');
  }

  list() {
    return new Promise(resolve => {
        this.http.get('https://api.github.com/users')
            .map(res => res.json())
            .subscribe(data => {
                this.getGithubUsersData = data;
                resolve(this.getGithubUsersData);
            });
    });
  }
  detail(login){
    return new Promise(resolve => {
      this.http.get('https://api.github.com/users/'+login)
          .map(res => res.json())
          .subscribe(data => {
              this.getUserData = data;
              resolve(this.getUserData);
          });
  });
  }
}
