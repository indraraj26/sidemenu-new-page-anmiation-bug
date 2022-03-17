import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Printer } from '@awesome-cordova-plugins/printer/ngx';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

import { environment } from '../environments/environment';
import { DashboardPage } from './dashboard/dashboard.page';
import * as SideMenuComponents from './side-menu-content/components';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    SideMenuComponents.CompleteOrderPage,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({ mode: 'md' }),
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Printer,
    BLE,
    OneSignal,
    NativeAudio,
    Vibration,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
