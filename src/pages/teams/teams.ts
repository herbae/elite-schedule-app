import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams = [
    { id: 1, name: 'Flamengo'},
    { id: 2, name: 'Atlético MG'},
    { id: 3, name: 'Grêmio'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

}
