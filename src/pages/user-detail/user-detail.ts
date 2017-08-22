import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
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
export class UserDetailPage implements OnInit {
  id: any;
  userData: any;
  login: any;
  name: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataServiceProvider: DataServiceProvider,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController
  ) {
    console.log(this.navParams.get('user'));
    this.login = this.navParams.get('user');
    this.dataServiceProvider.detail(this.login).then(data => {
      console.log(data);
      this.userData = data;
      this.name = this.userData.name;
    });
    
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(Profile,{login:this.login,name:this.name});
    profileModal.present();
  }
  //TODO: Data aktarılsın..

  ngOnInit() {
    
  }
}

@Component({
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <div><small>{{name}}</small></div>
        <div>Repos</div>
      </ion-title>
      <ion-buttons start>
        <button ion-button (click)="dismiss()">
          <span ion-text color="primary" showWhen="ios">Cancel</span>
          <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
        </button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
  <ion-list>
    <ion-item *ngFor="let repo of repos">
      <h2>{{repo?.name}}</h2>
      <p>{{repo?.description}}</p>
    </ion-item>
  </ion-list>
    
  </ion-content>`
})
export class Profile {
  name: any;
  login:any;
  repos:any;
  constructor(
    public viewCtrl: ViewController,
    public params: NavParams,
    public dataServiceProvider: DataServiceProvider
  ) 
  {
    this.login = params.get('login');
    this.name = params.get('name');
    this.dataServiceProvider.repos(this.login).then(data => {
      this.repos = data;
      console.log(data);
    });
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}