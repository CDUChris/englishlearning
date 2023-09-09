import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordListPageRoutingModule } from './word-list-routing.module';

import { WordListPage } from './word-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WordListPageRoutingModule
  ],
  declarations: [WordListPage]
})
export class WordListPageModule {}
