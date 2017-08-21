import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the UserDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {
  id:any;
  userData:any;
  login:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataServiceProvider: DataServiceProvider
  ) 
  {
    console.log(this.navParams.get('user'));

    this.login = this.navParams.get('user');
    this.dataServiceProvider.detail(this.login).then(data => {
      this.userData = data;
      console.log(data);
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }

}
