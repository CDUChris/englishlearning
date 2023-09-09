import { Component, OnInit } from '@angular/core';
import { PageBase } from '../app.page';
import { AppStore } from '../app.store';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { getStorage, ref, listAll } from "firebase/storage";
import { uploadBytes } from '@firebase/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage extends PageBase implements OnInit {

  conversations = []
  conversationsSource = []

  constructor(
    protected appStore: AppStore,
    protected navCtrl: NavController,
    public route: ActivatedRoute,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private router:Router
  ) {
    super(appStore, navCtrl, route);
  }

  ngOnInit() {
    this.fetchConversations()
  }

  async fetchConversations() {

    // Create a reference to the file we want to download
    const storage = getStorage();

    // Get the download URL
    const listRef = ref(storage, 'conversations');

    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        this.conversations = this.conversationsSource = res.prefixes.map(item => ({ title: item.name,remembered:localStorage.getItem(`conversation${item.name}`) }));
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
    const fielFloderName = fileName.slice(0, fileName.lastIndexOf('.'));

    const storage = getStorage();
    const storageRef = ref(storage, 'conversations/' + fielFloderName + '/' + fileName);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then(async (snapshot) => {
      await this.hideLoading();
      const toast = await this.toastController.create({
        message: 'Upload success',
        duration: 1500,
        position: 'middle'
      });
      await toast.present();
      this.fetchConversations();
    });

  }

  onInputChange(e) {
    const { value } = e.detail || {};
    this.conversations = this.conversationsSource.filter((conversation) => conversation.title.indexOf(value) != -1)
  }

  
  onCheckboxChange(conversation,e){
    const { title } = conversation;
    const { detail: { checked } } = e;
    if (checked) {
      localStorage.setItem(`conversation${title}`, '1');
    } else {
      localStorage.removeItem(`conversation${title}`);
    }
  }

  onCheckBoxClick(e){
    e.stopPropagation()
  }
  onBack(){
    // this.location.back()
    this.router.navigate(['folder/Inbox'])
  }

}
