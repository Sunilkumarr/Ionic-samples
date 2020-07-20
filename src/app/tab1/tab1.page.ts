import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public plt: Platform) {
   this.plt.ready().then((readySource) => {
     console.log('Platform ready from', readySource);
     // Platform now ready, execute any required native code
     this.login()
   });
}

  login(){
   // Your app login API web service call triggers
   var alUser = {
       'userId' : 'xyz',   //Replace it with the userId of the logged in user
       'password' : 'xyz',  //Put password here
       'authenticationTypeId' : 1,
       'applicationId' : 'applozic-sample-app',  //replace "applozic-sample-app" with Application Key from Applozic Dashboard
       'deviceApnsType' : 0    //Set 0 for Development and 1 for Distribution (Release)
   };

   applozic.login(alUser, function() {
      applozic.registerPushNotification(function() {}, function(){});
      applozic.launchChat(function() {}, function() {});
   }, function() {});
   //this.navCtrl.push(TabsPage, {}, {animate: false});
 }

}

declare var applozic: any;
