import { Component, OnInit } from '@angular/core';
import { PageBase } from '../app.page';
import { AppStore } from '../app.store';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { getStorage, ref, listAll } from "firebase/storage";
import { uploadBytes } from '@firebase/storage';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.page.html',
  styleUrls: ['./sentence.page.scss'],
})
export class SentencePage extends PageBase implements OnInit {

  sentences = []
  sentenceSource = []

  constructor(
    protected appStore: AppStore,
    protected navCtrl: NavController,
    public route: ActivatedRoute,
    private toastController: ToastController,
    private loadingController: LoadingController,
  ) {
    super(appStore, navCtrl, route);
  }

  ngOnInit() {
    this.fetchSentences()
  }


  async fetchSentences() {

    // Create a reference to the file we want to download
    const storage = getStorage();

    // Get the download URL
    const listRef = ref(storage, 'sentence');

    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        this.sentences = this.sentenceSource = res.items.map(item => {
          const name = item.name;
          // 正则匹配， ([0-9]+)匹配编号，\u4E00-\u9FA5匹配中文，
          // /([0-9]+).([a-zA-Z,]+).txt/ english
          const match = /([0-9]+).([\u4E00-\u9FA5，。]+).txt/.exec(name) || {};
          const index = match[1];
          const title = match[2];
          return { index,title,name, remembered:localStorage.getItem(`sentence${title}`) }
        }).sort((a,b)=>a.index-b.index);
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      message: '上传中...',
    });

    await loading.present();
  }
  async hideLoading() {
    await this.loadingController.dismiss();
  }

  async addFileChange(event) {
    this.showLoading();
    const file = event.target.files[0];
    const fileName = file.name;

    const storage = getStorage();
    const storageRef = ref(storage, 'sentences/'+ fileName);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then(async (snapshot) => {
      await this.hideLoading();
      const toast = await this.toastController.create({
        message: 'Upload success',
        duration: 1500,
        position: 'middle'
      });
      await toast.present();
      this.fetchSentences();
    });

  }

  onInputChange(e) {
    const { value } = e.detail || {};
    this.sentences = this.sentenceSource.filter((sentence) => sentence.title.indexOf(value) != -1)
  }

  onCheckboxChange(sentence,e){
    const { title } = sentence;
    const { detail: { checked } } = e;
    if (checked) {
      localStorage.setItem(`sentence${title}`, '1');
    } else {
      localStorage.removeItem(`sentence${title}`);
    }
  }

  onCheckBoxClick(e){
    e.stopPropagation()
  }

}
