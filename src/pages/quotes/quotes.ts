import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';



@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quoteGroup: { catagory: string, quotes: Quote[], icon: string}
  constructor(private navParams: NavParams){

  }
  ngOnInit(){
    this.quoteGroup=this.navParams.data;

  }
  //IonViewDidLoad(){
    //this.quoteGroup=this.navParams.data;
  //}
  //

}
