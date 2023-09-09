import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordsList } from './word-list';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.page.html',
  styleUrls: ['./word-list.page.scss'],
})
export class WordListPage implements OnInit {

  wordsList = []

  constructor( public location:Location, private router: Router) {
   }

  ngOnInit() {
    this.getWordListRememberStatus();
  }

  getWordListRememberStatus() {
    this.wordsList = WordsList.map(WordsListItem => {
      return {
        ...WordsListItem,
        words: WordsListItem.words.map(WordsListItemWord => {
          return {
            ...WordsListItemWord,
            remembered:localStorage.getItem(WordsListItemWord.en)
          }
        })
      }
    });
  }

  onCheckboxChange(word, e) {
    const { en } = word;
    const { detail: { checked } } = e;
    if (checked) {
      localStorage.setItem(en, '1');
    } else {
      localStorage.removeItem(en);
    }
  }

  onBack(){
    // this.location.back()
    this.router.navigate(['folder/Inbox'])
  }

}
