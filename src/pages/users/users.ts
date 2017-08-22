
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

import { UserDetailPage } from './../user-detail/user-detail';
/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
  providers: [DataServiceProvider]
})
export class UsersPage {
  users: any;
  name: string;
  message: string;
  getGithubUsersData: any;
  constructor
    (
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public dataServiceProvider: DataServiceProvider
    ) {
    /**program başladığında ilk çalışan alan.. */
    this.getGithubUsers();
  }
  addData(data) {
    console.log(data);
  }
  getGithubUsers() {
    let toast = this.toastCtrl.create({
      message: 'Users Loaded..',
      duration: 1000,
      position: 'left'
    });
    this.dataServiceProvider.list().then(data => {
      this.getGithubUsersData = data;
      console.log(data);
      toast.present();
    });
  }
  userDetail(event, user) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(UserDetailPage, {
      user: user
    });
  }
}
