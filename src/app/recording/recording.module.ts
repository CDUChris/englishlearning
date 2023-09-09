import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordingPageRoutingModule } from './recording-routing.module';

import { RecordingPage } from './recording.page';
import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordingPageRoutingModule
  ],
  declarations: [RecordingPage],
  providers: [
    SpeechRecognition
  ]
})
export class RecordingPageModule {}
